'use strict';

/**
 * Calculates gcd of two numbers
 * @param  {number} a - First number must be an positive integer.
 * @param {number} b - Second number must be an positive integer.
 * @return {number} Return value
 */
const gcd = (a, b) => {
    if (b === 0) {
        return a;
    }

    return gcd(b, a % b)
}


/**
 * Calculates gcd of any number of args
 * @param {...number} numbers - The function accepts a variable 
 *      number of positive integer parameters.
 * @return {number} Return value
 * @return {undefined} Return value if contracts not obrserved
 */
const euclid = (...numbers) => {
    if (!numbers.length) {
        return;
    }

    for (let i of numbers) {
        if (!Number.isInteger(i) || i < 0) {
            return;
        }
    }

    const result = numbers.reduce((previous, next) => gcd(previous, next));

    return result;
}
