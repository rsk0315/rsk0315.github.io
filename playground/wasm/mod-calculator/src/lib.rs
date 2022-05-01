mod math;
mod utils;

use math::{Calc, Math};
use nekolib::math::{DLog, GcdRecip, ModAckermann, ModPow, ModTetration};

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
#[derive(Clone, Copy, Eq, PartialEq)]
pub enum Operator {
    Sqrt,
    Factorial,
    Reciprocal,

    Add,
    Sub,
    Mul,
    Div,
    Pow,
    DLog,
    Ackermann,
    Binom,
    Perm,
    Tetration,

    Enter,
    Clear,
}

#[wasm_bindgen]
pub struct CalcStack {
    m: u64,
    int: u64,
    op: Option<(Operator, u64)>,
    int_mode: bool,
}

#[wasm_bindgen]
pub struct CalcResult {
    lhs: String,
    err: String,
}

#[wasm_bindgen]
impl CalcResult {
    pub fn lhs(&self) -> String { self.lhs.clone() }
    pub fn err(&self) -> String { self.err.clone() }
}

impl Operator {
    pub fn unary(self, arg1: u64, m: u64) -> (String, Result<u64, String>) {
        let n = arg1 as u128;
        let m = m as u128;
        let res = match self {
            Operator::Sqrt => m.mod_sqrt(m),
            Operator::Factorial => Ok(n.mod_factorial(m)),
            Operator::Reciprocal => n.mod_reciprocal(m),
            _ => Err("bad".to_string()),
        };
        (self.display_unary(arg1), res.map(|e| e as u64))
    }
    pub fn binary(
        self,
        arg1: u64,
        arg2: u64,
        m: u64,
    ) -> (String, Result<u64, String>) {
        let lhs = arg1 as u128;
        let rhs = arg2 as u128;
        let m = m as u128;
        let res = match self {
            Operator::Add => Ok((lhs + rhs) % m),
            Operator::Sub => Ok((lhs + m - rhs % m) % m),
            Operator::Mul => Ok((lhs * rhs) % m),
            Operator::Div => {
                let (g, r) = rhs.gcd_recip(m);
                if g == 1 {
                    Ok((lhs * r) % m)
                } else {
                    Err(format!(
                        "Since $\\gcd({}, {}) \\ne 1, ${}^{{-1}}$ does not exist$.",
                        rhs, m, rhs
                    ))
                }
            }
            Operator::Pow => Ok(lhs.mod_pow(rhs, m)),
            Operator::DLog => {
                lhs.dlog(rhs, m).ok_or_else(|| "It does not exist.".to_owned())
            }
            Operator::Ackermann => Ok(lhs.mod_ackermann(rhs, m)),
            Operator::Binom => Ok(lhs.mod_binom(rhs, m)),
            Operator::Perm => Ok(lhs.mod_perm(rhs, m)),
            Operator::Tetration => Ok(lhs.mod_tetration(rhs, m)),
            _ => panic!(),
        };
        (self.display_binary(arg1, arg2), res.map(|rhs| rhs as u64))
    }
    pub fn display_unary(self, arg1: u64) -> String {
        match self {
            Operator::Sqrt => format!("\\sqrt{{{}}}", arg1),
            Operator::Factorial => format!("{}!", arg1),
            Operator::Reciprocal => format!("{}^{{-1}}", arg1),
            _ => panic!(),
        }
    }
    pub fn display_binary_wip(self, arg1: u64, arg2: Option<u64>) -> String {
        let arg2 = arg2
            .map(|e| format!("{}\\bullet", e))
            .unwrap_or("\\bullet".to_owned());
        self.display_binary_internal(arg1.to_string(), arg2)
    }
    pub fn display_binary(self, arg1: u64, arg2: u64) -> String {
        self.display_binary_internal(arg1.to_string(), arg2.to_string())
    }
    fn display_binary_internal(self, arg1: String, arg2: String) -> String {
        match self {
            Operator::Add => format!("{} + {}", arg1, arg2),
            Operator::Sub => format!("{} - {}", arg1, arg2),
            Operator::Mul => format!("{} \\times {}", arg1, arg2),
            Operator::Div => format!("{} \\times {}^{{-1}}", arg1, arg2),
            Operator::Pow => format!("{} ^ {{{}}}", arg1, arg2),
            Operator::DLog => {
                format!("\\operatorname{{dlog}}_{{{}}}({})", arg1, arg2)
            }
            Operator::Ackermann => format!("A({}, {})", arg1, arg2),
            Operator::Binom => format!("{{}}_{{{}}} C_{{{}}}", arg1, arg2),
            Operator::Perm => format!("{{}}_{{{}}} P_{{{}}}", arg1, arg2),
            Operator::Tetration => format!("{{}}^{{{}}} {}", arg2, arg1),
            _ => panic!(),
        }
    }
}

#[wasm_bindgen]
impl CalcStack {
    pub fn new(m: u64) -> Self { Self { m, int: 0, op: None, int_mode: true } }
    pub fn put_int(&mut self, i: u64) -> CalcResult {
        if self.int_mode {
            self.int *= 10;
            self.int += i;
        } else {
            self.int = i;
        }
        self.int_mode = true;
        let lhs = match self.op {
            Some((op, lhs)) => op.display_binary_wip(lhs, Some(self.int)),
            None => format!("{}\\bullet", self.int),
        };
        CalcResult { lhs, err: "".to_owned() }
    }
    pub fn unary(&mut self, op: Operator) -> CalcResult {
        let n = self.int;
        match op.unary(n, self.m) {
            (lhs, Ok(rhs)) => {
                self.int = rhs;
                self.int_mode = false;
                CalcResult { lhs, err: "".to_owned() }
            }
            (lhs, Err(err)) => CalcResult { lhs, err },
        }
    }
    pub fn binary(&mut self, op: Operator) -> CalcResult {
        let lhs = self.int;
        self.op = Some((op, self.int));
        self.int = 0;
        CalcResult {
            lhs: op.display_binary_wip(lhs, None),
            err: "".to_owned(),
        }
    }
    pub fn nullary(&mut self, op: Operator) -> CalcResult {
        let (lhs, err) = match op {
            Operator::Enter => {
                if let Some((op, arg1)) = self.op {
                    let arg2 = self.int;
                    match op.binary(arg1, arg2, self.m) {
                        (lhs, Ok(rhs)) => {
                            self.int = rhs;
                            self.int_mode = false;
                            (lhs, "".to_owned())
                        }
                        (lhs, Err(err)) => {
                            self.int = 0;
                            (lhs, err)
                        }
                    }
                } else {
                    (self.int.to_string(), "".to_owned())
                }
            }
            Operator::Clear => {
                self.int = 0;
                self.int_mode = false;
                self.op = None;
                ("\\bullet".to_owned(), "".to_owned())
            }
            _ => ("bad".to_owned(), "bad".to_owned()),
        };
        CalcResult { lhs, err }
    }
    pub fn get(&self) -> u64 { self.int }
    pub fn mod_message(&self) -> String {
        let res = match self.m {
            0 => "👿",
            1..=4294967295 if self.m.is_prime() => "prime",
            1..=4294967295 => "",
            _ if self.m.is_prime() => "prime (too large)",
            _ => "too large",
        };
        res.to_owned()
    }
}
