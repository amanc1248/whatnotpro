import React, { useState } from "react";
import "../../../styles/Chat.css";
import AskQuestion from "./AskQuestion";
import JustChat from "./JustChat";
function Chat() {
  const [chatType, setChatType] = useState(0);
  const changeToChat = () => {
    setChatType(0);
  };
  const changeToAskAnything = () => {
    setChatType(1);
  };
  return (
    <div className="chat__div">
      <div className="chat__askanything__content">
        {chatType === 0 ? <JustChat></JustChat> : <AskQuestion></AskQuestion>}
      </div>
      <div className="chat__two__buttons">
        <div className="chat__button" onClick={changeToChat}>
          Chat
        </div>
        <div className="askAnything__button" onClick={changeToAskAnything}>
          Ask Anything
        </div>
      </div>
    </div>
  );
}

export default Chat;
