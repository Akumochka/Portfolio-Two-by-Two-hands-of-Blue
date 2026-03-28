const brailleMap = {
  '100000': 'a', '110000': 'b', '100100': 'c', '100110': 'd', '100010': 'e',
  '110100': 'f', '110110': 'g', '110010': 'h', '010100': 'i', '010110': 'j',
  '101000': 'k', '111000': 'l', '101100': 'm', '101110': 'n', '101010': 'o',
  '111100': 'p', '111110': 'q', '111010': 'r', '011100': 's', '011110': 't',
  '101001': 'u', '111001': 'v', '010111': 'w', '101011': 'x', '101111': 'y',
  '101101': 'z',
  '000000': ' ',
  '000001': 'CAP',
  '001111': 'NUM'
};

const numberMap = {
  '100000': '1', '110000': '2', '100100': '3', '100110': '4', '100010': '5',
  '110100': '6', '110110': '7', '110010': '8', '010100': '9', '010110': '0'
};

function decodeBase64(base64String) {
  return Buffer.from(base64String, 'base64').toString('utf-8');
}

function decodeBraille(brailleString) {
    const chunks = brailleString.match(/.{6}/g);
  let result = '';
  let isCapital = false;
  let isNumber = false;

    for (const chunk of chunks) {
 if (chunk === '000001') {
      isCapital = true;
      continue;
    }
        if (chunk === '001111') {
      isNumber = true;
      continue;
    }
    
    let char;
    if (isNumber) {
      char = numberMap[chunk];
    } else {
      char = brailleMap[chunk];
    }
    
    if (char === ' ') {
      isNumber = false;
      isCapital = false;
    }
    
    if (isCapital && char && char !== ' ') {
      char = char.toUpperCase();
      isCapital = false;
    }
    
    result += char;
  }
  
  return result;
}

function decodeROT(text) {
  return text.replace(/[a-z]/gi, char => {
    const isUpper = char === char.toUpperCase();
    const base = isUpper ? 65 : 97;

    return String.fromCharCode(
      ((char.charCodeAt(0) - base + 13) % 26) + base
    );
  });
}


module.exports = {
  decodeBraille,
  decodeBase64,
  decodeROT
};