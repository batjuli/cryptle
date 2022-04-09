import React from 'react';

import styled from 'styled-components';

const LetterBox = (props) => {
  let { value, encryptedLetter } = props;
  if (value != null) {
    value = value.toUpperCase();
  }
  encryptedLetter = encryptedLetter.toUpperCase();
  return (
    <Container>
      <Box>{value}</Box>
      <EncryptedLetter>{encryptedLetter}</EncryptedLetter>
    </Container>
  );
};

export default LetterBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 44px;
  height: 100px;
  justify-content: center;
  margin: 2px;
`;

const Box = styled.div`
  display: flex;
  height: 50px;
  width: 40px;
  border: 2px solid #616169;
  border-radius: 5px;
  font-size: 2em;
  justify-content: center;
  line-height: 50px;
`;

const EncryptedLetter = styled.text`
  text-align: center;
  font-size: 1.7em;
  color: #616169;
`;
