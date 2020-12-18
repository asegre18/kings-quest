const diamonds2 = '../client/public/cards/2diamonds.gif';
// hearts
const hearts1 = 'http://reverbdesigns.com/AceHearts.gif';
const hearts2 = 'http://reverbdesigns.com/2hearts.gif';
const hearts3 = 'http://reverbdesigns.com/3hearts.gif';
const hearts4 = 'http://reverbdesigns.com/4hearts.gif';
const hearts5 = 'http://reverbdesigns.com/5hearts.gif';
const hearts6 = 'http://reverbdesigns.com/6hearts.gif';
const hearts7 = 'http://reverbdesigns.com/7hearts.gif';
const hearts8 = 'http://reverbdesigns.com/8hearts.gif';
const hearts9 = 'http://reverbdesigns.com/9hearts.gif';
// rest of heart gifs still being made
const hearts10 = '';
const hearts11 = '';
const hearts12 = '';
const hearts13 = '';
// Spades
const spades1 = 'http://reverbdesigns.com/AceSpades.gif';
const spades2 = 'http://reverbdesigns.com/2spades.gif';
const spades3 = 'http://reverbdesigns.com/3spades.gif';
const spades4 = 'http://reverbdesigns.com/4spades.gif';
const spades5 = 'http://reverbdesigns.com/5spades.gif';
const spades6 = 'http://reverbdesigns.com/6spades.gif';
const spades7 = 'http://reverbdesigns.com/7spades.gif';
const spades8 = 'http://reverbdesigns.com/8spades.gif';
const spades9 = 'http://reverbdesigns.com/9spades.gif';
// rest of spade gifs still being made
const spades10 = '';
const spades11 = '';
const spades12 = '';
const spades13 = '';
// Clubs
const clubs1 = 'http://reverbdesigns.com/AceClubs.gif';
const clubs2 = 'http://reverbdesigns.com/2clubs.gif';
const clubs3 = 'http://reverbdesigns.com/3clubs.gif';
const clubs4 = 'http://reverbdesigns.com/4clubs.gif';
const clubs5 = 'http://reverbdesigns.com/5clubs.gif';
const clubs6 = 'http://reverbdesigns.com/6clubs.gif';
const clubs7 = 'http://reverbdesigns.com/7clubs.gif';
const clubs8 = 'http://reverbdesigns.com/8clubs.gif';
const clubs9 = 'http://reverbdesigns.com/9clubs.gif';
// rest of club gifs still being made
const clubs10 = '';
const clubs11 = '';
const clubs12 = '';
const clubs13 = '';
// Diamonds
const diamonds1 = 'http://reverbdesigns.com/AceDiamonds.gif';
const diamonds2 = 'http://reverbdesigns.com/2diamonds.gif';
const diamonds3 = 'http://reverbdesigns.com/3diamonds.gif';
const diamonds4 = 'http://reverbdesigns.com/4diamonds.gif';
const diamonds5 = 'http://reverbdesigns.com/5diamonds.gif';
const diamonds6 = 'http://reverbdesigns.com/6diamonds.gif';
const diamonds7 = 'http://reverbdesigns.com/7diamonds.gif';
const diamonds8 = 'http://reverbdesigns.com/8diamonds.gif';
const diamonds9 = 'http://reverbdesigns.com/9diamonds.gif';
// rest of diamond gifs still being made
const diamonds10 = '';
const diamonds11 = '';
const diamonds12 = '';
const diamonds13 = '';

// array of card image files
const images = [ 
    hearts1, hearts2, hearts3, hearts4, hearts5, hearts6, hearts7, hearts8, hearts9, hearts10, hearts11, hearts12, hearts13,
    spades1, spades2, spades3, spades4, spades5, spades6, spades7, spades8, spades9, spades10, spades11, spades12, spades13,
    clubs1, clubs2, clubs3, clubs4, clubs5, clubs6, clubs7, clubs8, clubs9, clubs10, clubs11, clubs12, clubs13,
    diamonds1, diamonds2, diamonds3, diamonds4, diamonds5, diamonds6, diamonds7, diamonds8, diamonds9, diamonds10, diamonds11, diamonds12, diamonds13,
];

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
