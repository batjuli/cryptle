import React from 'react';

import styled from 'styled-components';

import PlayfairInfo from '../components/PlayfairInfo';
import KeySquare from '../components/KeySquare';

import { getKeySquare } from '../utils/playfairCipher';

const PlayfairCipher = () => {
  const [keywordValue, setKeywordValue] = React.useState('');
  const handleKeywordChange = (event) => {
    setKeywordValue(event.target.value);
  };

  const keysquare = getKeySquare(keywordValue);

  return (
    <Container>
      <PlayfairInfo />
      <div>Keyword:</div>
      <TextInput rows='1' value={keywordValue} onChange={handleKeywordChange} />
      <KeySquare keysquare={keysquare} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
`;

const TextInput = styled.input`
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

export default PlayfairCipher;
