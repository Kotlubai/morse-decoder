const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
 let arr = [];
  // make matrix from string
  for (let i = 0; i < expr.length; i += 10) {
    let a = expr.slice(i, i + 10);
    arr.push(a);
  }

  for (let i = 0; i < arr.length; i++) {
    let arr2 = [];
    for (let j = 0; j < arr[i].length; j += 2) {
      let b = arr[i].slice(j, j + 2);
      arr2.push(b);
    }
    arr[i] = arr2;
  }

  // get '10' and '11' and '**'
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].filter(function (el) {
      return el === '10' || el === '11' || el === '**';
    });
  }

  //replace '10' and '11' and '**' with '.', '-' and '\s'
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '10') {
        arr[i][j] = '.';
      }
      if (arr[i][j] === '11') {
        arr[i][j] = '-';
      }
      if (arr[i][j] === '**') {
        arr[i] = [' '];
      }
    }
  }

  //concat nested arrays elements
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].join('');
  }

  // search array elements in MORSE_TABLE
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      result += arr[i];
    }
    for (let prop in MORSE_TABLE) {
      if (prop === arr[i]) {
        result += MORSE_TABLE[prop];
      }
    }
  }
  return result;
}

module.exports = {
    decode
}
