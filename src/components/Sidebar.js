import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import SchoolIcon from '@mui/icons-material/School';

import { Toolbar, AppBar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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
      <List>
        {[
          'Learn more about cryptography',
          'Classical Ciphers',
          'Modern Ciphers',
          'Decoder',
        ].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
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
