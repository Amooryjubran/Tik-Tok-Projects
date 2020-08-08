import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';



function Video({
    autoplay,
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares,
}) {
    // to target the video we need to reference
    const videoRef = useRef(null);
    // to pause it  {false because by default the video ain;t gonna be playing}
    const [play, setPlay] = useState(false)

    // to make it play on one click
    const onVideoPress = () => {
        if (play) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
        
    };
    return (
        <div className="video">
            <video 
                className="video__player" 
                onClick={onVideoPress} 
                loop 
                ref={videoRef} 
                src={url}
                ></video>
            {/* videoFooter */}
            <VideoFooter 
                channel={channel} 
                song={song}
                description={description}
            />
            {/* VideoSideBar */}
            <VideoSidebar likes={likes} messages={messages} shares={shares}/>
        </div>
    )
}

export default Video
