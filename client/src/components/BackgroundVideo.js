import classes from '../style/BackgroundVideo.module.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import { WrappedSignIn } from './SignIn'
import { withStyles, makeStyles } from '@material-ui/core/styles';

const SignInButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 22,
    padding: '14px 26px',
    border: '3px solid',
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
const SignUpButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 22,
      padding: '14px 26px',
      border: '3px solid',
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

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  

const BackgroundVideo = () => {
    const videoSource = "https://reverbdesigns.com/kqlanding.mp4"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" autoplay="1"  className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    
                    
                        <div>
                    <SignInButton variant="contained" color="primary" disableRipple className={classes.margin} size="large" linkTo={WrappedSignIn} style={{
                        marginRight    : '60px',
                    
                    }}>Sign In</SignInButton>
                    <SignUpButton variant="contained" color="primary" disableRipple className={classes.margin} size="large" linkTo={WrappedSignIn} style={{
                        marginRight    : '60px',
                    
                    }}>Sign Up</SignUpButton>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo