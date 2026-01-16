const calculateGrade = require('./gradeCalculator');

test('score 85 should return A', () => {
  expect(calculateGrade(85)).toBe('A');
});

test('score 70 should return B', () => {
  expect(calculateGrade(70)).toBe('B');
});

test('score 60 should return C', () => {
  expect(calculateGrade(60)).toBe('C');
});

test('score 50 should return D', () => {
  expect(calculateGrade(50)).toBe('D');
});

test('score 40 should return F', () => {
  expect(calculateGrade(40)).toBe('F');
});
