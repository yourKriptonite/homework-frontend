'use strict';

QUnit.module('Тестируем функцию euclid', function () {
	QUnit.test('На входе всего одно число', function (assert) {
		assert.strictEqual(globalThis.euclid(1), 1, 'globalThis.euclid(1) === 1');
		assert.strictEqual(globalThis.euclid(2), 2, 'globalThis.euclid(2) === 2');
		assert.strictEqual(globalThis.euclid(7), 7, 'globalThis.euclid(7) === 7');
		assert.strictEqual(globalThis.euclid(6006), 6006, 'globalThis.euclid(6006) === 6006');
	});

	QUnit.test('Функция должна правильно находить НОД двух натуральных чисел', function (assert) {
		assert.strictEqual(globalThis.euclid(100, 10), 10, 'globalThis.euclid(100, 10) === 10');
		assert.strictEqual(globalThis.euclid(5, 25), 5, 'globalThis.euclid(5, 25) === 5');
		assert.strictEqual(globalThis.euclid(200, 300), 100, 'globalThis.euclid(200, 300) === 100');
		assert.strictEqual(globalThis.euclid(4, 5), 1, 'globalThis.euclid(4, 5) === 1');
	});

	QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
		assert.strictEqual(globalThis.euclid(1, 1, 1), 1, 'globalThis.euclid(1, 1, 1) === 1');
		assert.strictEqual(globalThis.euclid(2, 2, 2), 2, 'globalThis.euclid(2, 2, 2) === 2');
		assert.strictEqual(globalThis.euclid(13, 13, 26), 13, 'globalThis.euclid(13, 13, 26) === 13');
		assert.strictEqual(globalThis.euclid(3, 7, 1), 1, 'globalThis.euclid(3, 7, 1) === 1');
		assert.strictEqual(globalThis.euclid(7, 7, 13), 1, 'globalThis.euclid(7, 7, 13) === 1');
		assert.strictEqual(globalThis.euclid(2, 14, 16), 2, 'globalThis.euclid(2, 14, 16) === 2');
		assert.strictEqual(globalThis.euclid(7, 14, 21), 7, 'globalThis.euclid(7, 14, 21) === 7');
		assert.strictEqual(globalThis.euclid(6006, 3738735, 51051), 3003, 'globalThis.euclid(6006, 3738735, 51051) === 3003');
	});

	QUnit.test('Функция должна правильно работать с любым количеством аргументов', function (assert) {
		assert.strictEqual(globalThis.euclid(1, 1, 1, 1, 1, 1, 1), 1);

		const n = 17;
		assert.strictEqual(globalThis.euclid(3 * n, 2 * n, 4 * n, 7 * n, n, 21 * n), n);

		const temp = [ 80325, 55275, 8746650, 3000000, 45672375, 225, 54675 ];
		assert.strictEqual(globalThis.euclid(...[ ...temp, ...temp, ...temp, ...temp, ...temp ]), globalThis.euclid(...temp));
	});

	QUnit.test('Функции должна корректно завершать работу при получении строк', function (assert) {
		assert.strictEqual(globalThis.euclid("1", "9", "8", "4"), undefined, 'globalThis.euclid("1", "9", "8", "4") === undefined');
		assert.strictEqual(globalThis.euclid("1.2", "9", "8.4", "4"), undefined, 'globalThis.euclid("1.2", "9", "8.4", "4") === undefined');
		assert.strictEqual(globalThis.euclid("hello", "ECMAScript"), undefined, 'globalThis.euclid("hello", "ECMAScript") === undefined');
	});

	QUnit.test('Функции должна корректно завершать работу при получении чисел с плавующей точкой', function (assert) {
		assert.strictEqual(globalThis.euclid(2.3, 6.7, 0), undefined, 'globalThis.euclid(2.3, 6.7, 0) === undefined');
		assert.strictEqual(globalThis.euclid(45, 1.5, 3), undefined, 'globalThis.euclid(45, 1.5, 3) === undefined');
		assert.strictEqual(globalThis.euclid(8.6, 45), undefined, 'globalThis.euclid(8.6, 45) === undefined');
	});

	QUnit.test('Функции должна корректно завершать работу при получении отрицательных чисел', function (assert) {
		assert.strictEqual(globalThis.euclid(-12, -4), undefined, 'globalThis.euclid(-12, -4) === undefined');
		assert.strictEqual(globalThis.euclid(-2.3, 6.7, 0), undefined, 'globalThis.euclid(-2.3, 6.7, 0) === undefined');
		assert.strictEqual(globalThis.euclid(-50e100, -4), undefined, 'globalThis.euclid(-50e100, -4) === undefined');
	});
	

	QUnit.test('Функции должна корректно завершать работу при некорретных аргументах', function (assert) {
		assert.strictEqual(globalThis.euclid(3, NaN, 9), undefined, 'globalThis.euclid(3, NaN, 9) === undefined');
		assert.strictEqual(globalThis.euclid(), undefined, 'globalThis.euclid() === undefined');
		assert.strictEqual(globalThis.euclid(null, undefined, NaN), undefined, 'globalThis.euclid(null, undefined, NaN) === undefined');
		assert.strictEqual(globalThis.euclid({}, []), undefined, 'globalThis.euclid({}, []) === undefined');
		assert.strictEqual(globalThis.euclid({}, [[]], Infinity), undefined, 'globalThis.euclid({}, [[]], Infinity) === undefined');
	});
});
