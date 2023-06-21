import "./index.css";
import { messagesData } from "../../mocks/messages";
import { getTimePassed } from "../../utils/fn";
import { useState, useEffect } from "react";

const Messages = () => {
  const [messages, setMessages] = useState(messagesData);

  useEffect(() => {
    fetch("https://api.npoint.io/38faf5e58f7267f799b4")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);
  return (
    <div>
      <ul>
        {messages?.map((chat) => (
          <li className="chat" key={chat?.id}>
            <img
              className="chat__pic"
              src={chat.sender.userImage}
              alt={chat.sender.username}
            />
            <div className="chat__info">
              <h3>{chat.sender.username}</h3>
              <p>
                {chat.content} <span>{getTimePassed(chat.timestamp)}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
