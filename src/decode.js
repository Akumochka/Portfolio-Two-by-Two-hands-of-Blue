const brailleMap = {
  '100000': 'a',
  '110000': 'b',
  '100100': 'c'
};

function decodeBraille(brailleString) {
  return brailleMap[brailleString] || '';
}

module.exports = {
  decodeBraille
};