const { decodeBraille } = require('../src/decode');

describe('Braille Decoding', () => {
  test('decodes letter a', () => {
    expect(decodeBraille('100000')).toBe('a');
  });
});