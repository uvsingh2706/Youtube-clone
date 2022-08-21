import { Avatar } from '@mui/material'
import React from 'react'
import './channelRow.css'
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';


function ChannelRow({image, channel, verified , subs, noOfVideos, description} ) {
  return (
    <div className='channelRow'>
       <Avatar
       className='channelRow__logo' 
       alt={channel}
       src={image}
       />
       <div className="channelRow__text">
           <h4>{channel} {verified && <CheckCircleOutlineSharpIcon/> }   </h4>
           <p>{subs} subscriber • {noOfVideos} videos</p>
           <p>{description}</p>
       </div>
        </div>
  )
}

export default ChannelRow