import React, { useContext } from 'react';
import { Context } from '../index';
import './style.css';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Container, Grid, Box, Button } from '@material-ui/core';

function Login() {
    const { auth } = useContext(Context);// eslint-disable-next-line
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await auth.signInWithPopup(provider);
        console.log(user)
    }
    return <Container>
        <Grid
            container
            alignItems={"center"}
            justify={"center"}
            style={{ height: window.innerHeight - 50 }}
        >
            <Grid
                style={{ width: 400, background: "lightgray" }}
                container
                alignItems={"center"}
                justify={"center"}
            >
                <Box p={5}>
                    <Button
                        variant={"outlined"}
                        onClick={login}
                    >
                        LOG In With GOOGLE
                    </Button>
                </Box>
            </Grid>
        </Grid>
    </Container>
};


export default Login;