import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 600,
        minHeight: 400,
        backgroundColor: "grey",
        margin: 'auto',
        display: 'flex',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    marginAutoContainer: {
        width: 600,
        height: 400,
        display: 'flex',
      },
      alignItemsAndJustifyContent: {
        width: 600,
        height: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export const PlayingCard = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.marginAutoContainer}>
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.suit}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.num}
                </Typography>
            </CardContent>
        </Card>
        </div>
    );
}
