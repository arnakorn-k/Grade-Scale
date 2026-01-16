# Grade Calculator

A simple JavaScript utility that converts numerical scores into letter grades.

## Features

- Converts numerical scores (0-100) to letter grades (A, B, C, D, F)
- Simple and lightweight implementation
- Fully tested with Jest

## Installation

```bash
npm install
```

## Usage

```javascript
const calculateGrade = require('./gradeCalculator');

console.log(calculateGrade(85));  // Output: A
console.log(calculateGrade(70));  // Output: B
console.log(calculateGrade(60));  // Output: C
console.log(calculateGrade(50));  // Output: D
console.log(calculateGrade(40));  // Output: F
```

## Grade Scale

| Score Range | Grade |
|------------|-------|
| 80 - 100  | A     |
| 70 - 79   | B     |
| 60 - 69   | C     |
| 50 - 59   | D     |
| Below 50  | F     |

## Testing

Run the test suite:

```bash
npm test
```

This will execute all tests in `gradeCalculator.test.js` using Jest.

## License

ISC
