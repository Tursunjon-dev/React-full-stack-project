import { Avatar, Button, Container, Grid, TextField, } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import './style.css';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Loader from './Loader';
import firebase from '@firebase/app-compat';

function Chat() {// eslint-disable-next-line
    const { auth, firestore } = useContext(Context); // eslint-disable-next-line
    const [user] = useAuthState(auth); // eslint-disable-next-line
    const [value, setValue] = useState("") // eslint-disable-next-line
    const [messages, loading] = useCollectionData(
        firestore.collection("messages").orderBy("createdAt")
    );

    const sendMessage = async () => {
        firestore.collection("messages").add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setValue("");
    };
    if (loading) {
        return <Loader />
    }
    return (
        <Container>
            <Grid
                className="main"
                container
                style={{ height: window.innerHeight - 50, marginTop: 5 }}
                justify={"center"}
            >
                <div
                    style={{
                        width: '80%',
                        height: '60vh',
                        border: "1px solid gray",
                        overflowX: "auto",
                        background: "linear-gradient(45deg, #22030a, #e14c22)",
                    }}
                >
                    {messages.map(message =>
                        <div style={{
                            margin: 10,
                            backgroundColor:
                                user.uid === message.uid
                                    ? "rgba(255,255,255,0.7)"
                                    : "rgba(228, 83,167, 0.549)",
                            marginLeft: user.uid === message.uid ? "auto" : "10px",
                            width: "40%",
                            padding: 5,
                            borderRadius: "10px",
                        }}>
                            <Grid
                                container
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-beetween',
                                    alignItems: 'center'
                                }}
                            >
                                <Avatar src={message.photoURL} />
                                <div>
                                    {message.displayName}
                                </div>
                            </Grid>
                            <div style={{marginTop: "5px"}}>{message.text}</div>
                        </div>
                    )}
                </div>
                <Grid
                    container
                    direction={'column'}
                    alignItems={'flex-end'}
                    style={{ width: "80%" }}
                >
                    <TextField
                        className="mainn"
                        placeholder={'Message'}
                        fullWidth variant={"outlined"}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <Button
                        variant={"outlined"}
                        style={{ background: "green", marginTop: 2 }}
                        onClick={sendMessage}
                    >Send Message</Button>
                </Grid>
            </Grid>
        </Container>
    );
};


export default Chat;