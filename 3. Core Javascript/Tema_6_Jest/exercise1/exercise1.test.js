const fizzBuzz = require('./exercise1');

describe('FizzBuzz function', () => {
    test('returns "fizz" for numbers divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('fizz');
        expect(fizzBuzz(9)).toBe('fizz');
    });

    test('returns "buzz" for numbers divisible by 5', () => {
        expect(fizzBuzz(5)).toBe('buzz');
        expect(fizzBuzz(20)).toBe('buzz');
    });

    test('returns "fizzbuzz" for numbers divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('fizzbuzz');
        expect(fizzBuzz(30)).toBe('fizzbuzz');
    });

    test('returns the number as a string if not divisible by 3 or 5', () => {
        expect(fizzBuzz(7)).toBe('7');
        expect(fizzBuzz(11)).toBe('11');
    });

    test('returns "fizzbuzz" for 0', () => {
        expect(fizzBuzz(0)).toBe('fizzbuzz');
    });

    test('returns error message when input is not a number', () => {
        expect(fizzBuzz('string')).toBe('Input must be a number');
        expect(fizzBuzz(null)).toBe('Input must be a number');
        expect(fizzBuzz(undefined)).toBe('Input must be a number');
    });
});