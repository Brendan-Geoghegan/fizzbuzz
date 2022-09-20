const {fizzbuzz} = require('../index');

describe('tests for fizzbuzz function', () => {
    test('the function fizzbuzz is defined', () => {
        expect(fizzbuzz).toBeDefined();
    });
    test('it returns fizzbuzz if multiple of 3 and 5', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
    });
    test('it returns fizz if multiple of 3', () => {
        expect(fizzbuzz(3)).toBe('fizz');
    });
    test('it returns buzz if multiple of 5', () => {
        expect(fizzbuzz(5)).toBe('buzz');
    });
    test('it returns the number if not multiple of 3 or 5', () => {
        expect(fizzbuzz(7)).toBe(7);
    });
    test('it returns error when not a number', () => {
        expect(fizzbuzz("helllo")).toBe("error");
    });
    test('it returns error if number is less than 1', () => {
        expect(fizzbuzz(-1)).toBe("error");
        expect(fizzbuzz(0)).toBe("error");
        expect(fizzbuzz(1)).toBe(1);
    });
    test('it returns error if number is more than 21', () => {
        expect(fizzbuzz(22)).toBe("error");
        expect(fizzbuzz(21)).toBe("fizz");
    });
})
