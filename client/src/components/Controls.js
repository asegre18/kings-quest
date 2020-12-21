
import React from 'react';
class Controls extends React.Component {
    render(){
      return(
        <div>
          <div type="button" id='playButton' onClick={this.props.playVideo}>Play!</div>
          <div type="button" id='pauseButton' onClick={this.props.pauseVideo}>Pause!</div>
        </div>
      );
    }
  }
  
  export default Controls