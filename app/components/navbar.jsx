import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
export default function Navbar(){
    return (<Box width={'100vw'} height={'7vh'} bgcolor={'#987554'} display='flex' flexDirection='row' alignItems='center' padding={2}>
        <Typography variant='h3' color={'white'}>PurelyYou</Typography>
    </Box>);
}