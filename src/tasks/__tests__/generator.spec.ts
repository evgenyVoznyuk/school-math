import { describe, it, expect, vi } from 'vitest'

import { getNumber } from '../generators'

describe('numbers generators', () => {
    describe('one digit number generator', () => {
        it('generates one digit number', () => {
            vi.spyOn(global.Math, 'random').mockReturnValue(0.5);
            const number = getNumber('one', 1, 9);
            expect(number).toBe(5);
        })
        it('set min output to 1', () => {
            vi.spyOn(global.Math, 'random').mockReturnValue(0.0001);
            // @ts-ignore
            const number = getNumber('one', 0, 9);
            expect(number).toBe(1);
        })
        it('set max output to 9', () => {
            vi.spyOn(global.Math, 'random').mockReturnValue(0.9999);
            // @ts-ignore
            const number = getNumber('one', 1, 11);
            expect(number).toBe(9);
        })
        it('has output if max === min', () => {
            vi.spyOn(global.Math, 'random').mockReturnValue(0.5);
            const number = getNumber('one', 2, 2);
            expect(number).toBe(2);
        })
        it('throws error if max < min', () => {
            expect(() => getNumber('one', 7, 2)).toThrowError('max < min');
        })
    })
    describe('two digits number generator multiple by ten', () => {
        it('generates two digit number', () => {
            vi.spyOn(global.Math, 'random').mockReturnValue(0.5);
            const number = getNumber('dec', 10, 99);
            expect(number).toBe(50);
        })
        it('set min output to 10', () => {
            vi.spyOn(global.Math, 'random').mockReturnValue(0.0001);
            // @ts-ignore
            const number = getNumber('dec', 0, 99);
            expect(number).toBe(10);
        })
        it('set max output to 90', () => {
            vi.spyOn(global.Math, 'random').mockReturnValue(0.9999);
            // @ts-ignore
            const number = getNumber('dec', 10, 101);
            expect(number).toBe(90);
        })
        it('has output if max === min', () => {
            vi.spyOn(global.Math, 'random').mockReturnValue(0.5);
            const number = getNumber('dec', 20, 20);
            expect(number).toBe(20);
        })
        it('throws error if max < min', () => {
            expect(() => getNumber('dec', 73, 63)).toThrowError('max < min');
        })
        it('throws error if max-min range has no dec value', () => {
            expect(() => getNumber('dec', 52, 59)).toThrowError('no dec in min-max range');
        })
    })
    describe('two digits number generator, but not multiple by ten', () => {
        it('generates two digit number', () => {
            vi.spyOn(global.Math, 'random').mockReturnValue(0.5632);
            const number = getNumber('notDec', 10, 99);
            expect(number).toBe(56);
        })
        it('set min output to 11', () => {
            vi.spyOn(global.Math, 'random').mockReturnValue(0.0001);
            // @ts-ignore
            const number = getNumber('notDec', 0, 99);
            expect(number).toBe(11);
        })
        it('set max output to 99', () => {
            vi.spyOn(global.Math, 'random').mockReturnValue(0.9999);
            // @ts-ignore
            const number = getNumber('notDec', 10, 110);
            expect(number).toBe(99);
        })
        it('has output if max === min', () => {
            vi.spyOn(global.Math, 'random').mockReturnValue(0.2222);
            const number = getNumber('notDec', 22, 22);
            expect(number).toBe(22);
        })
        it('throws error if max < min', () => {
            expect(() => getNumber('notDec', 73, 63)).toThrowError('max < min');
        })
    })
})