import React from 'react';

import styled from 'styled-components';

import Keyboard from '../components/Keyboard';
import MessageContainer from '../components/MessageContainer';

const Main = () => {
  const [selectedLetter, setSelectedLetter] = React.useState(null);

  // set every letter with the selected letter's encrypted letter value = to key pressed

  const [message, setMessage] = React.useState(
    'an engineer has a duty to the engineering profession and the public they serve'
  );

  const [encryptedMessage, setEncryptedMessage] = React.useState(
    'xk bkdfkbbo exp x arqv ql qeb bkdfkbbofkd molcbppflk xka qeb mryifz qebv pbosb'
  );

  // userSolution = array of characters with length = to num of letters
  const [userSolution, setUserSolution] = React.useState(
    Array(encryptedMessage.replace(/\s+/g, '').length).fill('')
  );

  // TODO: BETTER METHOD PROBABLY:
  // pass a tuple array of userSolution and encryptedMessage?
  // but then how does it know if there's a space...
  // get rid of word margins, include the space character in this tuple array, when rendering in message container, use a ternary to render just an empty div

  // check if user has solved
  React.useEffect(() => {
    if (userSolution.toString() === encryptedMessage.replace(/\s+/g, '')) {
      console.log('solved!');
    }
  }, [userSolution]);

  return (
    <Container>
      <MessageContainer
        message={encryptedMessage}
        userSolution={userSolution}
      />
      <Keyboard />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  align-items: center;
  margin-top: 50px;
`;

export default Main;
