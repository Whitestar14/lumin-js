import { validateArray } from "./utils/validation";

import { typeOf } from "./utils/common";

const uArr = {
  arrTool(a, c, ...value) {
    const methods = ["push", "pop", "shift", "unshift"];
    validateArray(a);

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
  },

  arrayify(a) {
    if (Array.isArray(a)) {
      return a;
    }
    if (typeOf(a, "string")) {
      return a.split("").filter((el) => el !== " "); // Strip whitespace
    }
    throw new TypeError("Input must be a string or array.");
  },

  unique(a) {
    return [...new Set(a)];
  },

  chunk(a, size) {
      validateArray(a);
    if (size <= 0) throw new Error("Chunk size must be greater than 0.");

    const result = [];
    for (let i = 0; i < a.length; i += size) {
      result.push(a.slice(i, i + size));
    }
    return result;
  },

  flatten(arr, depth = 1) {
    validateArray(arr);
    return depth > 0
      ? arr.reduce(
          (flat, item) =>
            flat.concat(
              Array.isArray(item) ? this.flatten(item, depth - 1) : item
            ),
          []
        )
      : arr.slice();
  },

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

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
  },

  difference(arr1, arr2) {
    return arr1.filter((item) => !arr2.includes(item));
  },

  intersection(arr1, arr2) {
    return arr1.filter((item) => arr2.includes(item));
  },

  toObject(a, keyFn) {
    if (!typeOf(keyFn, "function")) {
      throw new TypeError("Key generator must be a function.");
    }

    return a.reduce((obj, item) => {
      obj[keyFn(item)] = item;
      return obj;
    }, {});
  },

  groupBy(a, keyFn) {
    return a.reduce((acc, item) => {
      const key = keyFn(item);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
  },

  removeElement(a, element) {
    return a.filter((item) => item !== element);
  },
};

export default uArr;