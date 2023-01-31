const reverseString = require('./reverseString');

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('String reverces with Uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});