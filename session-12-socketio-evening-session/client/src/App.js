import "./App.css";
import { useState } from "react";
import io from "socket.io-client";
import Chat from "./components/Chat";

// const socket = io.connect(
//   "https://simple-chatting-app-server-faizulosman.onrender.com"
// );
const socket = io.connect("http://localhost:3001");

function App() {
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (userName !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join a Chat</h3>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter Your Name"
          />
          <input
            type="text"
            name="image"
            onChange={(e) => setUserImage(e.target.value)}
            placeholder="Your Image URL"
          />
          <input
            type="text"
            onChange={(e) => setRoom(e.target.value)}
            placeholder="Enter Room ID"
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat
          socket={socket}
          userName={userName}
          room={room}
          userImage={userImage}
        />
      )}
    </div>
  );
}

export default App;
