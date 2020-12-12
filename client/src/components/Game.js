import React, { Component } from 'react';

import { Layout } from './Layout.components';
import CardGameBoard from './CardGameBoard';
import '../style/App.css';
import Avatar from '@material-ui/core/Avatar';
import { flexbox } from '@material-ui/system'

import ButtonAppBar from './AppHead';

class Game extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar></ButtonAppBar>
        <Layout>
          <CardGameBoard />
        </Layout>
        <Avatar style={{
          margin: 'auto',
          marginTop: '30px',
          backgroundColor: '#3F51B5',
          fontSize: '.6em'
         }} > Player 1</Avatar>
      </div>
    );
  }
}

export default Game;
