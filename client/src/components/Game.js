import React, { Component } from 'react';

import { Layout } from './Layout.components';
// import CardGameBoard from './CardGameBoard';
import '../style/App.css';
import Player from './Player';
import { flexbox } from '@material-ui/system'
import { PlayingCard } from './Card';

import ButtonAppBar from './AppHead';

class Game extends Component {
  render() {
    return (
     <div className="App">
        <Layout>
          <PlayingCard />
        <Player/>
        
         </Layout>
         
  </div>    
    );
  }
}

export default Game;
