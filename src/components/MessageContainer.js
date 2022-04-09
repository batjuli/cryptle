import React from 'react';

import styled from 'styled-components';

import LetterBox from '../components/LetterBox';

const MessageContainer = (props) => {
  const { gameState, handleLetterSelect, selectedLetter } = props;

  return (
    <Container>
      {gameState.map((letter) =>
        letter[0] === ' ' ? (
          <Space />
        ) : (
          <LetterBox
            value={letter[1]}
            encryptedLetter={letter[0]}
            handleLetterSelect={handleLetterSelect}
            selectedLetter={selectedLetter}
          />
        )
      )}
    </Container>
  );
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
