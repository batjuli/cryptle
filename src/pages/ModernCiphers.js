import React from 'react';

import styled from 'styled-components';

const ModernCiphers = () => {
  return (
    <Container>
      <h2>Modern Ciphers</h2>
      <p>Modern ciphers are...</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
`;

export default ModernCiphers;
