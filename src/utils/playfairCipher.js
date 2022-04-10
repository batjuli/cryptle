export const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// given a keyword, generates a 2d array representing the 5x5 keysquare grid
export const getKeySquare = (keyword) => {
  let alphabetLetters = alphabet.filter((c) => c !== 'J');
  // split keyword and remove duplicates and non-alphabeticals
  let letters = keyword.toUpperCase().split('');
  letters = letters.filter((c) => /[a-zA-Z]/.test(c));
  letters = [...new Set(letters)];
  // create grid
  let res = [];
  for (let i = 0; i < 5; i++) {
    let row = [];
    for (let j = 0; j < 5; j++) {
      // if using keyword
      let letter = '';
      if (letters.length > 0) {
        letter = letters.shift();
        alphabetLetters = alphabetLetters.filter((c) => c !== letter);
      } else {
        letter = alphabetLetters.shift();
      }
      row.push(letter);
    }
    res.push(row);
  }
  return res;
};

// finds the position of letters in the keysquare
const find = (keysquare, a, b) => {
  // convert j's to i's
  if (a === 'J') {
    a = 'I';
  }
  if (b === 'J') {
    b = 'I';
  }
  // locate
  let resA = [null, null];
  let resB = [null, null];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (keysquare[i][j] === a) {
        resA = [i, j];
      }
      if (keysquare[i][j] === b) {
        resB = [i, j];
      }
    }
  }
  return [resA, resB];
};

// given a keysquare and message, encrypts using the playfair cipher
export const playfairEncrypt = (keysquare, message) => {
  let res = [];
  let plaintext = message.toUpperCase().split('');
  // remove non alphabetical characters from plaintext
  plaintext = plaintext.filter((c) => /[a-zA-Z]/.test(c));
  // identify double letters and replace second with 'x'
  for (let i = 1; i < plaintext.length; i++) {
    if (plaintext[i] === plaintext[i - 1]) {
      plaintext[i] = 'X';
    }
  }
  // if odd number, append with x
  if (plaintext.length % 2 !== 0) {
    plaintext.push('X');
  }
  // now, examine pairs of letters!
  for (let i = 0; i < plaintext.length; i += 2) {
    // different row and column
    const positions = find(keysquare, plaintext[i], plaintext[i + 1]);
    const aRow = positions[0][0];
    const aCol = positions[0][1];
    const bRow = positions[1][0];
    const bCol = positions[1][1];
    if (aRow === bRow) {
      // same row
      res.push(keysquare[aRow][(aCol + 1) % 5]);
      res.push(keysquare[bRow][(bCol + 1) % 5]);
    } else if (aCol === bCol) {
      // same column
      res.push(keysquare[(aRow + 1) % 5][aCol]);
      res.push(keysquare[(bRow + 1) % 5][bCol]);
    } else {
      // different row and column
      res.push(keysquare[aRow][bCol]);
      res.push(keysquare[bRow][aCol]);
    }
  }
  return res.join('');
};
