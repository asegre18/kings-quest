import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { shadows } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles({
    root: {
        minWidth: 690,
        minHeight: 400,
        bgcolor: "background.paper",
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
        width: 700,
        height: 400,
        display: 'flex',
        margin: 'auto',
      },
      alignItemsAndJustifyContent: {
        width: 700,
        height: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      media: {
        width: 700,
        height: 400,
        paddingRight: '5%,',
        backgroundPosition: 'unset',
      },
});

export const PlayingCard = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.marginAutoContainer}>
            <Box boxShadow={3} className={classes.marginAutoContainer}>
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom style={{
                    display: 'none',
                }}>
                    {props.suit}
                </Typography>
                <Typography variant="h5" component="h2"  style={{
                    display: 'none',
                }}>
                    {props.num}
                </Typography>
                {/* add images to card below */}
                <CardMedia
                    
                    image={props.image}
                    title='Card'
                    style={{
                       
                        width: 680,
                      height: 400,
                      backgroundPosition: 'unset',
                    }}
                    />
            </CardContent>
        </Card>
        </Box>
        </div>
    );
}
