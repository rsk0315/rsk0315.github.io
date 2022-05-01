mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
#[derive(Clone, Copy, Eq, PartialEq)]
pub enum Operator {
    Square,

    Plus,

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
    pub fn unary(self, n: u64) -> Result<(String, u64), String> {
        match self {
            Operator::Square => Ok((format!("{} ^ 2", n), n * n)),
            _ => Err("bad".to_string()),
        }
    }
    pub fn binary(self, lhs: u64, rhs: u64) -> Result<(String, u64), String> {
        match self {
            Operator::Plus => Ok((format!("{} + {}", lhs, rhs), lhs + rhs)),
            _ => Err("bad".to_string()),
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
        CalcResult { lhs: "".to_owned(), err: "".to_owned() }
    }
    pub fn unary(&mut self, op: Operator) -> CalcResult {
        let n = self.int;
        match op.unary(n) {
            Ok((lhs, rhs)) => {
                self.int = rhs;
                self.int_mode = false;
                CalcResult { lhs, err: "".to_owned() }
            }
            Err(err) => CalcResult { lhs: "".to_owned(), err },
        }
    }
    pub fn binary(&mut self, op: Operator) -> CalcResult {
        self.op = Some((op, self.int));
        self.int = 0;
        CalcResult { lhs: "".to_owned(), err: "".to_owned() }
    }
    pub fn nullary(&mut self, op: Operator) -> CalcResult {
        let (lhs, err) = match op {
            Operator::Enter => {
                if let Some((op, arg1)) = self.op {
                    let arg2 = self.int;
                    match op.binary(arg1, arg2) {
                        Ok((lhs, rhs)) => {
                            self.int = rhs;
                            self.int_mode = false;
                            (lhs, "".to_owned())
                        }
                        Err(err) => ("".to_owned(), err),
                    }
                } else {
                    ("bad".to_owned(), "bad".to_owned())
                }
            }
            Operator::Clear => {
                self.int = 0;
                self.int_mode = false;
                self.op = None;
                ("".to_owned(), "".to_owned())
            }
            _ => ("bad".to_owned(), "bad".to_owned()),
        };
        CalcResult { lhs, err }
    }
    pub fn get(&self) -> u64 { self.int }
    pub fn prime_mod(&self) -> bool {
        //
        false
    }
}
