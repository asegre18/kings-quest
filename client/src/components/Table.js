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


        socket.on('serverToClient', function(first, second, third) {

            socket.emit('clientToServerIHeardyou', 'hello', 'from', 'the client side');

        })



        socket.on('serverToClientMessageSaved', (charArr) => {
            console.log(charArr)

        })



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
            >Send MEssage</button>
            {turn === 1 ?
                <PlayingCard suit={currentCard.suit} num={currentCard.visVal}/>
                : null}
        </div>
    );
}


export default Table;
