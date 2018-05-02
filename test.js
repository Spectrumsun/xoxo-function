const mocha = require('mocha');
const assert = require('assert');
const chai  = require( 'chai');
const xoxo = require('./xoxo');

const { expect, should } = chai;


describe('XOXO Function', () => {

    it('should exist', () => {
        expect(xoxo).to.not.be.undefined;
    });

    it('should return a true when no x or o is present ', () => {
        const test = xoxo('rama', 'x', 'o')
        expect(test).to.eql(true);
    });

    it('should return a false if the numbers of o is greater than x', () => {
        const test = xoxo('xxooo', 'x', 'o')
        expect(test).to.eql(false);
    });

    it('should return a false if the numbers of x is greater than o', () => {
        const test = xoxo('xxxxo', 'x', 'o')
        expect(test).to.eql(false);
    });

    it('should return a true if the numbers of x the same has the number of o', () => {
        const test = xoxo('xoxo', 'x', 'o')
        expect(test).to.eql(true);
    });

    it('should return a true if the x is in capital letters but still the same amount of o ', () => {
        const test = xoxo('xoXo', 'x', 'o')
        expect(test).to.eql(true);
    });

    it('should return a true if the o is in capital letters but still the same amount of x ', () => {
        const test = xoxo('OOOxxx', 'x', 'o')
        expect(test).to.eql(true);
    });

    it('should return a true if the they are no x or x', () => {
        const test = xoxo('OOOxxx', 'x', 'o')
        expect(test).to.eql(true);
    });

});