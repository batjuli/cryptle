import React from 'react';

import styled from 'styled-components';

const LetterBox = (props) => {
  let { value, encryptedLetter, handleLetterSelect, selectedLetter } = props;
  if (value != null) {
    value = value.toUpperCase();
  }
  encryptedLetter = encryptedLetter.toUpperCase();
  // if non-alphabetical, make it un-selectable
  if (!/[a-zA-Z]/.test(encryptedLetter)) {
    return (
      <NonselectableContainer>
        <NonselectableBox>{value}</NonselectableBox>
        <EncryptedLetter>{encryptedLetter}</EncryptedLetter>
      </NonselectableContainer>
    );
  }
  if (selectedLetter === encryptedLetter) {
    return (
      <Container onClick={() => handleLetterSelect(encryptedLetter)}>
        <SelectedBox>{value}</SelectedBox>
        <SelectedEncryptedLetter>{encryptedLetter}</SelectedEncryptedLetter>
      </Container>
    );
  } else {
    return (
      <Container onClick={() => handleLetterSelect(encryptedLetter)}>
        <Box>{value}</Box>
        <EncryptedLetter>{encryptedLetter}</EncryptedLetter>
      </Container>
    );
  }
};

export default LetterBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 44px;
  height: 100px;
  justify-content: center;
  margin: 2px;
  &:hover {
    cursor: pointer;
  }
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

const SelectedBox = styled.div`
  display: flex;
  height: 50px;
  width: 40px;
  border: 2px solid #cba05f;
  border-radius: 5px;
  font-size: 2em;
  justify-content: center;
  line-height: 50px;
`;

const SelectedEncryptedLetter = styled.text`
  text-align: center;
  font-size: 1.7em;
  color: #cba05f;
`;

const NonselectableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 44px;
  height: 100px;
  justify-content: center;
  margin: 2px;
`;

const NonselectableBox = styled.div`
  display: flex;
  height: 50px;
  width: 40px;
  font-size: 2em;
  justify-content: center;
  line-height: 50px;
`;
