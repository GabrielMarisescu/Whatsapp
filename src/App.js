import React , {useEffect, useState } from "react";
import './App.scss';
import Pusher from "pusher-js"
import axios from  "./axios"
import Sidebar from "./Sidebar"
import Chat from "./Chat"

function App() {
  const [messages,Setmessages]  = useState([])
  useEffect(() => {
    const pusher = new Pusher('9fb53245634578e4912d', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe("messages");
    channel.bind('inserted', (data)  => {
      Setmessages([...messages,data])
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
    

  }, [messages])




  useEffect(() => {
    axios.get("/messages/sync").then(response => { console.log(response.data)  
      Setmessages(response.data)
    })



  },[])
  console.log(messages)





  return (
    <div className="app">
      <div className="app__body">

      <Sidebar />
        <Chat messages={messages}/> 
      </div>
    

    </div>
  );
}

export default App;
