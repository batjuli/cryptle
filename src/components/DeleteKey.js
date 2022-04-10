import React from 'react';

import styled from 'styled-components';
import BackspaceIcon from '@mui/icons-material/Backspace';

const DeleteKey = (props) => {
  const { handleKeyPress } = props;
  return (
    <KeyContainer onClick={() => handleKeyPress(null)}>
      <BackspaceIcon />
    </KeyContainer>
  );
};

export default DeleteKey;

const KeyContainer = styled.div`
  display: flex;
  height: 60px;
  width: 70px;
  border-radius: 5px;
  background-color: #616169;
  color: #e5e5e5;
  font-size: 1.5em;
  justify-content: center;
  align-items: center;
  margin: 2px;
  &:hover {
    cursor: pointer;
  }
`;
