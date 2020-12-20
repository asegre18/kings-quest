import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import banner from '../images/banner.png';
import '../style/App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setViewerToken, setUserData } from '../pages/Viewer';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
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



export default function ButtonAppBar() {
  const classes = useStyles();
  const { token } = useSelector(state => state.viewer);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('nickname');
    dispatch(setViewerToken(null));
    dispatch(setUserData(null));
    history.push('/');
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">

        <Toolbar>

          {
            token ?
              <Button
                color='inherit'
                onClick={handleSignOut}
              >
                Sign Out
              </Button> :
              <div style={{
                marginLeft: '100px'
              }}>
                <SignUpButton
                  to='/signup'
                  component={Link}
                  color="inherit">
                  Sign Up
                </SignUpButton>


              </div>
          }

          <img src={banner} style={{
            float: 'none',
            width: '270px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }} alt="kings quets banner" width="250px" display height="70px" margin-left="30%"></img>
          <div style={{
            marginLeft: '100px',
            marginRight: '50px'
          }}>
            {
              token ?
                <Button
                  to='/game'
                  component={Link}
                  color="inherit">
                  Join Game
                  </Button> :
                <SignInButton
                  to='/signin'
                  component={Link}
                  color="inherit">
                  Sign In
                </SignInButton>
            }
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
