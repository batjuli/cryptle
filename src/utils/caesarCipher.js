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

// takes an integer number (positive or negative) and returns a caesar cipher mapping
export const getCaesarMapping = (shift) => {
  let res = {};
  alphabet.map((letter) => {
    let ix = (alphabet.indexOf(letter) + shift) % 26;
    if (ix < 0) {
      ix = 26 + ix;
    }
    res[letter] = alphabet[ix];
    // add lower case mapping too
    res[letter.toLowerCase()] = alphabet[ix].toLowerCase();
  });
  return res;
};
