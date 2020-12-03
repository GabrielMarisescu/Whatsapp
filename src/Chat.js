import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon, Mic } from '@material-ui/icons'
import React, {useState} from 'react'
import "./Chat.scss"
import axios from "./axios"


function Chat({ messages}) {

 const [input, setinput] =useState("")
  const SendMessage = async e => {
    e.preventDefault();
    await  axios.post("/messages/new", {
      message: input,
  
      name: "Gabriel M",
      timestamp : new Date().toUTCString(),
      received: false,
    });
    setinput("")
  }
    return (
        <div className="chat">
         <div className="chat__header">


<Avatar  src="https://images2.corriereobjects.it/methode_image/2019/11/11/Spettacoli/Foto%20Spettacoli%20-%20Trattate/4309.0.516421493-k3nB-U31507751348767QB-1224x916@Corriere-Web-Sezioni-593x443.jpg?v=20191111102617"/>
        <div className="chat__headerInfo">
          <h3> Nome della stanza</h3>
          <p> Visto l'ultima volta a...</p>
        </div>

        <div className="chat_headerRight">
        <IconButton >
                    <SearchOutlined />
                    </IconButton>

                    <IconButton>
                    <AttachFile />
                    </IconButton>

                    
                    <IconButton>
                    <MoreVert />
                    </IconButton>

        </div>
         </div>
            


            <div className="chat__body">


            <p className="chat__message">
              <span className="chat__name" > Gabriel M,</span>
              Questo è un messaggio ,

              <span className ="chat__timestamp"> 
    {new Date().toUTCString()}</span>

    </p>

              {messages.map((data) => (
<p className="chat__message chat__receiver ">
<span className="chat__name" > {data.name} ,</span>
{data.message}

<span className ="chat__timestamp"> 
              {data.timestamp}</span>

</p> ))}   
    



            </div>



            <div className="chat__footer">
              <InsertEmoticon />
              <form>
                <input  value = {input} onChange= { e => setinput(e.target.value)} placeholder="Scrivi un messaggio" type ="text"/>
<button   onClick= {SendMessage}type ="submit"> Scrivi un messaggio</button>




              </form>
              <Mic />
            </div>
        </div>
    )
}

export default Chat
