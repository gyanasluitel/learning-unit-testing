import { expect, test } from 'vitest';

import { add } from './math';

test('should summarize all number values in an array', () => {
  // Arrange
  const numbers = [1, 2, 3];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((acc, curr) => acc + curr, 0);

  expect(result).toBe(expectedResult);
});

test('should yield NaN if at least one invalid number is provided', () => {
  // Arrange
  const inputs = ['invalid', 1];

  // Act
  const result = add(inputs);

  // Assert
  expect(result).toBeNaN();
});

test('should yield a corret sum if an array of numeri string values is provided', () => {
  const numbers = ['1', '2'];

  const result = add(numbers);

  const expectedResult = numbers.reduce((acc, curr) => +acc + +curr, 0);

  expect(result).toBe(expectedResult);
});

test('should yeild 0 if an empty array is provided', () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

test('should throw an error if no values is passed into the function', () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});

test('should throw an error if provided with multiple arguments instead of an array', () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
