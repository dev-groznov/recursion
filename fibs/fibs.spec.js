const fibs = require('./fibs');

describe('fibs', () => {
  describe('base cases', () => {
    test('returns an empty array for n = 0', () => {
      expect(fibs(0)).toEqual([]);
    });

    test('returns [0] for n = 1', () => {
      expect(fibs(1)).toEqual([0]);
    });

    test('returns [0, 1] for n = 2', () => {
      expect(fibs(2)).toEqual([0, 1]);
    });

    test('returns [0, 1, 1] for n = 3', () => {
      expect(fibs(3)).toEqual([0, 1, 1]);
    });
  });

  describe('sequence correctness', () => {
    test('returns the first 5 numbers', () => {
      expect(fibs(5)).toEqual([0, 1, 1, 2, 3]);
    });

    test('returns the first 10 numbers', () => {
      expect(fibs(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    test('each number equals the sum of the two previous ones', () => {
      const result = fibs(15);
      for (let i = 2; i < result.length; i++) {
        expect(result[i]).toBe(result[i - 1] + result[i - 2]);
      }
    });
  });
});