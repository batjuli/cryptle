import React from 'react';

import styled from 'styled-components';

import Keyboard from '../components/Keyboard';
import MessageContainer from '../components/MessageContainer';

const Main = () => {
  const [selectedLetter, setSelectedLetter] = React.useState(null);

  // set every letter with the selected letter's encrypted letter value = to key pressed

  const [message, setMessage] = React.useState(
    'an engineer has a duty to the engineering profession and the public they serve'
      .toUpperCase()
      .split('')
  );

  const [encryptedMessage, setEncryptedMessage] = React.useState(
    'xk bkdfkbbo exp x arqv ql qeb bkdfkbbofkd molcbppflk xka qeb mryifz qebv pbosb'.toUpperCase()
  );

  // game state = array of arrays, child arrays = [encryptedLetter, usersInput]
  const [gameState, setGameState] = React.useState(
    encryptedMessage.split('').map((x) => {
      return [x, null];
    })
  );

  // whenever encrypted message changes (new game), update gameState
  React.useEffect(() => {
    setGameState(
      encryptedMessage.split('').map((x) => {
        return [x, null];
      })
    );
  }, [encryptedMessage]);

  // update selected letter with key pressed
  const handleKeyPress = (letter) => {
    // for each selected letter in the game state, update the user solution with letter
    setGameState(
      gameState.map(([x, y]) => {
        if (x === selectedLetter) {
          // chosen letter, update it
          return [x, letter];
        } else if (
          y != null &&
          letter != null &&
          y == letter &&
          x != selectedLetter
        ) {
          // reset other boxes that used the same letter TODO
          return [x, null];
        } else {
          // anything else
          return [x, y];
        }
      })
    );
  };

  // keydown listening
  const handleKeyDown = (event) => {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      handleKeyPress(event.key);
    }
  };
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedLetter]);

  return (
    <Container>
      <MessageContainer
        gameState={gameState}
        handleLetterSelect={setSelectedLetter}
        selectedLetter={selectedLetter}
      />
      <Keyboard handleKeyPress={handleKeyPress} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  align-items: center;
  margin-top: 50px;
`;

export default Main;
