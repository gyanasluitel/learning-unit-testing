import { test, expect, describe } from 'vitest';

import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty()', () => {
  test('should throw an error if empty string is provided', () => {
    const input = '';

    const validationFn = () => {
      validateStringNotEmpty(input);
    };

    expect(validationFn).toThrow();
  });

  test('should throw an error if a long string with all blanks are provided', () => {
    const input = '     ';

    const validationFn = () => {
      validateStringNotEmpty(input);
    };

    expect(validationFn).toThrow();
  });

  test('should throw an error if values other than string is provided', () => {
    const inputNum = 1;
    const inputBool = 1;
    const inputObj = {};

    const validationFnNum = () => {
      validateStringNotEmpty(inputNum);
    };

    const validationFnBool = () => {
      validateStringNotEmpty(inputBool);
    };

    const validationFnObj = () => {
      validateStringNotEmpty(inputObj);
    };

    expect(validationFnNum).toThrow();
    expect(validationFnBool).toThrow();
    expect(validationFnObj).toThrow();
  });
});

describe('validatieNumber()', () => {
  test('should throw an error if values other than number is provided', () => {
    const inputStr = 'number';
    const inputObj = {};

    const validationFnStr = () => {
      validateNumber(inputStr);
    };

    const validationFnObj = () => {
      validateNumber(inputObj);
    };

    expect(validationFnStr).toThrow();
    expect(validationFnObj).toThrow();
  });

  test('should throw an error if a non-numeric value is provided', () => {
    const input = '1';

    const validationFn = () => {
      validateNumber(input);
    };

    expect(validationFn).toThrow();
  });

  test('should throw an error if NaN is provided', () => {
    const input = NaN;

    const validationFn = () => {
      validateNumber(input);
    };

    expect(validationFn).toThrow();
  });

  test('should not throw an error if a number is provided', () => {
    const input = 1;

    const validationFn = () => {
      validateNumber(input);
    };

    expect(validationFn).not.toThrow();
  });
});
