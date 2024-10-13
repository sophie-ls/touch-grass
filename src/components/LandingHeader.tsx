import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';

export default function BasicTextFields() {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 20}}>
        <div>
            <img src="../images/secondary-logo.png" alt="logo" width="auto" height={36} style={{marginLeft: 30, marginRight: 10}}/>
            <img src="../images/logo.png" alt="logo" width="auto" height={36} />
        </div>  
        <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '60ch'}}}
        noValidate
        autoComplete="off"
        >
        <TextField 
            id="outlined-basic"
            label="Search events"
            variant="outlined"
            sx=""
        />
        </Box>
        <Stack direction="row" spacing={2} style={{marginRight: 30}}>
        <Button variant="contained" href="#" sx={{height: 40, width: 100}}>
            Log In
        </Button>
        <Button variant="contained" href="#" sx={{height: 40, width: 100}}>
            Sign Up
        </Button>
        </Stack>
    </div>
  );
}