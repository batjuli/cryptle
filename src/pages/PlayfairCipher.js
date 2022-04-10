import React from 'react';

import styled from 'styled-components';

import { Button } from '@mui/material';

import PlayfairInfo from '../components/PlayfairInfo';
import KeySquare from '../components/KeySquare';
import PlayfairModal from '../components/PlayfairModal';

import { getKeySquare, playfairEncrypt } from '../utils/playfairCipher';

const PlayfairCipher = () => {
  const [keywordValue, setKeywordValue] = React.useState('');
  const handleKeywordChange = (event) => {
    setKeywordValue(event.target.value);
  };

  const [messageValue, setMessageValue] = React.useState('');
  const handleMessageChange = (event) => {
    setMessageValue(event.target.value);
  };

  const [cipherValue, setCipherValue] = React.useState('');
  const handleCipherChange = (event) => {
    setCipherValue(event.target.value);
  };

  // state for the algorithm modal
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const keysquare = getKeySquare(keywordValue);

  // whenever keyword, keysquare, or message changes, update cipher value
  React.useEffect(() => {
    const encryptedMessage = playfairEncrypt(
      keysquare,
      messageValue
    ).toLowerCase();
    setCipherValue(encryptedMessage);
  }, [messageValue, keywordValue, keysquare]);

  return (
    <Container>
      <PlayfairInfo />
      <Button
        variant='outlined'
        sx={{ width: '250px' }}
        onClick={handleModalOpen}
      >
        How the cipher works
      </Button>
      <PlayfairModal open={modalOpen} handleModalClose={handleModalClose} />
      <KeySquareContainer>
        <div>Keyword:</div>
        <KeywordInput
          rows='1'
          value={keywordValue}
          onChange={handleKeywordChange}
        />
        <KeySquare keysquare={keysquare} />
      </KeySquareContainer>
      <div>Your message:</div>
      <TextInput rows='4' value={messageValue} onChange={handleMessageChange} />
      <div>Encrypted message:</div>
      <TextInput
        rows='4'
        value={cipherValue}
        onChange={handleCipherChange}
        readonly
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
`;

const KeywordInput = styled.input`
  resize: none;
  font-size: 1.2em;
  border: 3px solid #616169;
  border-radius: 5px;
  padding: 10px;
  width: 300px;
  &:focus {
    outline-width: 0;
    border-color: #cba05f;
    transition: border-color 0.3s ease-in-out;
  }
`;

const KeySquareContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
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

export default PlayfairCipher;
