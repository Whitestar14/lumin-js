export const validateArray = (arr, type = "any") => {
  if (!Array.isArray(arr)) throw new TypeError("Input must be an array.");
  if (type !== "any" && arr.some((item) => typeof item !== type)) {
    throw new TypeError(`All elements must be of type ${type}.`);
  }
};

export const validateNumber = (num) => {
  if (typeof num !== "number" || isNaN(num)) {
    throw new TypeError("Input must be a valid number.");
  }
};

