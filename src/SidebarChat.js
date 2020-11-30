import React from 'react'
import "./SidebarChat.scss"
import {Avatar } from '@material-ui/core';

function SidebarChat() {
    return (
        <div className="sidebarChat">
           <Avatar />
           <div className="sidebarChat__info">
               <h2>Room name  </h2>
                   <p> Last message in the room</p>
           </div>
            
        </div>
    )
}

export default SidebarChat
