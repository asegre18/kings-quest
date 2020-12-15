require('dotenv')
  .config();
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const { playingCards } = require('./services/deck.js');
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


// GAME LOGIC
let players = [];

const deck = playingCards.shuffle();

let current_turn = 0;
let timeOut;
let _turn = 0;
const MAX_WAITING = 10000;

function next_turn(){
  let card;
  _turn = current_turn++ % players.length;
  players[_turn-1]?.emit('stop_turn');
  if (deck.deck.length === 0) {
    deck.reset();
  }
  card = deck.deal();

  console.log('player: ', _turn,'card:', card, 'next card on deck:', deck.deck[deck.deck.length-1]);

  players[_turn]?.emit('your_turn', card);
  // tell clients to rerender
  console.log("next turn triggered " , _turn);
  triggerTimeout();
}
function triggerTimeout(){
  timeOut = setTimeout(()=>{
    next_turn();
  },MAX_WAITING);
}
function resetTimeOut(){
  if(typeof timeOut === 'object'){
    console.log("timeout reset");
    clearTimeout(timeOut);
  }
}
io.on('connection', function(socket) {
  next_turn();
  console.log('A player connected');
  players.push(socket);
  console.log("A number of players now ", players.length);
  socket.on('done_turn', function () {

    if (players[_turn] == socket) {
      resetTimeOut();
      next_turn();
    }
  });

  socket.on('disconnect', function () {
    console.log('A player disconnected');
    players.splice(players.indexOf(socket), 1);
    _turn--;
    console.log("A number of players now ", players.length);
  });

});



// const chatArr = [];
// let turn=0;
// const players = [];
// let deck;

// io.on('connection', (socket) => {
//   // console.log(socket);
//   console.log('Someone connected from the front end');
//   players.push(data);



  // socket welcome: adds player to array
  // socket.on('clientToServerWelcome', (players) => {
  //
  //
  //   socket.emit('serverToClientPlayersArray', players);
  // })
  //
  // socket.emit('serverToClient', 'hello', 'from', 'the server side');
  // socket.on('salutations', (msg) => {
  //   console.log(msg);
  // })
  //
  // socket.on('clientToServerIHeardyou', function(first, second, third) {
  //   socket.emit('clientToServerIHeardyou', 'hello', 'from', 'the client side');
  // })
  //
  // socket.on('clientToServerSendMessage', (data) => {
  //   chatArr.push(data);
  //
  //   socket.emit('serverToClientMessageSaved', chatArr);
  // })
  // socket.on('clientToServerFetchMessages', (cb) => {
    // cb(chatArr);
  // });
//
//
// });

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

server.listen(PORT, () => {
  console.log('Server started listening on PORT http://localhost:3001')
})
// app.listen(PORT, () => {
//   console.log('Server started listening on PORT http://localhost:3001');
// });
