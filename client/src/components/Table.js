import React, { useEffect, useState } from 'react';
import { PlayingCard } from "./Card";
import io from 'socket.io-client';
import {Container, Grid, List, ListItem, ListItemText } from '@material-ui/core';
// import TextField from "@material-ui/core/TextField";
const socket = io();

const Table = () => {

    const [currentCard, setCurrentCard] = useState({});
    const [turn, setTurn] = useState(0);
    const [showCard, setShowCard] = useState(0);
    const playerNickname = localStorage.getItem('nickname');

    let playersArray = [{
      name: "Allie",
      turnNum: 0},
      {name: "Jordan",
      turnNum: 1},
      {name: "Andrew",
      turnNum: 0},
      {name: "Kojin",
      turnNum: 0} ];

    useEffect(() => {
        // socket welcome: adds player to array
        socket.emit('clientToServerWelcome', playerNickname);

        socket.on('serverToClientPlayersArray', (players) => {
            console.log(players)
            // playersArray.push(players);
        });

        // logic for switch case rules

        const ruleSetter = (card) => {
            console.log(card.visVal, card.suit);
            socket.emit('ruleToServer', card.visVal);
            console.log(currentCard);
            setCurrentCard(currentCard.rule = 0);
        }

// send info from the card deck in the server to the client
// receiving the card back into a function (card) => {}
// inside that will be if, card.visval for each number
// switch case instead of if statements
// console log card
        socket.on('cardToClient', (card) => {

            setCurrentCard(currentCard.rule = card.visVal);
            console.log(card);
            console.log("Card: ", currentCard);

            switch(card.visVal) {
                case 1:
                    ruleSetter(card);
                break;
                case 2:
                    ruleSetter(card);
                break;
                case 3:
                    ruleSetter(card);
                break;
                case 4:
                    ruleSetter(card);
                break;
                case 5:
                    ruleSetter(card);
                break;
                case 6:
                    ruleSetter(card);
                break;
                case 7:
                    ruleSetter(card);
                break;
                case 8:
                    ruleSetter(card);
                break;
                case 9:
                    ruleSetter(card);
                break;
                case 10:
                    ruleSetter(card);
                break;
                case 11:
                    ruleSetter(card);
                break;
                case 12:
                    ruleSetter(card);
                break;
                case 13:
                    ruleSetter(card);
                break;
            }
        })

        socket.on('your_turn', (card) => {
            console.log('myturn');
            setCurrentCard(card);
            setTurn(turn + 1);
        });

        socket.on('stop_turn', () => {
            console.log('notmyturn');
            setTurn(turn === 1 ? turn - 1 : turn);
        });

        // socket.on('card2 pulled')


        // socket.on('serverToClient', function(first, second, third) {

        //     socket.emit('clientToServerIHeardyou', 'hello', 'from', 'the client side');

        // })



        // socket.on('serverToClientMessageSaved', (charArr) => {
        //     console.log(charArr)

        // })



        // socket.on('serverToClientMessageSent', (chatArr) => {
        //     console.log(chatArr);
        //     setChatMessages(chatArr);
        // });
        //
        // socket.on('helloWorld', (string) => {
        //     console.log(string);
        // });
        //
        // socket.on('yee', (string) => {
        //     console.log(string);
        // });
        //
        // socket.emit('clientToServerFetchMessages', messages => {
        //     setChatMessages(messages);
        // });

        return function () {
            console.log('Im leaving');
            socket.removeListener('serverToClientMessageSent');
            socket.removeListener('yee');
            socket.removeListener('helloWorld');
        }
    }, []);


    return (
            <div>
              <Container maxWidth="xl">
              <Grid>
                <Grid item xs={3}>
            <List component="nav" aria-label="contacts">
            {playersArray?.map(player => {
                    return (
                        <ListItem style={{backgroundColor: `${player.turnNum === 1 ? "rgba(187, 72, 72, 0.49)" : "white"}`}}> 
                            <ListItemText primary={player.name}/>
                        </ListItem>
                        
                    );
                })
            }
        </List>
        </Grid>

            <button
             onClick={ () => {
                 socket.emit('done_turn');
                 setTurn(turn === 1 ? turn - 1 : turn);
             }}
            >Send Message</button>

            {turn === 1 ?
                <PlayingCard suit={currentCard.suit} num={currentCard.visVal} image={currentCard.image}/>
                : null}

                </Grid>
                </Container>
        </div>
    );
}

export default Table;
