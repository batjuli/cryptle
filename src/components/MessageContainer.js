import React from 'react';

import styled from 'styled-components';

import LetterBox from '../components/LetterBox';

const MessageContainer = (props) => {
  const { gameState } = props;

  return (
    <Container>
      {gameState.map((letter) =>
        letter[0] === ' ' ? (
          <Space />
        ) : (
          <LetterBox value={letter[1]} encryptedLetter={letter[0]} />
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
  max-height: 60vh;
  overflow-y: auto;
`;

const Space = styled.div`
  width: 45px;
`;
