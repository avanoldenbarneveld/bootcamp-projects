const getValuesInRange = require('./script');

describe('getValuesInRange', () => {
  test('should throw TypeError if the first argument is not a Set', () => {
    expect(() => getValuesInRange([], 1, 10)).toThrow(TypeError);
    expect(() => getValuesInRange({}, 1, 10)).toThrow(TypeError);
    expect(() => getValuesInRange('not a set', 1, 10)).toThrow(TypeError);
  });

  test('should throw TypeError if bounds are not numbers', () => {
    expect(() => getValuesInRange(new Set([1, 2, 3]), '1', 10)).toThrow(TypeError);
    expect(() => getValuesInRange(new Set([1, 2, 3]), 1, '10')).toThrow(TypeError);
    expect(() => getValuesInRange(new Set([1, 2, 3]), '1', '10')).toThrow(TypeError);
  });

  test('should return an empty set if input set is empty', () => {
    expect(getValuesInRange(new Set(), 1, 10)).toEqual(new Set());
  });

  test('should return values within the specified range', () => {
    const set = new Set([5, 10, 15, 20, 25]);
    expect(getValuesInRange(set, 10, 20)).toEqual(new Set([10, 15, 20]));
  });

  test('should return an empty set if no values are in the range', () => {
    const set = new Set([1, 2, 3]);
    expect(getValuesInRange(set, 10, 20)).toEqual(new Set());
  });

  test('should ignore non-numeric values', () => {
    const set = new Set([10, '20', true, 15, 30]);
    expect(getValuesInRange(set, 10, 30)).toEqual(new Set([10, 15, 30]));
  });

  test('should include boundary values', () => {
    const set = new Set([5, 10, 15, 20]);
    expect(getValuesInRange(set, 10, 20)).toEqual(new Set([10, 15, 20]));
  });
});