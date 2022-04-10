import React from 'react';

import styled from 'styled-components';

import CipherLetter from './CipherLetter';

const KeySquare = (props) => {
  const { keysquare } = props;
  return (
    <Container>
      {keysquare.map((row) => {
        return (
          <Row>
            {row.map((letter) => (
              <CipherLetter letter={letter} grey></CipherLetter>
            ))}
          </Row>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export default KeySquare;
