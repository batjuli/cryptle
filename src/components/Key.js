import React from 'react';

import styled from 'styled-components';

const Key = (props) => {
  const { letter } = props;
  return <KeyContainer>{letter}</KeyContainer>;
};

export default Key;

const KeyContainer = styled.div`
  display: flex;
  height: 40px;
  width: 40px;
  border-radius: 5px;
  background-color: #616169;
  color: #e5e5e5;
  font-size: 1.5em;
  justify-content: center;
  line-height: 40px;
  margin: 2px;
`;
