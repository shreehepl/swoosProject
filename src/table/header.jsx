import React, { useState } from 'react';
import { AppBar, Avatar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { CustomIconButton } from '../Components/Forms/headerstyles';


export default function HeaderAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // sessionStorage.removeItem('accessToken');
    sessionStorage.clear();
    console.log('Logging out...');
    handleMenuClose();
    window.location.reload();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#e0ebed' }}>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: '750',
            background: 'linear-gradient(183.5deg, #DF7FF7 -6.25%, #511FBB 94.45%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }} gutterBottom>
            SWOOS
          </Typography>
          <CustomIconButton color="inherit" aria-label="account of current user" onClick={handleAvatarClick}
          sx={{
            marginLeft: '1350px',
            // display: 'flex',
            // justifyContent: 'flex-end', // Align the content to the left end
            // alignItems: 'center',
          }}>
            <Avatar alt="Avatar" />
          </CustomIconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            getContentAnchorEl={null}
            PaperProps={{
              style: {
                  marginTop: '38px', // Adjust the value as needed
              },
          }}
          >
            <MenuItem onClick={handleLogout}>LogOut</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

