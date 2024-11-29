import { typeOf } from "./utils/common";
import { validateArray } from "./utils/validation";

const uStr = {
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
  },

  // Converts an array to a comma-separated string
  stringify(a) {
    validateArray(a);
    return a.join(", ");
  },

  // Reverses a string
  reverse(str) {
    if (!typeOf(str, "string")) throw new TypeError("Input must be a string.");
    return [...str].reverse().join("");
  },

  // Finds the similarity between two strings using Levenshtein distance
  textSimilarity(str1, str2) {
    if (!typeOf(str1, "string") || !typeOf(str2, "string")) {
      throw new TypeError("Both inputs must be strings.");
    }
    const normalize = (s) => s.toLowerCase().replace(/\s+/g, "");
    const [a, b] = [normalize(str1), normalize(str2)];
    let matches = 0;
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] === b[i]) matches++;
    }

    return (matches / Math.max(a.length, b.length)).toFixed(2);
  },

  // Obfuscates a string
  obfuscate(s, level = 0.5) {
    if (
      !typeOf(s, "string") ||
      !typeOf(level, "number") ||
      level < 0 ||
      level > 1
    ) {
      console.warn(
        "Invalid parameters. Provide a string and a level between 0 and 1."
      );
      return null;
    }

    const chars = s.split("");
    const obfuscationLevel = Math.ceil(chars.length * level);

    for (let i = 0; i < obfuscationLevel; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      chars[randomIndex] = "*";
    }

    return chars.join("");
  },

  // Removes all whitespace from a string
  stripWhitespace(s) {
    if (typeOf(s, "string")) {
      return s.replace(/\s+/g, "");
    } else {
      console.warn("The parameter is not a string.");
      return null;
    }
  },

  // Checks if a string is a palindrome
  isPalindrome(s) {
    if (typeof s !== "string") {
      console.warn("The parameter is not a string.");
      return false;
    }

    const cleaned = s.replace(/[\W_]/g, "").toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
  },

  // Counts the words in a string
  wordCount(s) {
    if (typeOf(s, "string")) {
      return s.trim().split(/\s+/).length;
    } else {
      console.warn("The parameter is not a string.");
      return null;
    }
  },

  // Truncates a string to a specified length and adds ellipses
  truncate(s, length) {
    if (typeOf(s, "string") && typeOf(length, "number") && length > 0) {
      return s.length > length ? s.slice(0, length) + "..." : s;
    } else {
      console.warn(
        "Invalid parameters. Provide a string and a positive length."
      );
      return null;
    }
  },

  // Capitalizes the first letter of each word
  capitalize(str) {
    if (!typeOf(s, "string")) throw new TypeError("Input must be a string.");
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },
};

export default uStr;
