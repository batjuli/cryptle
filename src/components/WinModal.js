import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#121213',
  color: 'white',
  border: '2px solid #538D4E',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
};

const WinModal = (props) => {
  const { open, handleModalClose, message, handleNewGame } = props;

  return (
    <div>
      <Modal open={open} onClose={handleModalClose}>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Awesome job!
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            "{message}"
          </Typography>
          <Button
            variant='outlined'
            sx={{ width: '120px', marginTop: '20px' }}
            onClick={() => handleNewGame()}
          >
            New Game
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default WinModal;
