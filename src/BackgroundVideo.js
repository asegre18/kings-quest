import React from 'react';
import { Button } from '@material-ui/core';
import classes from '../style/BackgroundVideo.module.css';


const BackgroundVideo = () => {
    const videoSource = "https://reverbdesigns.com/kqlanding.mp4"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1>Reactjs Course</h1>
                    <p>Learn how to develope React projects</p>
                    <Button variant="contained" color="secondary">View the course</Button>
                    <img
                        src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo