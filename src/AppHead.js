import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import banner from './images/banner.png';
import './style/App.css';
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

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src={banner} style={{ 
                    float       : 'none', 
                    width       : '270px',
                    marginLeft  : 'auto',
                    marginRight : 'auto'
                }} alt="kings quets banner" width="250px" display height="70px" margin-left="30%"></img>
            
         <NotificationsActiveIcon/>
          <Button color="inherit">Quit</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
