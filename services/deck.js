const clubs2 = '../client/public/cards/2clubs.gif';
const diamonds2 = '../client/public/cards/2diamonds.gif';
const hearts1 = 'http://reverbdesigns.com/AceHearts.gif';
const hearts2 = '../client/public/cards/2hearts.gif';
const hearts3 = '../client/public/cards/3hearts.gif';
const hearts4 = '../client/public/cards/4hearts.gif';
const hearts5 = '../client/public/cards/5hearts.gif';
const images = [ hearts1, hearts2, hearts3, hearts4, hearts5, clubs2, diamonds2, ];

class Card {
    constructor() {
        this.suit = "";
        this.visVal = "";
        this.image = "";
    }

}

class Deck {
    constructor() {
        this.deck = [];
        this.reset();
        // this.shuffle();
        this.deal();
    }

    reset() {
        this.deck = [];

        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const visVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,];

        for (let suit in suits) {
            for (let value in visVal) {
                var card = new Card();
                card.suit = suits[suit];
                card.visVal = visVal[value];
                card.image = images[value];
                this.deck.push(card);
            }
        }
    }

    shuffle() {
        const { deck } = this;
        let m = deck.length, i;

        while (m) {
            i = Math.floor(Math.random() * m--);

            [deck[m], deck[i]] = [deck[i], deck[m]];
        }

        return this;
    }

    deal() {
        return this.deck.pop();
    }
}

const playingCards = new Deck();
console.log(playingCards);

module.exports = { playingCards };
