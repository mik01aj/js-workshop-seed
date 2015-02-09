/*jshint jasmine: true */
/*global jest */
'use strict';

jest.dontMock('../Diamond');

describe('Diamond', function () {

    var Diamond = require('../Diamond');

    describe('1. class definition', function () {
        var any = jasmine.any;
        it('should be able to create a new object', function () {
            new Diamond('ABCD');
        });
        it('should have the getString() method', function () {
            expect(new Diamond('ABCD').getString).toEqual(any(Function));
        });
        it('should have the print() method', function () {
            expect(new Diamond('ABCD').print).toEqual(any(Function));
        });
    });

    describe('2. get() function', function () {
        it('should return empty list for empty string', function () {
            expect(new Diamond('').getString()).toEqual([]);
        });
        it('should return the letter when given just one', function () {
            expect(new Diamond('X').getString()).toEqual(['X']);
        });
        it('should return a square of a correct size', function () {
            var strings = new Diamond('ABCD').getString();
            expect(strings.length).toBe(7);
            strings.forEach(function (row) {
                expect(row.length).toBe(7);
            });
        });
        it('should pad the background with dashes', function () {
            var strings = new Diamond('------').getString();
            strings.forEach(function (row) {
                expect(row).toMatch(/^-+$/);
            });
        });
        it('should return something in the diamond form', function () {
            expect(new Diamond('XX').getString()).toEqual([
                '-X-',
                'X-X',
                '-X-',
            ]);
        });
        it('should work on a full example', function () {
            expect(new Diamond('ABCDE').getString()).toEqual([
                '----A----',
                '---B-B---',
                '--C---C--',
                '-D-----D-',
                'E-------E',
                '-D-----D-',
                '--C---C--',
                '---B-B---',
                '----A----',
            ]);
        });
    });

    xdescribe('3. extensions', function () {
        it('should work on integers', function () {
            expect(new Diamond(123).getString()).toEqual([
                '--1--',
                '-2-2-',
                '3---3',
                '-2-2-',
                '--1--',
            ]);
        });
        it('should work on floats', function () {
            expect(new Diamond(1.3).getString()).toEqual([
                '--1--',
                '-.-.-',
                '3---3',
                '-.-.-',
                '--1--',
            ]);
        });
        it('should accept a different padding character', function () {
            expect(new Diamond('ABC', '#').getString()).toEqual([
                '##1##',
                '#2#2#',
                '3###3',
                '#2#2#',
                '##1##',
            ]);
        });
    });
});
