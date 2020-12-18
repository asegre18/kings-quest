import image1 from '../../public/Gifs/2.gif';
import image2 from '../../public/Gifs/3clubs.gif';
import image3 from '../../public/Gifs/3diamonds.gif';
import image4 from '../../public/Gifs/3spades.gif';
import image5 from '../../public/Gifs/4spades.gif';
import image6 from '../../public/Gifs/4hearts.gif';
import image7 from '../../public/Gifs/4diamonds.gif';
import image8 from '../../public/Gifs/4clubs.gif';
import image9 from '../../public/Gifs/5.gif';
import image10 from '../../public/Gifs/6.gif';
const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];


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
