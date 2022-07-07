import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
const messages = [
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE0OTU5MDQvNmQyYzQ2ODktMzEzYy00M2UwLTg4OTMtNDY1ODMzYWQxMTliLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "dafunkyhomosapien1",
    message: "We need the XL size",
    likeCount: 12,
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE5ODY4NjUvODc2NzAxNDItZTI3ZC00YWUwLWI0MjEtMDVkYTI4OTQ3ZTUyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "drewpatel123",
    message: "How many times do you go live in a day?",
    likeCount: 11,
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzIyMDQwNjIvNmM4MTg4ODktODEwMC00NGRkLTg1NzQtOTA0MTJiY2Y4YWRhLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "shanemojo",
    message: "Do you have Elon Mush printed XL T-shirts?",
    likeCount: 8,
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzIxNTE3MDgvYTFjNjc4YzAtYmYwOC00NzMzLTlhZDYtMDQxMmJhZjFmMzhkLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "kittietorres",
    message: "Need small size plain black T-shirt?",
    likeCount: 5,
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzIwODc1NTIvM2ZmZjNiY2QtZjVkNS00OTU3LTk5N2QtOTMxZjVmOTk5NTNjLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "dafunkyhomosapien1",
    message: "Go with the right one, highly needed",
    likeCount: 4,
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE5NTcwMDkvM2UzOTIwYWItOWQyMC00NDRiLTg4MDctODg1MDY0MmU3NDlkLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "louskilla🎮",
    message: "Need you website link",
    likeCount: 3,
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE4ODQwMTIvY2UxNjYxNDQtMWI0Zi00NGVhLWIxMWEtZGQ4ZDc4NmVkNDMxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "agod6as",
    message: "Lets get started bro",
    likeCount: 2,
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE4ODQwMTIvY2UxNjYxNDQtMWI0Zi00NGVhLWIxMWEtZGQ4ZDc4NmVkNDMxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "agod6as",
    message: "Are you coming live tonight?",
    likeCount: 2,
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE4ODQwMTIvY2UxNjYxNDQtMWI0Zi00NGVhLWIxMWEtZGQ4ZDc4NmVkNDMxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "agod6as",
    message: "What was the deal for $30?",
    likeCount: 2,
  },

  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "agod6as",
    message: "Are you up tonight?",
    likeCount: 1,
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE4Mzc1NzIvZjJhMzA0MmQtNWY1Yy00ZDUwLTk2MzktMWUxMTE4MmE4YjJhLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "geohde",
    message: "Better percentage than the alt art dialga lol",
    likeCount: 1,
  },
];
function AskQuestion() {
  return (
    <div className="justChat__div">
      <div className="chat__messages">
        {messages.map((message) => {
          return (
            <div key={message.name} className="individual__message">
              <div className="individual__message__user">
                <img
                  src={message.image}
                  alt={message.name}
                  className="username__image"
                />
                <div className="name__and__message">
                  <span className="username__name">{message.name}</span>
                  <span className="user__message">{message.message}</span>
                </div>
              </div>
              <div className="question__likes">
                <ThumbUpIcon className="thumps__up__icon"></ThumbUpIcon>
                <span className="likeCount"> {message.likeCount} </span>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <input
          className="chat__input"
          type="text"
          placeholder="Ask something"
        />
      </div>
    </div>
  );
}

export default AskQuestion;
