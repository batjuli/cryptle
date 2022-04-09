import React from 'react';

import styled from 'styled-components';

import LetterBox from '../components/LetterBox';

const EncryptedWord = (props) => {
  const { word } = props;
  const letters = word.split('');
  return (
    <Container>
      {letters.map((letter) => (
        <LetterBox value='' encryptedLetter={letter} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px;
  margin-top: 0;
`;

export default EncryptedWord;
