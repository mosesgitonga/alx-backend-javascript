#!/usr/bin/node
/**
 * simple calculator
 */

function calculateNumber(a, b) {
    a = Math.round(a)
    b = Math.round(b)

    Sum = a + b;
    return Sum;
}

module.exports = calculateNumber