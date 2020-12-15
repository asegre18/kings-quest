import React, { Component } from 'react';
import { playingCards } from './deck.js';
import { PlayingCard } from "./Card";
import TextField from "@material-ui/core/TextField";


const Table = () => {
    const deck = playingCards.shuffle();
    const card = deck.deal();

    console.log(card);


    return <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <PlayingCard suit={card.suit} num={card.visVal}/>
    </div>;
}


export default Table;
