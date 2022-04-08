import React from 'react';

import styled from 'styled-components';

import Keyboard from '../components/Keyboard';
import MessageContainer from '../components/MessageContainer';

const Main = () => {
  return (
    <Container>
      <MessageContainer message='an engineer has a duty to the engineering profession and the public it serves' />
      <Keyboard />
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
