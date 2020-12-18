import React, { useEffect, useState } from 'react';
import { PlayingCard } from "./Card";
import io from 'socket.io-client';
// import TextField from "@material-ui/core/TextField";
const socket = io();

const Table = () => {

    const [currentCard, setCurrentCard] = useState('');
    const [turn, setTurn] = useState(0);
    const [showCard, setShowCard] = useState(0);

    useEffect(() => {
        // socket welcome: adds player to array
        socket.emit('clientToServerWelcome', 'username');

        socket.on('serverToClientPlayersArray', (players) => {
            console.log(players)

        });

        // logic for switch case rules

// send info from the card deck in the server to the client
// receiving the card back into a function (card) => {}
// inside that will be if, card.visval for each number 
// switch case instead of if statements
// console log card
        socket.on('cardToClient', (card) => {
            switch(card.visVal) {
                case 1:
                    console.log("Ace", card.visVal);
                    socket.emit('ruleToServer', card.visVal);
                break; 
                case 2:
                    console.log("Two", card.visVal);
                    socket.emit('ruleToServer', card.visVal);
                break;
                case 3:
                    console.log("Three", card.visVal);
                    socket.emit('ruleToServer', card.visVal);
                break;
                case 4:
                    console.log("Four", card.visVal);
                    socket.emit('ruleToServer', card.visVal);
                break;
                case 5:
                    console.log("Five", card.visVal);
                    socket.emit('ruleToServer', card.visVal);
                break;
                case 6:
                    console.log("Six", card.visVal);
                    socket.emit('ruleToServer', card.visVal);
                break;
                case 7:
                    console.log("Seven", card.visVal);
                    socket.emit('ruleToServer', card.visVal);
                break;
                case 8:
                    console.log("Eight", card.visVal);
                    socket.emit('ruleToServer', card.visVal);
                break;
                case 9:
                    console.log("Nine", card.visVal);
                    socket.emit('ruleToServer', card.visVal);
                break;
                case 10:
                    console.log("Ten", card.visVal);
                    socket.emit('ruleToServer', card.visVal);
                break;
                case 11:
                    console.log("Jack/Eleven", card.visVal);
                    socket.emit('ruleToServer', card.visVal);
                break;
                case 12:
                    console.log("Queen/Twelve", card.visVal);
                    socket.emit('ruleToServer', card.visVal);
                break;
                case 13:
                    console.log("King/Twelve", card.visVal);
                    socket.emit('ruleToServer', card.visVal);
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
            <br/>
            <br/>
            <button
             onClick={ () => {
                 socket.emit('done_turn');
                 setTurn(turn === 1 ? turn - 1 : turn);
             }}
            >Send Message</button>
            {turn === 1 ?
                <PlayingCard suit={currentCard.suit} num={currentCard.visVal} image={currentCard.image}/>
                : null}
        </div>
    );
}

export default Table;
