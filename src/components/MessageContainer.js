import React from 'react';

import styled from 'styled-components';

import LetterBox from '../components/LetterBox';

const MessageContainer = (props) => {
  const { gameState, handleLetterSelect, selectedLetter } = props;

  // figure out words, put in divs
  const encryptedValues = gameState.map((letter) => {
    return letter[0];
  });
  const userValues = gameState.map((letter) => {
    return letter[1];
  });
  const encryptedString = encryptedValues.join('');
  const encryptedWords = encryptedString.split(' ');

  let words = [];
  // for each word, match userValues over
  let j = 0;
  for (let i = 0; i < encryptedWords.length; i++) {
    let encryptedLetters = encryptedWords[i].split('');
    let userLetters = userValues.slice(j, j + encryptedWords[i].length);
    let word = [];
    for (let x = 0; x < encryptedLetters.length; x++) {
      word.push([encryptedLetters[x], userLetters[x]]);
    }
    j += encryptedWords[i].length;
    // after each word, move over because of space
    j += 1;
    words.push(word);
  }

  return (
    <Container>
      {words.map((word) => (
        <WordContainer>
          {word.map((letter) => (
            <LetterBox
              value={letter[1]}
              encryptedLetter={letter[0]}
              handleLetterSelect={handleLetterSelect}
              selectedLetter={selectedLetter}
            />
          ))}
        </WordContainer>
      ))}
    </Container>
  );

  // return (
  //   <Container>
  //     {gameState.map((letter) =>
  //       letter[0] === ' ' ? (
  //         <Space />
  //       ) : (
  //         <LetterBox
  //           value={letter[1]}
  //           encryptedLetter={letter[0]}
  //           handleLetterSelect={handleLetterSelect}
  //           selectedLetter={selectedLetter}
  //         />
  //       )
  //     )}
  //   </Container>
  // );
};

export default MessageContainer;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
  justify-content: center;
  max-height: 55vh;
  overflow-y: auto;
`;

const Space = styled.div`
  width: 45px;
`;

const WordContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  margin-bottom: 0;
  margin-top: 0;
`;
