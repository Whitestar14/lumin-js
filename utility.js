// Utility.js - A collection of developer utility functions

let cl = console.log;

function typeOf(a, b = null) {
  if (b === null) return typeof a;
  return typeof a === b;
}

function isUpper(s) {
  if (typeOf(s, "string")) {
    const re = /^[A-Z]+$/;
    return re.test(s);
  }
  return false;
}

function changeCase(s) {
  if (typeOf(s, "string")) {
    return isUpper(s) ? s.toLowerCase() : s.toUpperCase();
  }
  if (Array.isArray(s)) {
    return s.map((el) => (typeOf(el, "string") ? changeCase(el) : el));
  }
  throw new TypeError("Input must be a string or an array of strings.");
}

class uArr {
  arrTool(a, c, ...value) {
    const methods = ["push", "pop", "shift", "unshift"];
    if (!Array.isArray(a))
      throw new TypeError("First argument must be an array.");

    switch (c) {
      case "push":
        a.push(...value);
        break;
      case "pop":
        a.pop();
        break;
      case "shift":
        a.shift();
        break;
      case "unshift":
        a.unshift(...value);
        break;
      default:
        cl("Available methods:", methods);
    }
    return a;
  }

  arrayify(a) {
    if (Array.isArray(a)) {
      return a;
    }
    if (typeOf(a, "string")) {
      return a.split("").filter((el) => el !== " "); // Strip whitespace
    }
    throw new TypeError("Input must be a string or array.");
  }
}

class uStr {
  countChar(s, w, verbose = false) {
    let count = 0;
    for (let char of s) {
      if (char === w) count++;
    }
    if (verbose) {
      cl(`There are ${count} '${w}' occurrences in '${s}'`);
    }
    return count;
  }

  stringify(a) {
    if (typeOf(a, "string")) {
      console.warn("Input is already a string:", a);
      return a;
    }
    if (Array.isArray(a)) {
      return a.join(", ");
    }
    throw new TypeError("Input must be a string or array.");
  }

  reverseString(s) {
    let ns = "",
      i = s.length - 1;
    while (i >= 0) {
      ns += s[i];
      i--;
    }
    return ns;
  }
}

class uMath {
  isEven(a) {
    return a % 2 === 0;
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  max(n) {
    if (typeOf(n, "number")) {
      return Math.max(...arguments);
    }
    if (Array.isArray(n)) {
      return Math.max(...n);
    }
    throw new TypeError("Input must be a number or array of numbers.");
  }

  min(n) {
    if (typeOf(n, "number")) {
      return Math.min(...arguments);
    }
    if (Array.isArray(n)) {
      return Math.min(...n);
    }
    throw new TypeError("Input must be a number or array of numbers.");
  }

  sum(arr) {
    if (!Array.isArray(arr)) throw new TypeError("Input must be an array.");
    return arr.reduce((a, b) => a + b, 0);
  }

  fibonnaci(n) {
    if (n <= 1) return n;
    return this.fibonnaci(n - 1) + this.fibonnaci(n - 2);
  }

  factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * this.factorial(n - 1);
  }
}
