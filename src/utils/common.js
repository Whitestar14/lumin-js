export const sortNumericAsc = (arr) => [...arr].sort((a, b) => a - b);

export const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

export const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);

export const typeOf = (a, b = null) => {
  if (b === null) {
    return typeof a;
  }
  return typeof a === b;
};