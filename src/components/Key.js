import React from 'react';

import styled from 'styled-components';

const Key = (props) => {
  const { letter, handleKeyPress } = props;
  return (
    <KeyContainer onClick={() => handleKeyPress(letter)}>{letter}</KeyContainer>
  );
};

export default Key;

const KeyContainer = styled.div`
  display: flex;
  height: 60px;
  width: 45px;
  border-radius: 5px;
  background-color: #616169;
  color: #e5e5e5;
  font-size: 1.5em;
  justify-content: center;
  line-height: 60px;
  margin: 2px;
`;
