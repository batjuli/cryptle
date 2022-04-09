import React from 'react';

import styled from 'styled-components';

const CaesarCipher = () => {
  return (
    <Container>
      <h2>Caesar Cipher</h2>
      <p>The Caesar Cipher is...</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
`;

export default CaesarCipher;
