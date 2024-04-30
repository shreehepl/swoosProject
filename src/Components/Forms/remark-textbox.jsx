import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Remarktextbox() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        '& > :not(style):hover': { borderColor: 'transparent' }, // Apply styles on hover
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        helperText=""
        sx={{ '&:hover': { borderColor: 'transparent' } }} // Override border color on hover
      />
    </Box>
  );
}
