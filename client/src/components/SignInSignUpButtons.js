
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MemoryRouter as Router } from 'react-router';
import Link from '@material-ui/core/Link';


const SignInButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
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
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
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
  export default function LinkRouter () {
    return (
        <Router>
                        <div>
                    <SignInButton size="large" variant="contained" color="secondary" > <Link component={signin}></Link>Sign In</SignInButton>
                    </div>
                    </Router>
    );
  }
export default SigninSignUpButtons