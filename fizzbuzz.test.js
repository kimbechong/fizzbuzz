const { helloWorld } = require('./fizzbuzz');

test('helloWorld returns "Hello, World!"', () => {
	expect(helloWorld()).toBe('Hello, World!');
});
