import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';

export default function BasicTextFields() {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 20}}>
        <div style={{display: "flex", marginLeft: 30}}>
            <img src="../images/secondary-logo.png" alt="logo" width="auto" height={28} style={{marginRight: 10}}/>
            <img src="../images/logo.png" alt="logo" width="auto" height={28} />
        </div>  
        <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '60ch', display: "flex"}}}
        noValidate
        autoComplete="off"
        >
        <TextField 
            id="outlined-basic"
            name="Search events"
            placeholder="Search events"
            size="medium"
            variant="outlined"
            slotProps={{
                input: {
                    endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                    ),
                    startAdornment: (
                    <InputAdornment position="start">
                        <MenuIcon />
                    </InputAdornment>
                    )
                }
              }}
        />
        </Box>
        <Stack direction="row" spacing={2} style={{ display: "flex", marginRight: 40}}>
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