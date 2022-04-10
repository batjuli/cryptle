import React from 'react';

import styled from 'styled-components';

import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import CipherLetter from '../components/CipherLetter';

import { alphabet } from '../utils/caesarCipher';

const CaesarCipher = () => {
  const [messageValue, setMessageValue] = React.useState('');
  const handleMessageChange = (event) => {
    setMessageValue(event.target.value);
  };

  const [cipherValue, setCipherValue] = React.useState('');
  const handleCipherChange = (event) => {
    setCipherValue(event.target.value);
  };

  const [shift, setShift] = React.useState(0);
  const handleShiftChange = (event) => {
    const val = event.target.value;
    // check if value is an integer
    if (isNaN(val)) {
      return;
    }
    setShift(val);
  };

  return (
    <Container>
      <h2>Caesar Cipher</h2>
      <p>
        The Caesar Cipher is a substitution cipher and one of the simplest
        encryption techniques. The technique is named after the Roman Emperor
        Julius Caesar, who is reported to have used this cipher in his own
        personal messages.
      </p>
      <p>
        The cipher works by having each letter of the original message
        substituted with a letter that is a fixed number of letters down the
        alphabet. For example, with a positive shift of 3, A would be replaced
        by D, while with a negative shift of 3, A would be replaced by X.
      </p>
      <ShiftContainer>
        Shift
        <NumberContainer>
          <IconButton
            color='primary'
            aria-label='help button'
            sx={{ color: 'white' }}
          >
            <KeyboardArrowUpIcon
              fontSize='large'
              onClick={() => setShift(shift + 1)}
            />
          </IconButton>
          <ShiftInput value={shift} onChange={handleShiftChange} />
          <IconButton
            color='primary'
            aria-label='help button'
            sx={{ color: 'white' }}
          >
            <KeyboardArrowDownIcon
              fontSize='large'
              onClick={() => setShift(shift - 1)}
            />
          </IconButton>
        </NumberContainer>
        <LettersContainer>
          {alphabet.map((letter) => {
            return <CipherLetter letter={letter} highlighted />;
          })}
        </LettersContainer>
        <LettersContainer>
          {alphabet.map((letter) => {
            return <CipherLetter letter={letter} />;
          })}
        </LettersContainer>
      </ShiftContainer>
      <div>Your message:</div>
      <TextInput rows='4' value={messageValue} onChange={handleMessageChange} />
      <div>Encrypted message:</div>
      <TextInput rows='4' value={cipherValue} onChange={handleCipherChange} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
`;

const ShiftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ShiftInput = styled.input`
  height: 40px;
  width: 100px;
  text-align: center;
  border: 3px solid #616169;
  border-radius: 5px;
  &:focus {
    outline-width: 0;
    border-color: #cba05f;
    transition: border-color 0.3s ease-in-out;
  }
  font-size: 1.2em;
`;

const LettersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TextInput = styled.textarea`
  resize: none;
  font-size: 1.2em;
  border: 3px solid #616169;
  border-radius: 5px;
  padding: 10px;
  &:focus {
    outline-width: 0;
    border-color: #cba05f;
    transition: border-color 0.3s ease-in-out;
  }
`;

export default CaesarCipher;
