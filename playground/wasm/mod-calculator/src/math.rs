use nekolib::math::{Gcd, GcdRecip, ModPow};

pub trait Math {
    fn is_prime(self) -> bool;
}

impl Math for u64 {
    fn is_prime(self) -> bool {
        let n = self;
        if n >> 32 == 0 { is_prime_32(n) } else { is_prime_64(n) }
    }
}

const BASES: [u16; 256] = [
    15591, 2018, 166, 7429, 8064, 16045, 10503, 4399, 1949, 1295, 2776, 3620,
    560, 3128, 5212, 2657, 2300, 2021, 4652, 1471, 9336, 4018, 2398, 20462,
    10277, 8028, 2213, 6219, 620, 3763, 4852, 5012, 3185, 1333, 6227, 5298,
    1074, 2391, 5113, 7061, 803, 1269, 3875, 422, 751, 580, 4729, 10239, 746,
    2951, 556, 2206, 3778, 481, 1522, 3476, 481, 2487, 3266, 5633, 488, 3373,
    6441, 3344, 17, 15105, 1490, 4154, 2036, 1882, 1813, 467, 3307, 14042,
    6371, 658, 1005, 903, 737, 1887, 7447, 1888, 2848, 1784, 7559, 3400, 951,
    13969, 4304, 177, 41, 19875, 3110, 13221, 8726, 571, 7043, 6943, 1199, 352,
    6435, 165, 1169, 3315, 978, 233, 3003, 2562, 2994, 10587, 10030, 2377,
    1902, 5354, 4447, 1555, 263, 27027, 2283, 305, 669, 1912, 601, 6186, 429,
    1930, 14873, 1784, 1661, 524, 3577, 236, 2360, 6146, 2850, 55637, 1753,
    4178, 8466, 222, 2579, 2743, 2031, 2226, 2276, 374, 2132, 813, 23788, 1610,
    4422, 5159, 1725, 3597, 3366, 14336, 579, 165, 1375, 10018, 12616, 9816,
    1371, 536, 1867, 10864, 857, 2206, 5788, 434, 8085, 17618, 727, 3639, 1595,
    4944, 2129, 2029, 8195, 8344, 6232, 9183, 8126, 1870, 3296, 7455, 8947,
    25017, 541, 19115, 368, 566, 5674, 411, 522, 1027, 8215, 2050, 6544, 10049,
    614, 774, 2333, 3007, 35201, 4706, 1152, 1785, 1028, 1540, 3743, 493, 4474,
    2521, 26845, 8354, 864, 18915, 5465, 2447, 42, 4511, 1660, 166, 1249, 6259,
    2553, 304, 272, 7286, 73, 6554, 899, 2816, 5197, 13330, 7054, 2818, 3199,
    811, 922, 350, 7514, 4452, 3449, 2663, 4708, 418, 1621, 1171, 3471, 88,
    11345, 412, 1559, 194,
];

fn is_sprp(n: u64, a: u64) -> bool {
    let s = (n - 1).trailing_zeros();
    let d = n >> s;
    let mut cur = a.mod_pow(d, n);
    if cur == 1 {
        return true;
    }
    for _ in 0..s {
        if cur == n - 1 {
            return true;
        }
        cur = cur * cur % n;
    }
    false
}

fn is_prime_32(n: u64) -> bool {
    if n == 2 || n == 3 || n == 5 || n == 7 {
        return true;
    }
    if n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0 {
        return false;
    }
    if n < 121 {
        return n > 1;
    }
    let h = n as usize;
    let h = ((h >> 16) ^ h).wrapping_mul(0x45d9f3b);
    let h = ((h >> 16) ^ h).wrapping_mul(0x45d9f3b);
    let h = ((h >> 16) ^ h) & 255;
    is_sprp(n as u64, BASES[h] as u64)
}

fn is_prime_64(n: u64) -> bool {
    if n == 2 || n == 3 || n == 5 || n == 7 {
        return true;
    }
    if n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0 {
        return false;
    }
    if n < 121 {
        return n > 1;
    }

    [2, 325, 9375, 28178, 450775, 9780504, 1795265022]
        .iter()
        .all(|&a| n % a != 0 && (n.gcd(a) != 1 || is_sprp(n, a)))
}

pub trait Calc: Sized {
    fn mod_sqrt(self, m: Self) -> Result<Self, String>;
    fn mod_factorial(self, m: Self) -> Self;
    fn mod_reciprocal(self, m: Self) -> Result<Self, String>;
    fn mod_binom(self, rhs: Self, m: Self) -> Result<Self, String>;
    fn mod_perm(self, rhs: Self, m: Self) -> Self;
}

impl Calc for u128 {
    fn mod_sqrt(self, m: u128) -> Result<u128, String> {
        if m == 1 {
            return Ok(0);
        }
        if !(m as u64).is_prime() {
            return Err("Sorry, but $\\sqrt{\\bullet}$ for composite $m$ is not supported.".to_owned());
        }

        let p = m;
        let a = self % p;

        if a <= 1 {
            return Ok(a);
        }
        // p >= 3

        if p % 4 == 3 {
            let e = (p + 1) / 4;
            let r = a.mod_pow(e, p);
            return (r * r % p == a)
                .then(|| r.min(p - r))
                .ok_or_else(|| "It does not exist.".to_owned());
        }

        let c = (p - 1) / 2; // c >= 1
        if a.mod_pow(c, p) != 1 {
            return Err("It does not exist.".to_owned());
        }

        let z = (2..p)
            .find(|&z| z.mod_pow(c, p) == p - 1)
            .ok_or_else(|| "It does not exist.".to_owned())?;
        let mut e = 0;
        let mut o = c;
        while o % 2 != 1 {
            e /= 2;
            o /= 2;
            let tmp = z.mod_pow(e, p) * a.mod_pow(o, p) % p;
            if tmp != 1 {
                e += c;
            }
            // z^e a^o = 1 (mod p)
        }

        let r = z.mod_pow(e / 2, p) * a.mod_pow((o + 1) / 2, p) % p;
        Ok(r.min(p - r))
    }
    fn mod_factorial(self, m: u128) -> u128 {
        // note: 0! mod 1 should return 0
        let n = self;
        if n >= m || m == 1 { 0 } else { (1..=n).fold(1, |x, y| x * y % m) }
    }
    fn mod_reciprocal(self, m: u128) -> Result<u128, String> {
        let n = self;
        let (g, r) = n.gcd_recip(m);
        if g == 1 { Ok(r) } else { Err("It does not exist.".to_owned()) }
    }
    fn mod_binom(self, rhs: u128, m: u128) -> Result<u128, String> {
        if !(m as u64).is_prime() {
            return Err("Sorry, but ${}_{\\bullet}C_{\\bullet}$ for composite $m$ is not supported.".to_owned());
        }
        fn mod_fact_e(n: u128, p: u128, e: &mut u128) -> u128 {
            if n == 0 {
                return 1;
            }
            let res = mod_fact_e(n / p, p, e);
            *e += n / p;
            if n / p % 2 != 0 {
                res * (p - (n % p).mod_factorial(p)) % p
            } else {
                res * (n % p).mod_factorial(p) % p
            }
        }
        let (n, k) = (self, rhs);
        if n < k {
            return Ok(0);
        }
        let (mut e1, mut e2, mut e3) = (0, 0, 0);
        let a1 = mod_fact_e(n, m, &mut e1);
        let a2 = mod_fact_e(k, m, &mut e2);
        let a3 = mod_fact_e(n - k, m, &mut e3);
        Ok(if e1 > e2 + e3 { 0 } else { a1 * (a2 * a3).gcd_recip(m).1 % m })
    }
    fn mod_perm(self, rhs: u128, m: u128) -> u128 {
        let lhs = self;
        if m == 1 || lhs < rhs || rhs >= m {
            return 0;
        }
        (lhs - rhs + 1..=lhs).fold(1, |x, y| x * y % m)
    }
}

#[test]
#[ignore]
fn test_prime() {
    for i in 0..=4294967295 {
        if i % 10000000 == 0 {
            eprintln!("{}", i);
        }
        assert_eq!(is_prime_32(i), is_prime_64(i), "i: {}", i);
    }
    // passed
}
