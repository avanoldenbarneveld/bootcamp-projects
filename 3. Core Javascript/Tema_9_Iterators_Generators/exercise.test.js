const { capitalize_last_name, ValueError } = require('./exercise.js');

describe('capitalize_last_name Function Tests', () => {

    test('Correctly capitalizes first and last name', () => {
        expect(capitalize_last_name("marisa tomei")).toBe("Marisa TOMEI");
        expect(capitalize_last_name("john doe")).toBe("John DOE");
        expect(capitalize_last_name("alice wonderland")).toBe("Alice WONDERLAND");
    });

    test('Handles single letters in names correctly', () => {
        expect(capitalize_last_name("m t")).toBe("M T");
        expect(capitalize_last_name("a b")).toBe("A B");
    });

    test('Throws TypeError if input is not a string', () => {
        expect(() => capitalize_last_name(123)).toThrow(TypeError);
        expect(() => capitalize_last_name({})).toThrow(TypeError);
        expect(() => capitalize_last_name([])).toThrow(TypeError);
        expect(() => capitalize_last_name(null)).toThrow(TypeError);
        expect(() => capitalize_last_name(undefined)).toThrow(TypeError);
    });

    test('Throws ValueError if input does not contain exactly two words (too few)', () => {
        expect(() => capitalize_last_name("marisa")).toThrow(ValueError);
        expect(() => capitalize_last_name("tomei")).toThrow(ValueError);
        expect(() => capitalize_last_name("")).toThrow(ValueError);
    });

    test('Throws ValueError if input contains more than two words', () => {
        expect(() => capitalize_last_name("marisa tomei extra")).toThrow(ValueError);
        expect(() => capitalize_last_name("john doe junior")).toThrow(ValueError);
    });

    test('Handles names with unexpected whitespace correctly', () => {
        expect(capitalize_last_name(" marisa tomei ")).toBe("Marisa TOMEI");
        expect(() => capitalize_last_name(" marisa  tomei ")).toThrow(ValueError);
    });

});
