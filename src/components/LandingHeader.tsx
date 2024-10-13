import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <div>
        <img src="../images/logo.jpg" alt="logo" width={181} height={28} />
        <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>
    </div>
  );
}