import React from 'react';

import styled from 'styled-components';

import DeleteKey from './DeleteKey';
import NextKey from './NextKey';

import Key from './Key';

const Keyboard = () => {
  const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const row3 = ['NEXT', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL'];

  return (
    <KeyboardContainer>
      {[row1, row2].map((row) => (
        <KeyboardRow>
          {row.map((letter) => (
            <Key letter={letter} />
          ))}
        </KeyboardRow>
      ))}
      <BottomKeyboardRow>
        {row3.map((letter) => {
          if (letter === 'DEL') {
            return <DeleteKey />;
          } else if (letter === 'NEXT') {
            return <NextKey />;
          } else {
            return <Key letter={letter} />;
          }
        })}
      </BottomKeyboardRow>
    </KeyboardContainer>
  );
};

const KeyboardRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const BottomKeyboardRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

const KeyboardContainer = styled.div`
  position: absolute;
  bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
`;

export default Keyboard;
