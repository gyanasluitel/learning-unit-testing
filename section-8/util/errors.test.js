import { describe, test, expect } from 'vitest';

import { HttpError } from './errors';

describe('class HttpError', () => {
  test('should contain the provided status code, message and data', () => {
    const testStatus = 1;
    const testMessage = 'Test';
    const testData = { key: 'test' };

    const testError = new HttpError(testStatus, testMessage, testData);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBe(testData);
  });
});
