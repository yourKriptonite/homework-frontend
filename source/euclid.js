'use strict';


function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    const residue = a % b;

    return gcd(b, residue)
}


function euclid(...numbers) {

    if (!numbers.length) {
        return;
    }

    for (let i of numbers) {
        if (!Number.isInteger(i) || i < 0) {
            return;
        }
    }

    const result = numbers.reduce((previous, next) => {
        return gcd(previous, next)}
    );

    return result;
}