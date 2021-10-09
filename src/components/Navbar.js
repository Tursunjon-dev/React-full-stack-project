import React, { useContext } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../util/Const';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Grid, Button, AppBar, Toolbar, Box, } from '@material-ui/core';
import Chat from './Chat';

const Navbar = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);// eslint-disable-next-line
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();// eslint-disable-next-line
        const { user } = await auth.signInWithPopup(provider);
    }
    return (
        <AppBar position="static">
            <Toolbar className="main" variant="dense">
            <h3>Mr.Dark</h3>
                <Grid
                    container
                    justify={"flex-end"}
                >
                </Grid>
                {user ? (
                    <Button onClick={() => auth.signOut()} outline color="danger">EXIT</Button>
                ) : (
                    <NavLink to={LOGIN_ROUTE}>
                        <Button outline color="danger">LOGIN</Button>
                    </NavLink>
                    
                )}
            </Toolbar>
            {user ? (
                <Chat className="main" />
            ) : (
                <Grid
                style={{ width: 400, background: "lightgray" }}
                container
                alignItems={"center"}
                justify={"center"}// eslint-disable-next-line
                style={{ height: window.innerHeight - 50 }}
            >
                <Box p={5} >
                    <Button
                        variant={"outlined"}
                        onClick={login}
                    >
                        LOG In With GOOGLE
                    </Button>
                </Box>
            </Grid>
            )}
        </AppBar>
    );
};

export default Navbar;