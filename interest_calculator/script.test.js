// script.test.js
import { calculateInterest } from './src/script.js';
import { describe, test, expect } from '@jest/globals';

describe('calculateInterest function', () => {
    test('Correctly calculates simple interest', () => {
        expect(calculateInterest(1000, 5, 2)).toBe(100);
    });

    test('Throws error for non positive principal', () => {
        expect(() => calculateInterest(-1000, 5, 2)).toThrow('Values must be positive numbers');
    });

    test('Throws error for non positive rate', () => {
        expect(() => calculateInterest(1000, -5, 2)).toThrow('Values must be positive numbers');
    });

    test('Throws error for non positive year', () => {
        expect(() => calculateInterest(1000, 5, -2)).toThrow('Values must be positive numbers');
    });
});
