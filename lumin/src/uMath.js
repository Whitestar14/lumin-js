import { gcd, lcm, typeOf } from "./utils/common.js";
import { validateArray } from "./utils/validation.js";

const uMath = {
  isEven(a) {
    return a % 2 === 0;
  },

  max(n) {
    if (typeOf(n, "number")) {
      return Math.max(...arguments);
    }
    if (Array.isArray(n)) {
      return Math.max(...n);
    }
    throw new TypeError("Input must be a number or array of numbers.");
  },

  min(n) {
    if (typeOf(n, "number")) {
      return Math.min(...arguments);
    }
    if (Array.isArray(n)) {
      return Math.min(...n);
    }
    throw new TypeError("Input must be a number or array of numbers.");
  },

  sum(arr) {
    validateArray(arr);
    return arr.reduce((a, b) => a + b, 0);
  },

  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  },

  modulo(value, divisor) {
    return ((value % divisor) + divisor) % divisor;
  },

  randomFloat(min, max) {
    return Math.random() * (max - min) + min;
  },

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  randomChoice(arr) {
    validateArray(arr);
    return arr[Math.floor(Math.random() * arr.length)];
  },

  distance(x1, y1, x2, y2, z1 = 0, z2 = 0) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
  },

  angle(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
  },

  mean(arr) {
    validateArray(arr);
    if (arr.some(isNaN))
      throw new TypeError("Input must be an array of numbers.");
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
  },

  median(arr) {
    validateArray(arr);
    if (arr.some(isNaN))
      throw new TypeError("Input must be an array of numbers.");
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];
  },

  mode(arr) {
    const freqMap = arr.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
    }, {});

    const maxFreq = Math.max(...Object.values(freqMap));
    return Object.keys(freqMap)
      .filter((key) => freqMap[key] === maxFreq)
      .map(Number);
  },

  fibonnaci(n) {
    if (n <= 1) return n;
    return this.fibonnaci(n - 1) + this.fibonnaci(n - 2);
  },

  gcd,

  lcm,

  factorial(n) {
    if (n < 0)
      throw new Error("Factorial is not defined for negative numbers.");
    return n === 0 ? 1 : n * this.factorial(n - 1);
  },

  mapRange(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  },

  isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  },

  generatePrimes(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
      if (this.isPrime(i)) primes.push(i);
    }
    return primes;
  },

  degreesToRadians(deg) {
    return (deg * Math.PI) / 180;
  },

  radiansToDegrees(rad) {
    return (rad * 180) / Math.PI;
  },
};

export default uMath;
