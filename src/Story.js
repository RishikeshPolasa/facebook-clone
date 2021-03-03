import React from 'react'
import { Avatar,IconButton } from '@material-ui/core';
import './Story.css'
function Story({profilesrc , image, title}) {
        return (
                <div style={{backgroundImage:`url(${profilesrc})`}} className="story">
                        <Avatar className="story__avatar" src={image} />
                        <h4>{title}</h4>
                </div>
        )
}

export default Story
