import classes from '../style/BackgroundVideo.module.css';
import React from 'react';



  

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
        
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo