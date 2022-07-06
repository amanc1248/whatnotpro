import React, { useState } from "react";
import "../../../styles/Chat.css";
import AskQuestion from "./AskQuestion";
import JustChat from "./JustChat";
const tabsTitle = [{ title: "Chat" }, { title: "Ask Anything" }];
function Chat() {
  const [chatType, setChatType] = useState(0);
  const changeTab = (index) => {
    setChatType(index);
  };

  return (
    <div className="chat__div">
      <div className="chat__askanything__content">
        {chatType === 0 ? <JustChat></JustChat> : <AskQuestion></AskQuestion>}
      </div>
      <div className="chat__two__buttons">
        {tabsTitle.map((title, index) => {
          return (
            <div
              className={`chat__button ${
                chatType === index && "active__chat__button"
              }`}
              onClick={() => {
                changeTab(index);
              }}
            >
              {title.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Chat;
