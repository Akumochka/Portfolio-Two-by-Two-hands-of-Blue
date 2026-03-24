const brailleMap = {
  '100000': 'a',
  '110000': 'b',
  '100100': 'c'
};

function decodeBraille(brailleString) {
    const chunks = brailleString.match(/.{6}/g);
  let result = '';

    for (const chunk of chunks) {
    result += brailleMap[chunk] || '';
  }
  
  return result;
}

module.exports = {
  decodeBraille
};