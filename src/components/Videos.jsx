import React from 'react'
import VideoCard from './VideoCard'
import "../styles/Video.css"

const Videos = ({videos}) => {
  return (
    <div className='Video'>
        {
            videos.map((item,index)=>(
                <VideoCard index={index} key={item.image} image={item.image} name={item.name}/>
                
            ))
        }
        
        
    </div>
  )
}

export default Videos