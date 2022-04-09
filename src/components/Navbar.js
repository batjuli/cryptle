import React from 'react';

import styled from 'styled-components';

import { Toolbar, AppBar, IconButton } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';

const Navbar = () => {
  return (
    <AppBar
      position='sticky'
      sx={{ background: 'transparent', boxShadow: 'none', width: '100vw' }}
    >
      <Toolbar>
        <Sidebar />
        <Title>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
            cryptle
          </Link>
        </Title>
        <IconButton
          color='primary'
          aria-label='help button'
          sx={{ color: 'white' }}
          component={Link}
          to='/help'
        >
          <HelpOutlineIcon fontSize='large' />
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
