// helper function for creating a randomised cryptogram given a message
export const randomCryptogram = (message) => {
  const letters = [
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
  // shuffle the letters
  let shuffledLetters = shuffleArray(letters.slice(0));
  // create a dictionary map
  let map = {};
  letters.forEach((letter, i) => (map[letter] = shuffledLetters[i]));
  // encrypt the message using the map
  let messageArray = message.toUpperCase().split('');
  let encryptedMessage = [];
  for (let i = 0; i < messageArray.length; i++) {
    if (map[messageArray[i]] === undefined) {
      encryptedMessage.push(messageArray[i]);
    } else {
      encryptedMessage.push(map[messageArray[i]]);
    }
  }
  return encryptedMessage.join('');
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
