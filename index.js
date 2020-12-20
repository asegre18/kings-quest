require('dotenv')
    .config();
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const {playingCards} = require('./services/deck.js');
const routes = require('./routes');


require('./services/passport');
mongoose.connect(process.env.MONGODB_URI, {
    // tells mongodb to use the new versions of mongo, otherwise an update might break the code
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Yee'))
    .catch(e => console.log(e));

mongoose.set('debug', true);

const PORT = process.env.PORT || 3001;
const app = express();

// SOCKET.IO INTEGRATION
const server = http.createServer(app);
const io = require('socket.io')(server);


// // GAME LOGIC
let players = [];

const deck = playingCards.shuffle();

let current_turn = 0;
let timeOut;
let _turn = 0;
let card;
const MAX_WAITING = 15000;

function next_turn(){
        _turn = current_turn++ % players.length;

        if (players.length > 0) {
            if (deck.deck.length === 0) {
                deck.reset();
            }
            card = deck.deal();
            console.log(players[_turn]);
            let nonPlayers = players.filter(player => player != players[_turn])
            for (let i = 0; i < nonPlayers.length; i++) {
                io.to(nonPlayers[i].socketId).emit('not_your_turn', _turn);
            }
            io.to(players[_turn]?.socketId).emit('your_turn', card);
        }
  triggerTimeout();
}
function triggerTimeout(){
  timeOut = setTimeout(()=>{
    next_turn();
  },MAX_WAITING);
}
// function resetTimeOut(){
//   if(typeof timeOut === 'object'){
//     console.log("timeout reset");
//     clearTimeout(timeOut);
//   }
// }

// not console logging commented out to start working on the actual gameboard
// function handleRule(){
//
// }

io.on('connection', socket => {
    let newPlayer;
    let _turn = 0;
    let card;

    socket.on('clientToServerWelcome', (playerNickname) => {
        // console.log(playerNickname);
        // console.log(socket.id);

        console.log('A player connected');
        // newPlayer object
        newPlayer = {
            nickname: playerNickname,
            socketId: socket.id,
            turnNum: players.length,
        }
        // Add newPlayer to player array
        players.push(newPlayer);
        console.log("Added: ", newPlayer);
        console.log("A number of players now ", players.length);
        // send players
        io.emit('serverToClientUpdatePlayers', players);


        // Turn Logi
    })





    // let card;
    // _turn = current_turn++ % players.length;
    // // players[_turn].emit('stop_turn');
    //
    //
    // // console.log('player: ', _turn,'card:', card, 'next card on deck:', deck.deck[deck.deck.length-1]);
    //
    // players[_turn] ? players[_turn].emit('your_turn', card) : null;
    // // send card to the client socket
    // io.emit('cardToClient', card);
    // // handles the rule from client
    // // io.on('ruleToServer', (rule) => {
    // //   console.log('RULE', rule);
    // // });
    // // tell clients to rerender
    // // console.log("next turn triggered " , _turn);
    // ON client to Server welcome, create a more indepth player object,
    // which will be appended to the player array.


    // next_turn();
    // console.log('SOCKET ID', {[socket.id]: socket});

    // socket.on('done_turn', function () {
    //   if (players[_turn].socket === socket) {
    //     resetTimeOut();
    //     next_turn();
    //     socket.on('ruleToServer', (rule) => {
    //       console.log('RULE', rule);
    //     });
    //   }
    // });

    socket.on('disconnect', function () {
        console.log('A player disconnected');
        players.splice(players.indexOf(socket), 1);
        _turn--;
        console.log("A number of players now ", players.length);
    });

});

triggerTimeout();


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

server.listen(PORT, () => {
    console.log('Server started listening on PORT http://localhost:3001')
})
// app.listen(PORT, () => {
//   console.log('Server started listening on PORT http://localhost:3001');
// });
