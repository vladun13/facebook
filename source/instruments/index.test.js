//Core
import { sum, delay, getUniqueID, getFullApiUrl } from './';


describe('instruments:', () => {
	test('sum function should be a function', () => {
		expect(sum).toBeInstanceOf(Function);
	});

	test('sum function should throw, when called with non-number type as second argument', () => {
		expect(() => sum(2, 'Hi')).toThrow();
	});

	test('sum function should throw, when called with non-number type as second argument', () => {
		expect(() => sum('Hi', 2)).toThrow();
	});
	
	test('sum function should return an addition of two arguments passed', () => {
		expect(sum(2, 3)).toBe(5);
		expect(sum(1, 8)).toMatchSnapshot();
	});

	test('delay function should return a resolved promise', async () => {
			await expect(delay()).resolves.toBeUndefined();
	});

	test('getUniqueID function should be a function', () => {
			expect(getUniqueID).toBeInstanceOf(Function);
	});


	test('getUniqueID function should throw, when called with non-number type as an argument', () => {
		expect(() => getUniqueID('Hi')).toThrow();
	});

	test('getUniqueID function should produce a string of a desired given length', () => {
		expect(typeof getUniqueID()).toBe('string');
		expect(getUniqueID()).toHaveLength(15);
		expect(getUniqueID(5)).toHaveLength(5);
		expect(getUniqueID(13)).toHaveLength(13);
	});

	test('getFullApiUrl function should be a function', () => {
		expect(getFullApiUrl).toBeInstanceOf(Function);
	});

	test('getFullApiUrl function should throw, when called with non-number type as an argument', () => {
		expect(() => getFullApiUrl('Hi', 2)).toThrow();
		expect(() => getFullApiUrl(2, 'Hi')).toThrow();
		expect(() => getFullApiUrl(2, 2)).toThrow();
	});

	test('getFullApiUrl function should return FullApiUrl', () => {
		expect(getFullApiUrl('ApiUrl', 'GROUP_ID')).toBe('ApiUrl/GROUP_ID');
		expect(getFullApiUrl('ApiUrl', 'GROUP_ID')).toMatchSnapshot();
	})

})
