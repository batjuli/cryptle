import React from 'react';

import styled from 'styled-components';

import EncryptedWord from './EncryptedWord';

const MessageContainer = (props) => {
  const { message } = props;
  // unpack message words
  const words = message.split(' ');
  return (
    <Container>
      {words.map((word) => (
        <EncryptedWord word={word} />
      ))}
    </Container>
  );
};

export default MessageContainer;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
  justify-content: center;
  max-height: 50vh;
  overflow-y: auto;
`;
