import React from "react";
import {Typography, Button, IconButton, AppBar, Toolbar, Box} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.scss'

export const Header = () => {
    return (

        <Box>
            <AppBar position="fixed" color={'warning'}>
                <Toolbar variant={"dense"}>
                    <IconButton
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={() => console.log('hello')}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Talky
                    </Typography>
                    <Button color="inherit">Войти</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}