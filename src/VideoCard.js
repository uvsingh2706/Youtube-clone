import React from 'react'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';
import './videocard.css';

function VideoCard({image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className='videoCard'>
       <img className='videoCard__thumbnail' src={image} alt="" />
       <div className="video__info">
           <Avatar
             className='videocard__avatar'
             alt={channel} 
             src={channelImage}/>
       
       <div className="videoCard__text">
           <h4>{title}</h4>
           <p>{channel}</p>
           <p>
               {views} . {timestamp}
            </p>
       </div>
       </div>
   </div>
  )
}

export default VideoCard