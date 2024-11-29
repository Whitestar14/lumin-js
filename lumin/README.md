# Lumin.js Documentation

Lumin.js is a modular JavaScript utility library designed to simplify and enhance array, string, and mathematical operations. With a well-structured design and extensive functionality, Lumin.js is the perfect toolkit for developers looking to improve productivity and streamline common programming tasks.

---

## Installation

You can install Lumin.js using npm:

```bash
npm install lumin-js
```

Or include it directly in your HTML file:

```html
<script src="path/to/lumin.min.js"></script>
```

---

## Usage

Import the modules you need:

```javascript
import Lumin from 'lumin-js';

const { uMath, uStr, uArr } = Lumin;
```

Or use specific modules directly:

```javascript
import uMath from 'lumin-js/src/uMath';
import uStr from 'lumin-js/src/uStr';
import uArr from 'lumin-js/src/uArr';
```

---

## Modules

### 1. uMath

Mathematical utilities for number manipulation, statistics, geometry, and randomness.

#### Functions

- **`clamp(value, min, max)`**
  Clamps a number within a specified range.
  
  ```javascript
  uMath.clamp(10, 0, 5); // Output: 5
  ```

- **`modulo(value, divisor)`**
  Computes the true modulo of a number.
  
  ```javascript
  uMath.modulo(-3, 5); // Output: 2
  ```

- **`randomFloat(min, max)`**
  Generates a random floating-point number between `min` and `max`.
  
  ```javascript
  uMath.randomFloat(1.5, 3.5); // Output: 2.837 (example)
  ```

- **`randomInt(min, max)`**
  Generates a random integer between `min` and `max`.
  
  ```javascript
  uMath.randomInt(1, 10); // Output: 7 (example)
  ```

- **`mean(arr)`**
  Calculates the mean of an array of numbers.
  
  ```javascript
  uMath.mean([1, 2, 3, 4]); // Output: 2.5
  ```

- **`gcd(a, b)`**
  Finds the greatest common divisor of two numbers.
  
  ```javascript
  uMath.gcd(12, 18); // Output: 6
  ```

- **`lcm(a, b)`**
  Finds the least common multiple of two numbers.
  
  ```javascript
  uMath.lcm(12, 18); // Output: 36
  ```

- **`mapRange(value, inMin, inMax, outMin, outMax)`**
  Maps a value from one range to another.
  
  ```javascript
  uMath.mapRange(5, 0, 10, 0, 100); // Output: 50
  ```

### 2. uStr

String utilities for processing, formatting, and analysis.

#### Functions

- **`capitalize(str)`**
  Capitalizes the first letter of a string.
  
  ```javascript
  uStr.capitalize("hello"); // Output: "Hello"
  ```

- **`reverse(str)`**
  Reverses a string.
  
  ```javascript
  uStr.reverse("world"); // Output: "dlrow"
  ```

- **`textSimilarity(str1, str2)`**
  Measures the similarity between two strings (returns a value between 0 and 1).
  
  ```javascript
  uStr.textSimilarity("kitten", "sitting"); // Output: 0.57
  ```

### 3. uArr

Array utilities for manipulation, searching, and analysis.

#### Functions

- **`unique(arr)`**
  Removes duplicate values from an array.
  
  ```javascript
  uArr.unique([1, 2, 2, 3]); // Output: [1, 2, 3]
  ```

- **`flatten(arr, depth)`**
  Flattens a nested array up to the specified depth.
  
  ```javascript
  uArr.flatten([1, [2, [3, 4]]], 2); // Output: [1, 2, 3, 4]
  ```

- **`chunk(arr, size)`**
  Splits an array into chunks of the specified size.
  
  ```javascript
  uArr.chunk([1, 2, 3, 4, 5], 2); // Output: [[1, 2], [3, 4], [5]]
  ```

---

## Testing

Run the unit tests to ensure all functionalities are working:

```bash
npm test
```

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes with descriptive messages.
4. Push your changes and create a pull request.

---

## License

Lumin.js is licensed under the MIT License. Feel free to use, modify, and distribute it.

---

## Contact

For questions or suggestions, please contact the maintainer at [GitHub: Whitestar14](https://github.com/Whitestar14).

