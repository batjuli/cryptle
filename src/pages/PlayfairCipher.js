import React from 'react';

import styled from 'styled-components';

import PlayfairInfo from '../components/PlayfairInfo';

const PlayfairCipher = () => {
  return (
    <Container>
      <PlayfairInfo />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
`;

export default PlayfairCipher;
