import React from 'react';
import { Button } from '@material-ui/core'
import classes from '.style/BackgroundVideo.module.css';

const BackgroundVideo = () => {
    const videoSource = "https://www.reverbdesigns.com/kqlanding.mp4"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="looped" mutued  className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

               
                <Link to="/signup"><Button type="button" className="btn btn-outline-dark" style={{
                    backgroundColor  : '#DA2900'}}>Start Your Quest</Button></Link>
                    
                </div>);
            
        
                }

export default BackgroundVideo
