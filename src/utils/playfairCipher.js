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
  let alphabetLetters = alphabet.filter((c) => c != 'J');
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
        alphabetLetters = alphabetLetters.filter((c) => c != letter);
      } else {
        letter = alphabetLetters.shift();
      }
      row.push(letter);
    }
    res.push(row);
  }
  return res;
};
