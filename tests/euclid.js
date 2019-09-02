'use strict';

QUnit.module('Тестируем функцию euclid', function () {
	QUnit.test('На входе всего одно число', function (assert) {
		assert.strictEqual(euclid(1), 1, 'euclid(1) === 1');
		assert.strictEqual(euclid(2), 2, 'euclid(2) === 2');
		assert.strictEqual(euclid(7), 7, 'euclid(7) === 7');
		assert.strictEqual(euclid(6006), 6006, 'euclid(6006) === 6006');
	});

	QUnit.test('Функция должна правильно находить НОД двух натуральных чисел', function (assert) {
		assert.strictEqual(euclid(100, 10), 10, 'euclid(100, 10) === 10');
		assert.strictEqual(euclid(5, 25), 5, 'euclid(5, 25) === 5');
		assert.strictEqual(euclid(200, 300), 100, 'euclid(200, 300) === 100');
		assert.strictEqual(euclid(4, 5), 1, 'euclid(4, 5) === 1');
	});

	QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
		assert.strictEqual(euclid(1, 1, 1), 1, 'euclid(1, 1, 1) === 1');
		assert.strictEqual(euclid(2, 2, 2), 2, 'euclid(2, 2, 2) === 2');
		assert.strictEqual(euclid(13, 13, 26), 13, 'euclid(13, 13, 26) === 13');
		assert.strictEqual(euclid(3, 7, 1), 1, 'euclid(3, 7, 1) === 1');
		assert.strictEqual(euclid(7, 7, 13), 1, 'euclid(7, 7, 13) === 1');
		assert.strictEqual(euclid(2, 14, 16), 2, 'euclid(2, 14, 16) === 2');
		assert.strictEqual(euclid(7, 14, 21), 7, 'euclid(7, 14, 21) === 7');
		assert.strictEqual(euclid(6006, 3738735, 51051), 3003, 'euclid(6006, 3738735, 51051) === 3003');
	});

	QUnit.test('Функция должна правильно работать с любым количеством аргументов', function (assert) {
		assert.strictEqual(euclid(1, 1, 1, 1, 1, 1, 1), 1);

		const n = 17;
		assert.strictEqual(euclid(3 * n, 2 * n, 4 * n, 7 * n, n, 21 * n), n);

		const temp = [ 80325, 55275, 8746650, 3000000, 45672375, 225, 54675 ];
		assert.strictEqual(euclid(...[ ...temp, ...temp, ...temp, ...temp, ...temp ]), euclid(...temp));
	});

	QUnit.test('Функции должна корректно завершать работу при получении строк', function (assert) {
		assert.strictEqual(euclid("1", "9", "8", "4"), undefined, 'euclid("1", "9", "8", "4") === undefined');
		assert.strictEqual(euclid("1.2", "9", "8.4", "4"), undefined, 'euclid("1.2", "9", "8.4", "4") === undefined');
		assert.strictEqual(euclid("hello", "ECMAScript"), undefined, 'euclid("hello", "ECMAScript") === undefined');
	});

	QUnit.test('Функции должна корректно завершать работу при получении чисел с плавующей точкой', function (assert) {
		assert.strictEqual(euclid(2.3, 6.7, 0), undefined, 'euclid(2.3, 6.7, 0) === undefined');
		assert.strictEqual(euclid(45, 1.5, 3), undefined, 'euclid(45, 1.5, 3) === undefined');
		assert.strictEqual(euclid(8.6, 45), undefined, 'euclid(8.6, 45) === undefined');
	});

	QUnit.test('Функции должна корректно завершать работу при получении отрицательных чисел', function (assert) {
		assert.strictEqual(euclid(-12, -4), undefined, 'euclid(-12, -4) === undefined');
		assert.strictEqual(euclid(-2.3, 6.7, 0), undefined, 'euclid(-2.3, 6.7, 0) === undefined');
		assert.strictEqual(euclid(-50e100, -4), undefined, 'euclid(-50e100, -4) === undefined');
	});
	

	QUnit.test('Функции должна корректно завершать работу при некорретных аргументах', function (assert) {
		assert.strictEqual(euclid(3, NaN, 9), undefined, 'euclid(3, NaN, 9) === undefined');
		assert.strictEqual(euclid(), undefined, 'euclid() === undefined');
		assert.strictEqual(euclid(null, undefined, NaN), undefined, 'euclid(null, undefined, NaN) === undefined');
		assert.strictEqual(euclid({}, []), undefined, 'euclid({}, []) === undefined');
		assert.strictEqual(euclid({}, [[]], Infinity), undefined, 'euclid({}, [[]], Infinity) === undefined');
	});
});
