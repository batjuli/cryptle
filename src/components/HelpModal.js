import React from 'react';

import styled from 'styled-components';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const HelpModal = (props) => {
  const { open, handleModalClose } = props;

  return (
    <div>
      <Modal open={open} onClose={handleModalClose}>
        <Container>
          <h2>What is cryptle</h2>
          <p>
            Cryptle is a resource for learning more about cryptography and
            ciphers, with a cryptogram game for practice.
          </p>
          <h2>How do I play?</h2>
          <p>
            A cryptogram is a type of game where you attempt to decrypt an
            encrypted message through substituting letters.{' '}
          </p>
          <p>
            Here are some tips to help you get started on solving:
            <ul>
              <li>Common words with single letters: A or I</li>
              <li>
                Common words with two letters: IN, IT, IS, AN, AT, AS, SO, OF,
                OR
              </li>
              <li>Common words with three letters: THE, AND, WAS, HAS</li>
              <li>Two of the same letter together: EE, OO</li>
              <li>Following apostrophes: S, T, D, LL, VE, RE</li>
            </ul>
          </p>
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

export default HelpModal;