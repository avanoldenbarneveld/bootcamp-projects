const generateMultiples = require('./exercise');

describe('generateMultiples', () => {
    test('should generate multiples of 2 for size 4', () => {
        expect(generateMultiples(4, 2)).toEqual([2, 4, 6, 8]);
    });

    test('should return an empty array for size 0', () => {
        expect(generateMultiples(0, 2)).toEqual([]);
    });

    test('should generate multiples of 3 for size 5', () => {
        expect(generateMultiples(5, 3)).toEqual([3, 6, 9, 12, 15]);
    });

    test('should return an array of zeros for multiplier 0', () => {
        expect(generateMultiples(5, 0)).toEqual([0, 0, 0, 0, 0]);
    });

    test('should handle negative multipliers', () => {
        expect(generateMultiples(3, -2)).toEqual([-2, -4, -6]);
    });
});