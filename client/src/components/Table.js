import React, { useEffect, useState } from 'react';
import { PlayingCard } from "./Card";
import io from 'socket.io-client';
// import TextField from "@material-ui/core/TextField";
const socket = io();

const Table = () => {
    const [order, setOrder] = useState(0);
    const [currentCard, setCurrentCard] = useState({});
    const [currentRule, setCurrentRule] = useState(0)
    const [turn, setTurn] = useState(0);
    const [showCard, setShowCard] = useState(0);
    console.log("isturn", turn);
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

            setCurrentCard(card);
            // setTurn(1);
            console.log(card);
            console.log("Rule: ", currentRule);

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

        socket.on('your_turn', ([card, player, trn]) => {
            console.log(player, ": ", trn);


            setCurrentCard(card);
            setTurn(1);

        });


        //
        socket.on('stop_turn', () => {
            console.log('notmyturn');
            setTurn(0);
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
            socket.removeListener('your_turn');
            socket.removeListener('stop_turn');
            socket.removeListener('helloWorld');
        }
    }, []);

    const ruleSetter = (card) => {
        console.log(card.visVal, card.suit);
        socket.emit('ruleToServer', card.visVal);
        console.log(currentCard);
        setCurrentRule(card.visVal);
        setTurn(0);
    }

    const onClick = (currentCard) => {
        console.log(currentCard);
    }


    return (

        <div>
            <br/>
            <br/>
            {turn === 0 ? <button
                onClick={ onClick(currentCard)}
            >Pull Card</button> : null}
            {turn === 1 ?
                <PlayingCard suit={currentCard.suit} num={currentCard.visVal} image={currentCard.image}/>
                : null}
            {turn === 0 ? <p>Other User pulled a: {currentRule}</p> : null}
        </div>
    );
}

export default Table;
