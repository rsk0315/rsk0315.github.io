use nekolib::math::GcdRecip;

pub trait Math {
    fn is_prime(self) -> bool;
}

impl Math for u64 {
    fn is_prime(self) -> bool {
        let n = self;
        if n >> 32 == 0 { is_prime_32(n) } else { is_prime_64(n) }
    }
}

fn is_prime_32(n: u64) -> bool {
    //
    true
}

fn is_prime_64(n: u64) -> bool {
    //
    false
}

pub trait Calc: Sized {
    fn mod_sqrt(self, m: Self) -> Result<Self, String>;
    fn mod_factorial(self, m: Self) -> Self;
    fn mod_reciprocal(self, m: Self) -> Result<Self, String>;
    fn mod_binom(self, rhs: Self, m: Self) -> Self;
    fn mod_perm(self, rhs: Self, m: Self) -> Self;
}

impl Calc for u128 {
    fn mod_sqrt(self, m: u128) -> Result<u128, String> {
        if m == 1 {
            return Ok(0);
        }
        if (m as u64).is_prime() {
            return Err("Sorry, but $\\sqrt{\\bullet}$ for composite $m$ is not supported".to_owned());
        }
        // Tonelli--Shanks
        todo!();
    }
    fn mod_factorial(self, m: u128) -> u128 {
        // note: 0! mod 1 should return 0
        let n = self;
        if n >= m || m == 1 { 0 } else { (1..=n).fold(1, |x, y| x * y % m) }
    }
    fn mod_reciprocal(self, m: u128) -> Result<u128, String> {
        let n = self;
        let (g, r) = n.gcd_recip(m);
        if g == 1 {
            Ok(r)
        } else {
            Err(format!(
                "${}^{{-1}}$ does not exist, since $\\gcd({}, {}) \\ne 1$.",
                n, n, m
            ))
        }
    }
    fn mod_binom(self, rhs: u128, m: u128) -> u128 {
        todo!();
    }
    fn mod_perm(self, rhs: u128, m: u128) -> u128 {
        let lhs = self;
        if m == 1 || lhs < rhs || rhs >= m {
            return 0;
        }
        (lhs - rhs + 1..=lhs).fold(1, |x, y| x * y % m)
    }
}
