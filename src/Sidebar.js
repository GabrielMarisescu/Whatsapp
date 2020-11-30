import React from 'react'
import "./Sidebar.scss"
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import { IconButton,Avatar } from '@material-ui/core';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
    

            <div className="sidebar__header">
                <Avatar src="https://t-power89.github.io/images/avatar.jpg" />

                <div className="sidebar__headerRight">
                    <IconButton>
                    <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                    <ChatIcon />
                    </IconButton>

                    
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input  placeholder="Cerca oppure chatta con qualcuno"  type ="text"/> 
                    

                </div>
                
                
            </div>

            <div className="sidebar__chats">
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                </div>
        </div>
    )
}

export default Sidebar
