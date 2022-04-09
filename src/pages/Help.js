import React from 'react';

import styled from 'styled-components';

const Help = () => {
  return (
    <Container>
      <h2>What is cryptle</h2>
      <p>
        Cryptle is a resource for learning more about cryptography and ciphers,
        with a cryptogram game for practice.
      </p>
      <h2>How do I play?</h2>
      <p>
        A cryptogram is a type of game where you attempt to decrypt an encrypted
        message through substituting letters.{' '}
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
`;

export default Help;
