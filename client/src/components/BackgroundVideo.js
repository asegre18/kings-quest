import classes from '../style/BackgroundVideo.module.css';
import React from 'react';



  

const BackgroundVideo = () => {
    const videoSource = "https://reverbdesigns.com/kqlanding.mp4"
    return (
        <div className={classes.Container} >
            <iframe src="youraudiofile.mp3" type="audio/mp3" allow="autoplay" id="audio" style={{
                display: 'none'
            }}></iframe>
<audio autoplay>
    <source src="http://reverbdesigns.com/silence.mp3" type="audio/mp3"/>
</audio>
            <video autoPlay="autoplay" autoplay="1"  mutedclassName={classes.Video} style={{ 
                height: '100%',
                width: '177.77777778vh', /* 100 * 16 / 9 */
                minWidth: '100%',
                minHeight: '56.25vw' /* 100 * 9 / 16 */
            }}>
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