import { Grid, Container } from '@material-ui/core';
import React from 'react';
import './style.css';

const Loader = () => {
    return (
        <Container>
            <Grid
                container
                alignItems={"center"}
                justify={"center"}
                style={{ height: window.innerHeight - 50 }}
            >
            </Grid>
            <Grid container
                alignItems={"center"}
                justify={"center"}
            >
                <div className="lds-hourglass"></div>
            </Grid>
        </Container>
    );
};


export default Loader;