const fizzbuzz = require('./fizzbuzz');

test('helloWorld returns "Hello, World!"', () => {
	expect(fizzbuzz.helloWorld()).toBe('Hello, World!');
});
