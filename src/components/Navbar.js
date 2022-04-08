import React from 'react';

import styled from 'styled-components';

import { Toolbar, AppBar, IconButton } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuIcon from '@mui/icons-material/Menu';

import Sidebar from './Sidebar';

const Navbar = () => {
  return (
    <AppBar
      position='sticky'
      sx={{ background: 'transparent', boxShadow: 'none', width: '100vw' }}
    >
      <Toolbar>
        <Sidebar />
        <IconButton
          color='primary'
          aria-label='help button'
          component='span'
          sx={{ color: 'white' }}
          onClick={() => console.log('clicked help')}
        >
          <HelpOutlineIcon fontSize='large' />
        </IconButton>
        <Title>cryptle</Title>
        <IconButton
          color='primary'
          aria-label='settings button'
          component='span'
          sx={{ color: 'white' }}
          onClick={() => console.log('clicked settings')}
        >
          <SettingsOutlinedIcon fontSize='large' />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

const NavContainer = styled.div`
  display: flex;
  margin: 0;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2em;
  text-align: center;
  flex: 1;
`;
