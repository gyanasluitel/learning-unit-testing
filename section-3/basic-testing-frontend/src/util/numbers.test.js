import { expect, test } from 'vitest';

import { transformToNumber } from './numbers';

test('should transform a string valued number to a number of type number', () => {
  const input = '2';

  const result = transformToNumber(input);

  expect(result).toBeTypeOf('number');
});

test('should transform a string valued number to a number of type number', () => {
  const input = '2';

  const result = transformToNumber(input);

  expect(result).toBe(+input);
});

test('should yield NaN for non-transformable values', () => {
  const input = 'two';

  const input2 = {};

  const resultFn = transformToNumber(input);
  const resultFn2 = transformToNumber(input2);

  expect(resultFn).toBeNaN();
  expect(resultFn2).toBeNaN();
});
