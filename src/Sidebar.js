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
                <Avatar src="https://images2.corriereobjects.it/methode_image/2019/11/11/Spettacoli/Foto%20Spettacoli%20-%20Trattate/4309.0.516421493-k3nB-U31507751348767QB-1224x916@Corriere-Web-Sezioni-593x443.jpg?v=20191111102617" />

                <div className="sidebar__headerRight">
                    <IconButton >
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
