import React, {useEffect, useState} from 'react';
import {PlayingCard} from "./Card";
import io from 'socket.io-client';
import {Container, Grid, List, ListItem, ListItemText, Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import {makeStyles} from '@material-ui/core/styles';

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
    const [rule, setRule] = useState(0);
    const [targetPlayer, setTargetPlayer] = useState('');
    const [playerArr, setPlayerArr] = useState([]);
    const [sock, setSock] = useState('');
    const playerNickname = localStorage.getItem('nickname') || 'kojin';

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
            setIsSelecting(false)
            setIsDrink(false);
            setIsTurn(false);
            setRule(card.visVal);
            uDrink(rule.visVal);
        })

        // connection to wait for turn
        socket.on('your_turn', (msg) => {
            setIsSelecting(false)
            setIsDrink(false);
            // Client side log displaying card
            setIsTurn(true);
            console.log("my turn: ", msg);
            setCurrentCard(msg);
            setRule(msg.visVal);
            iDrink(msg.visVal);
        })

        // logic for switch case rules


        return function () {
            console.log('Im leaving');
            socket.removeListener('serverToClientMessageSent');
            socket.removeListener('your_turn');
            socket.removeListener('helloWorld');
        }
    }, []);

    const uDrink = (rule) => {
        switch (rule) {
            case 1:
                // everyone drink
                setIsDrink(true);
                break;


            case 2:
            // pick someone to drink

            case 3:
                // self drink



            case 4:
            // *hit down key
            case 5:
                // guys


            case 6:
                // chicks

            case 7:
            // *hit up key

            case 8:
                // pick someone to drink


            case 9:
            // *hit left key

            case 10:
                // everyone drinks


            case 11:
            // *hit right key

            case 12:
                // Finish the cup


            case 13:
            // *lowest amount of drinks

        }
        // console.log(card.visVal, card.suit);
        // socket.emit('ruleToServer', card.visVal);
    }

    const iDrink = (rule) => {
        switch (rule) {
            case 1:
                // everyone drink
                setIsDrink(true);
                break;


            case 2:
            // pick someone to drink
                setIsSelecting(true);
                break;
            case 3:
                // self drink
                setIsDrink(true);
                break;

            case 4:
            // *hit down key
                break;
            case 5:
                // guys
                setIsDrink(true);
                break;

            case 6:
                // chicks
                setIsDrink(true);
                break;
            case 7:
            // *hit up key
                break;
            case 8:
                // pick someone to drink
                setIsDrink(true);
                setIsSelecting(true);
                break;

            case 9:
            // *hit left key
                break;

            case 10:
                // everyone drinks
                setIsDrink(true);
                break;

            case 11:
            // *hit right key
                break;

            case 12:
                // Finish the cup
                setIsDrink(true);
                break;

            case 13:
            // *lowest amount of drinks
                break;
        }
        // console.log(card.visVal, card.suit);
        // socket.emit('ruleToServer', card.visVal);
    }

    const renderClickableList = () => {
        console.log();
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsDrink(false);
    };


    const renderSwitch = (card) => {
        console.log(card.visVal);

    }


    return (
        <div>
            <Container maxWidth="xl">
                <Grid>
                    <Grid item xs={3}>
                        <p>{rule}</p>
                        <List component="nav" aria-label="contacts">
                            {playerArr?.map(player => {
                                    if (player.socketId === sock) {
                                        return (
                                            <ListItem
                                                style={{backgroundColor: "rgba(187,72,72,0.49)"}}>
                                                <ListItemText primary={player.nickname}/>
                                            </ListItem>
                                        )
                                    } else {
                                        return (
                                            <ListItem
                                                style={{backgroundColor: 'white'}}>
                                                <ListItemText primary={player.nickname}/>
                                                {
                                                    isSelecting && isTurn ? <button>Send Drink</button> :
                                                        <button disabled onClick={
                                                            (e) => {
                                                                setTargetPlayer(player.socket);
                                                                console.log(player.socket);
                                                        }
                                                        }>Send Drink</button>
                                                }
                                            </ListItem>
                                        )
                                    }
                                }
                            )
                            }

                        </List>
                        <div>
                            <Snackbar open={isDrink} autoHideDuration={1000}>
                                <Alert onClose={handleClose} severity="warning">
                                    Drink!
                                </Alert>
                            </Snackbar>
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
