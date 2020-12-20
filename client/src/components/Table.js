import React, {useEffect, useState} from 'react';
import {PlayingCard} from "./Card";
import io from 'socket.io-client';
import {Container, Grid, List, ListItem, ListItemText, Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// import TextField from "@material-ui/core/TextField";
const socket = io();

const Table = () => {

    const [currentCard, setCurrentCard] = useState({});
    const [isTurn, setIsTurn] = useState(false);
    const [isDrink, setIsDrink] = useState(false);
    const [isSelecting, setIsSelecting] = useState(false);
    const [turn, setTurn] = useState(0);
    const [showCard, setShowCard] = useState(0);
    const [playerArr, setPlayerArr] = useState([]);
    const [sock, setSock] = useState('');
    const playerNickname = localStorage.getItem('nickname') || 'kojin';

    let playersArray = [{
        name: "Allie",
        turnNum: 0
    },
        {
            name: "Jordan",
            turnNum: 1
        },
        {
            name: "Andrew",
            turnNum: 0
        },
        {
            name: "Kojin",
            turnNum: 0
        }];

    useEffect(() => {
        // socket welcome: adds player to array
        socket.emit('clientToServerWelcome', playerNickname);
        // updates players on client
        socket.on('serverToClientUpdateInfo', ([players, socketId]) => {
            console.log(players, socketId);
            setPlayerArr(players);
            setSock(socketId);
        });

        // connection to see whose turn it is
        socket.on('not_your_turn', ([_turn, card]) => {
            console.log('other player drew:', card);
            setCurrentCard(card);
            setIsDrink(true);
            setIsTurn(false);

        })

        // connection to wait for turn
        socket.on('your_turn', (msg) => {
            setIsDrink(false);
            // Client side log displaying card
            setIsTurn(true);
            console.log("my turn: ", msg);
            setCurrentCard(msg);
            //     wait,

            //    return rule to server
        })

        // logic for switch case rules

        const ruleSetter = (card) => {
            console.log(card.visVal, card.suit);
            socket.emit('ruleToServer', card.visVal);
        }


        return function () {
            console.log('Im leaving');
            socket.removeListener('serverToClientMessageSent');
            socket.removeListener('your_turn');
            socket.removeListener('helloWorld');
        }
    }, []);

    const renderClickableList = () => {
        console.log();
    }

    const renderSnack = () => {
        return (<div>
            <Snackbar open={isDrink} autoHideDuration={3000}>
                <Alert severity="success">
                    Drink!
                </Alert>
            </Snackbar>
        </div>)
    }

    const renderSwitch = (card) => {
        console.log(card.visVal);
        switch(card.visVal) {
            case 1:
                // ruleSetter(card);

               renderSnack();
            case 2:
                // setIsSelecting(true);
                renderSnack();
            case 3:
                renderSnack();
            case 4:
                renderSnack();
            case 5:
                renderSnack();
            case 6:
                renderSnack();
            case 7:
                renderSnack();
            case 8:
                // setIsSelecting(true);
                renderSnack();
            case 9:
                renderSnack();
            case 10:
                renderSnack();
            case 11:
                renderSnack();
            case 12:
                renderSnack();
            case 13:
                renderSnack();
        }
    }


    return (
        <div>
            <Container maxWidth="xl">
                <Grid>
                    <Grid item xs={3}>
                        <List component="nav" aria-label="contacts">
                            {playerArr?.map(player => {
                                if (player.socketId === sock) {
                                    return (
                                        <ListItem
                                            style={{backgroundColor: "rgba(187, 72, 72, 0.49)"}}>
                                            <ListItemText primary={player.nickname}/>
                                        </ListItem>
                                    )
                                } else {
                                    return (
                                        <ListItem
                                            style={{backgroundColor: 'white'}}>
                                            <ListItemText primary={player.nickname}/>
                                            {
                                                isSelecting && isTurn ? <button>Send Drink</button> : <button disabled>Send Drink</button>
                                            }
                                        </ListItem>
                                        )
                                }
                            }
                            )
                            }

                        </List>
                        <div>
                            {isTurn ? null : renderSwitch(currentCard)}
                        </div>
                    </Grid>

                    <button
                        onClick={() => {
                            socket.emit('resetTimer');
                        }}
                    >Send Message
                    </button>

                    {isTurn ?
                        <PlayingCard suit={currentCard.suit} num={currentCard.visVal} image={currentCard.image}/>
                        : null}

                </Grid>
            </Container>
        </div>
    );
}

export default Table;
