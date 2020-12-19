import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { AvatarLayout } from './Layout.components';
import Box from '@material-ui/core/Box';
import { shadows } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

class Player extends React.Component {
  render() {
    return (
          <div className={AvatarLayout}>
            <Box boxShadow={3}> Dummy</Box>
</div>
    );}
}
export default Player