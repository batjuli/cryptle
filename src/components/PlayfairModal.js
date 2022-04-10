import React from 'react';

import styled from 'styled-components';

import Modal from '@mui/material/Modal';

const PlayfairModal = (props) => {
  const { open, handleModalClose } = props;

  return (
    <div>
      <Modal open={open} onClose={handleModalClose}>
        <Container>
          <h2>How the Playfair Cipher works</h2>
          <p>
            The cipher works by a key square, which is a 5x5 grid that omits the
            letter j, which is combined with i. A word is used as a key, which
            starts the key square, followed by the rest of the letters in the
            alphabet (not including j).
          </p>
          <p>
            Then, once you have your key square, the algorithm to encode your
            message is as follows:
          </p>
          <ol>
            <li>
              Remove any characters from the message not present in the key
              square.
            </li>
            <li>
              Identify double letters in the plain text and replace the second
              with the letter 'x' (e.g. 'creepy' -&gt; 'crexpy').
            </li>
            <li>
              If the plaintext has an odd number of characters, append with the
              letter 'x' to make it even.
            </li>
            <li>
              Break the plaintext into pairs of letters (e.g. 'crexpy' -&gt; 'cr
              ex py').
            </li>
            <li>
              Now, we encode each pair of letters by finding them in our key
              square:
              <ul>
                <li>
                  <b>If the letters are in different rows and columns:</b>
                  <ul>
                    <li>
                      Replace the pair with the letters on the same row
                      respectively but at the other pair of corners of the
                      rectangle defined by the original pair. Here, it helps to
                      visualise the 4 corners of the square created by these
                      letters.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>If the letters are on the same row:</b>
                  <ul>
                    <li>
                      Replace them with the letters to their immediate right
                      respectively (wrapping around to the left if on the right
                      side).
                    </li>
                  </ul>
                </li>
                <li>
                  <b>If the letters appear on the same column:</b>
                  <ul>
                    <li>
                      Replace them with the letters immediately below
                      respectively (wrapping around to the top if on the
                      bottom).
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>
        </Container>
      </Modal>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #121213;
  color: white;
  padding: 20px;
  border-radius: 20px;
`;

export default PlayfairModal;
