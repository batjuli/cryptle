import React from 'react';

import Navbar from '../components/Navbar';
import LetterBox from '../components/LetterBox';
import Keyboard from '../components/Keyboard';

const Main = () => {
  return (
    <div>
      <Navbar />
      <LetterBox value='A' encryptedLetter='S' />
      <Keyboard />
    </div>
  );
};

export default Main;
