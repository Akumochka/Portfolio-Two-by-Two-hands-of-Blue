const brailleMap = {
  '100000': 'a', '110000': 'b', '100100': 'c', '100110': 'd', '100010': 'e',
  '110100': 'f', '110110': 'g', '110010': 'h', '010100': 'i', '010110': 'j',
  '101000': 'k', '111000': 'l', '101100': 'm', '101110': 'n', '101010': 'o',
  '111100': 'p', '111110': 'q', '111010': 'r', '011100': 's', '011110': 't',
  '101001': 'u', '111001': 'v', '010111': 'w', '101011': 'x', '101111': 'y',
  '101101': 'z',
  '000000': ' ',
  '000001': 'CAP'
};

function decodeBraille(brailleString) {
    const chunks = brailleString.match(/.{6}/g);
  let result = '';
  let isCapital = false;

    for (const chunk of chunks) {
 if (chunk === '000001') {
      isCapital = true;
      continue;
    }
    
    let char = brailleMap[chunk] || '';
    
    if (isCapital && char !== ' ') {
      char = char.toUpperCase();
      isCapital = false;
    }
    
    result += char;
  }
  
  return result;
}

module.exports = {
  decodeBraille
};