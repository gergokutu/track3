import { sum } from '../main';

test('basic', () => {
	expect(sum()).toBe(0);
});

test('basic again', () => {
	expect(sum(1, 2)).toBe(3);
});

test('basic 3', () => {
	expect(sum(1, 2, 3)).toBe(6);
});
