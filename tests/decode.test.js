const { decodeBraille } = require('../src/decode');

describe('Braille Decoding', () => {
  test('decodes letter a', () => {
    expect(decodeBraille('100000')).toBe('a');
  });

  test('decodes letter b', () => {
    expect(decodeBraille('110000')).toBe('b');
  });
  
  test('decodes letter c', () => {
    expect(decodeBraille('100100')).toBe('c');
  });

    test('decodes word "abc"', () => {
    expect(decodeBraille('100000110000100100')).toBe('abc');
  });

test('decodes word "hello"', () => {
  expect(decodeBraille('110010100010111000111000101010')).toBe('hello');
    });
});