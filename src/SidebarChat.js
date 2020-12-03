import React from 'react'
import "./SidebarChat.scss"
import {Avatar } from '@material-ui/core';

function SidebarChat() {
    return (
        <div className="sidebarChat">
           <Avatar />
           <div className="sidebarChat__info">
               <h2>Nome della stanza  </h2>
                   <p> Ultimo messaggio nella stanza</p>
           </div>
            
        </div>
    )
}

export default SidebarChat
