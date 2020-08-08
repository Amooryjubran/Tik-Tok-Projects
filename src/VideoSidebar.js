import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

function VideoSidebar({likes, shares, messages}) {
    // to like.unlike we use hooks
    const [liked, setLiked] = useState(false);


    return (
        <div className="videoSidebar">
            <div className="videoSidebr__button" >
                {/* connected to the hook above */}

                {liked ? 
                      <FavoriteIcon fontSize="large"   
                      onClick={(e) => setLiked(false)}
                      />
                      
                : 
                    <FavoriteBorderIcon fontSize="large"  
                    onClick={(e) => setLiked(true)}
                    />
                }
                
                <p> {liked ? likes + 1 : likes}</p>
            </div>            
            <div className="videoSidebr__button">
                <MessageIcon fontSize="large"   />
                <p>{messages}</p>
            </div>            
            <div className="videoSidebr__button"  >
                <ShareIcon fontSize="large"  />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
