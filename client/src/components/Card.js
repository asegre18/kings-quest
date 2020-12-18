import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
<<<<<<< HEAD
import Lightbox from 'react-image-lightbox'
import image1 from '../../public/Gifs/2.gif';
import image2 from '../../public/Gifs/3clubs.gif';
import image3 from '../../public/Gifs/3diamonds.gif';
import image4 from '../../public/Gifs/3spades.gif';
import image5 from '../../public/Gifs/4spades.gif';
import image6 from '../../public/Gifs/4hearts.gif';
import image7 from '../../public/Gifs/4diamonds.gif';
import image8 from '../../public/Gifs/4clubs.gif';
import image9 from '../../public/Gifs/5.gif';
import image10 from '../../public/Gifs/6.gif';
const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        minHeight: 400,
=======

const useStyles = makeStyles({
    root: {
        minWidth: 600,
        minHeight: 400,
        backgroundColor: "grey",
        margin: 'auto',
        display: 'flex',
>>>>>>> dedb1b80fedfe8698d21a102624332f7a38db6f0
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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
        margin: 'auto',
      },
      alignItemsAndJustifyContent: {
        width: 600,
        height: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      media: {
        width: 600,
        height: 400,
        display: 'flex',
      },
});

export const PlayingCard = (props) => {

    const classes = useStyles();
    class PlayingCard extends Component {
        static onImageLoadError(imageSrc, _srcType, errorEvent) {
          console.error(`Could not load image at ${imageSrc}`, errorEvent); // eslint-disable-line no-console
        }
      
        constructor() {
          super();
      
          this.state = {
            index: 0,
            isOpen: false,
          };
          this.moveNext = this.moveNext.bind(this);
          this.movePrev = this.movePrev.bind(this);
          moveNext()
            this.setState(prevState => ({
              index: (prevState.index + 1) % images.length,
            }));
          };
        
          movePrev() {
            this.setState(prevState => ({
              index: (prevState.index + images.length - 1) % images.length,
            }));
        
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
<<<<<<< HEAD
              
                <Lightbox
          mainSrc={images[this.state.index]}
          nextSrc={images[(this.state.index + 1) % images.length]}
          prevSrc={
            images[(this.state.index + images.length - 1) % images.length]
          }></Lightbox>
=======
                {/* add images to card below */}
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title='Card'
                    />
>>>>>>> dedb1b80fedfe8698d21a102624332f7a38db6f0
            </CardContent>
        </Card>
        </div>
    );
