'use strict';

/**
 * Calculates gcd of two numbers
 * @example
 * // returns 5
 * globalThis.gcd(5, 10);
 * @example
 * // returns 7
 * globalThis.gcd(21, 14);
 * 
 * @param  {number} a - First number must be an integer.
 * @param {number} b - Second number must be an integer.
 * @return {number} Return value
 */
globalThis.gcd = (a, b) => {
    if (b === 0) {
        return a;
    }

    const residue = a % b;

    return globalThis.gcd(b, residue)
}


/**
 * Calculates gcd of any number of args
 * @example
 * // returns 5
 * globalThis.euclid(5, 10, 15);
 * @example
 * // returns 4
 * globalThis.euclid(4, 16, 8, 12);
 * @example
 * // returns undefined
 * globalThis.euclid("String", 16, 8, "Hello");
 * 
 * @param {...number} numbers - The function accepts a variable 
 *      number of numeric parameters.
 * @return {number} Return value
 * @return {undefined} Return value if contracts not obrserved
 */
globalThis.euclid = (...numbers) => {
    if (!numbers.length) {
        return;
    }

    for (let i of numbers) {
        if (!Number.isInteger(i) || i < 0) {
            return;
        }
    }

    const result = numbers.reduce((previous, next) =>  globalThis.gcd(previous, next));

    return result;
}
