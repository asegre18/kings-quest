class Card {
    constructor() {
        this.suit = "";
        this.visVal = "";
    }

}

class Deck {
    constructor() {
        this.deck = [];
        this.reset();
        this.shuffle();
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

module.exports = { playingCards };
