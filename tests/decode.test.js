const { decodeBraille, decodeBase64 } = require('../src/decode');

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

test('decodes words with space', () => {
  expect(decodeBraille('110010010100000000011110110010100010111010100010')).toBe('hi there');
    });

test('decodes capital letter', () => {
  expect(decodeBraille('000001110010')).toBe('H');
    });

test('decodes numbers', () => {
  expect(decodeBraille('001111100000')).toBe('1');
    });

test('decodes numbers in a row', () => {
  expect(decodeBraille('001111100000110000100100')).toBe('123');
    });
});

describe('Base64 Decoding', () => {
  test('decodes base64 to text', () => {
    expect(decodeBase64('aGVsbG8=')).toBe('hello');
  });
  
  test('decodes empty base64', () => {
    expect(decodeBase64('')).toBe('');
  });

});