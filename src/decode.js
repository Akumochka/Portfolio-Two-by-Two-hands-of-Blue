function decodeBraille(brailleString) {
  if (brailleString === '100000') {
    return 'a';
  }
  return '';
}

module.exports = {
  decodeBraille
};