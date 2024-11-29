// Lumin.js - A collection of developer utility functions

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

  unique(a) {
    return [...new Set(a)];
  }

  chunk(a, size) {
    if (!Array.isArray(a)) throw new TypeError("Input must be an array.");
    if (size <= 0) throw new Error("Chunk size must be greater than 0.");

    const result = [];
    for (let i = 0; i < a.length; i += size) {
      result.push(a.slice(i, i + size));
    }
    return result;
  }

  flatten(a) {
    return a.reduce(
      (acc, val) => acc.concat(Array.isArray(val) ? this.flatten(val) : val),
      []
    );
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  findDuplicates(a) {
    const seen = new Set();
    const duplicates = new Set();

    for (const item of a) {
      if (seen.has(item)) {
        duplicates.add(item);
      } else {
        seen.add(item);
      }
    }

    return [...duplicates];
  }

  difference(arr1, arr2) {
    return arr1.filter((item) => !arr2.includes(item));
  }

  intersection(arr1, arr2) {
    return arr1.filter((item) => arr2.includes(item));
  }

  toObject(a, keyFn) {
    if (typeof keyFn !== "function") {
      throw new TypeError("Key generator must be a function.");
    }

    return a.reduce((obj, item) => {
      obj[keyFn(item)] = item;
      return obj;
    }, {});
  }

  groupBy(a, keyFn) {
    return a.reduce((acc, item) => {
      const key = keyFn(item);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
  }

  removeElement(a, element) {
    return a.filter((item) => item !== element);
  }
}

class uStr {
  constructor() {}

  // Counts the occurrences of a character in a string
  countChar(s, w, v = false) {
    let i = 0,
      c = 0;
    while (i < s.length) {
      if (s[i] === w) {
        c++;
      }
      i++;
    }
    if (v) {
      console.log(`There are ${c} '${w}' occurrences in '${s}'`);
    }
    return c;
  }

  // Converts an array to a comma-separated string
  stringify(a) {
    if (Array.isArray(a)) {
      return a.join(", ");
    } else {
      console.warn("The parameter is not an array.");
      return null;
    }
  }

  // Reverses a string
  reverseString(s) {
    if (typeof s === "string") {
      return s.split("").reverse().join("");
    } else {
      console.warn("The parameter is not a string.");
      return null;
    }
  }

  // Finds the similarity between two strings using Levenshtein distance
  textSimilarity(s1, s2) {
    if (typeof s1 !== "string" || typeof s2 !== "string") {
      console.warn("Both parameters must be strings.");
      return null;
    }

    const levenshteinDistance = (a, b) => {
      const matrix = Array.from({ length: a.length + 1 }, (_, i) =>
        Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : i))
      );

      for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
          if (a[i - 1] === b[j - 1]) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] =
              Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) +
              1;
          }
        }
      }
      return matrix[a.length][b.length];
    };

    const distance = levenshteinDistance(s1, s2);
    const maxLength = Math.max(s1.length, s2.length);
    return ((maxLength - distance) / maxLength) * 100; // Similarity percentage
  }

  // Obfuscates a string
  obfuscate(s, level = 0.5) {
    if (typeof s !== "string" || typeof level !== "number" || level < 0 || level > 1) {
      console.warn("Invalid parameters. Provide a string and a level between 0 and 1.");
      return null;
    }

    const chars = s.split("");
    const obfuscationLevel = Math.ceil(chars.length * level);

    for (let i = 0; i < obfuscationLevel; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      chars[randomIndex] = "*";
    }

    return chars.join("");
  }

  // Removes all whitespace from a string
  stripWhitespace(s) {
    if (typeof s === "string") {
      return s.replace(/\s+/g, "");
    } else {
      console.warn("The parameter is not a string.");
      return null;
    }
  }

  // Checks if a string is a palindrome
  isPalindrome(s) {
    if (typeof s !== "string") {
      console.warn("The parameter is not a string.");
      return false;
    }

    const cleaned = s.replace(/[\W_]/g, "").toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
  }

  // Counts the words in a string
  wordCount(s) {
    if (typeof s === "string") {
      return s.trim().split(/\s+/).length;
    } else {
      console.warn("The parameter is not a string.");
      return null;
    }
  }

  // Truncates a string to a specified length and adds ellipses
  truncate(s, length) {
    if (typeof s === "string" && typeof length === "number" && length > 0) {
      return s.length > length ? s.slice(0, length) + "..." : s;
    } else {
      console.warn("Invalid parameters. Provide a string and a positive length.");
      return null;
    }
  }

  // Capitalizes the first letter of each word
  capitalizeWords(s) {
    if (typeof s === "string") {
      return s
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    } else {
      console.warn("The parameter is not a string.");
      return null;
    }
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
