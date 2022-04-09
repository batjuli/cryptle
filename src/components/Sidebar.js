import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    // allow user to navigate side bar using tab and shift+tab
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{
        width: 250,
        backgroundcolor: '#121213',
      }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <ListItem button component={Link} to={'/'}>
        <ListItemText primary={'cryptle'} />
      </ListItem>
      <Box sx={{ fontWeight: 'bold', m: 1 }}>
        Learn more about cryptography and ciphers
      </Box>
      <List>
        <ListItem button component={Link} to={'/caesar'}>
          <ListItemText primary={'Caesar Cipher'} />
        </ListItem>
        <ListItem button component={Link} to={'/playfair'}>
          <ListItemText primary={'Playfair Cipher'} />
        </ListItem>
        <ListItem button component={Link} to={'/modern'}>
          <ListItemText primary={'Modern Ciphers'} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        color='primary'
        aria-label='sidebar button'
        component='span'
        sx={{ color: 'white' }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon fontSize='large' />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default Sidebar;
