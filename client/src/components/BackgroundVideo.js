import classes from '../style/BackgroundVideo.module.css';
import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import playtype from '../images/playtype.png';
import pausetype from '../images/pausetype.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
}));
const PlayButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 22,
      padding: '14px 26px',
      border: '3px solid',
      MarginRight: 60,
      lineHeight: 1.5,
      backgroundColor: '#DA2900',
      borderColor: '#B19E07',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#502419',
        borderColor: '#A7940A',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#FF3C2F',
        borderColor: '#FF3C2F',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(152,156,40,.5)',
      },
    },
  })(Button);
  const PauseButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 22,
      padding: '10px 22px',
      border: '3px solid',
      MarginRight: '60px',
      lineHeight: 1.5,
      backgroundColor: '#DA2900',
      borderColor: '#B19E07',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#A7940A',
        borderColor: '#502419',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#BBAA38',
        borderColor: '#BBAA38',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(187,170,56,.5)',
      },
    },
  })(Button);
    class BackgroundVideo extends React.Component {
      componentDidMount = () => {
        this.playVideo();
      };

      componentWillUnmount = () => {
          this.pauseVideo();
      };


      playVideo = () => {
        // You can use the play method as normal on your video ref
        this.refs.vidRef.play();
      };

      pauseVideo = () => {
        // Pause as well
        this.refs.vidRef.pause();
      };

      render = () => {
        return (
          <div className={classes.Container}>
            <video
              ref="vidRef"
              src="https://reverbdesigns.com/kqlanding.mp4"
              type="video/mp4"
              style={{ 
                height: '100%',
                width: '177.77777778vh', /* 100 * 16 / 9 */
                minWidth: '100%',
                minHeight: '56.25vw' /* 100 * 9 / 16 */
            }}/>
          

          <div className={classes.Content}>
                <div className={classes.SubContent} >
              <PlayButton onClick={this.playVideo} style={{
                  MarginRight:'5%',}}>
              <img src={playtype} style={{
            float: 'none',
            width: '157px',
            height: '51px',
            margin: 'auto',
          }} alt="Play" ></img>
              </PlayButton>
              <PauseButton onClick={this.pauseVideo} MarginRight='60px'>
              <img src={pausetype} style={{
            float: 'none',
            width: '175px',
            height: '61px',
            margin: 'auto',
          }} alt="Play" ></img>
              </PauseButton>
            </div>
          </div>
          </div>
        );
      };
    }

 export default BackgroundVideo;