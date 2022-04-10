import React from 'react';

import styled from 'styled-components';

const CipherLetter = (props) => {
  const { letter, highlighted, grey } = props;

  if (highlighted) {
    return <CipherBox>{letter}</CipherBox>;
  }

  if (grey) {
    return <GreyBox>{letter}</GreyBox>;
  }

  return <Box>{letter}</Box>;
};

export default CipherLetter;

const Box = styled.div`
  display: flex;
  width: 35px;
  color: #e5e5e5;
  font-size: 1.2em;
  justify-content: center;
  margin: 2px;
  margin-top: 0px;
`;

const CipherBox = styled.div`
  display: flex;
  height: 35px;
  width: 35px;
  border-radius: 5px;
  background-color: #cba05f;
  color: #e5e5e5;
  font-size: 1.2em;
  justify-content: center;
  line-height: 35px;
  margin: 2px;
  margin-bottom: 0px;
  margin-top: 10px;
`;

const GreyBox = styled.div`
  display: flex;
  height: 35px;
  width: 35px;
  border-radius: 5px;
  background-color: #616169;
  color: #e5e5e5;
  font-size: 1.2em;
  justify-content: center;
  line-height: 35px;
  margin: 2px;
`;
