import React from "react";
const messages = [
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "agod6as",
    message: "Lets goo",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE4Mzc1NzIvZjJhMzA0MmQtNWY1Yy00ZDUwLTk2MzktMWUxMTE4MmE4YjJhLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "geohde",
    message: "Better percentage than the alt art dialga lol",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE1NTY5NjEvMmI4YTVkODktYjM2My00ZDlmLWEzMjEtYzIxOTFmM2ExOGM0LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "bryzay520",
    message: "What was the deal for $30? Sorry I’m driving 😂",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE3NTExMDEvZmY0MWQwMmItZWYwMC00ZWQ0LWFhZGItNzgxNmNmMTI4YjVhLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "kittietorres",
    message: "joined 👋",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE0OTU5MDQvNmQyYzQ2ODktMzEzYy00M2UwLTg4OTMtNDY1ODMzYWQxMTliLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "dafunkyhomosapien1",
    message: "left",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE5ODY4NjUvODc2NzAxNDItZTI3ZC00YWUwLWI0MjEtMDVkYTI4OTQ3ZTUyLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "drewpatel123",
    message: "Yea I’m on here too much 😂",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzIyMDQwNjIvNmM4MTg4ODktODEwMC00NGRkLTg1NzQtOTA0MTJiY2Y4YWRhLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "shanemojo",
    message: "No bulk",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzIxNTE3MDgvYTFjNjc4YzAtYmYwOC00NzMzLTlhZDYtMDQxMmJhZjFmMzhkLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "kittietorres",
    message: "cool",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzIwODc1NTIvM2ZmZjNiY2QtZjVkNS00OTU3LTk5N2QtOTMxZjVmOTk5NTNjLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "dafunkyhomosapien1",
    message: "Left 2nd from the front",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE5NTcwMDkvM2UzOTIwYWItOWQyMC00NDRiLTg4MDctODg1MDY0MmU3NDlkLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "louskilla🎮",
    message: "Morning chat welcome in",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE4ODQwMTIvY2UxNjYxNDQtMWI0Zi00NGVhLWIxMWEtZGQ4ZDc4NmVkNDMxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "agod6as",
    message: "Lets goo",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE4ODQwMTIvY2UxNjYxNDQtMWI0Zi00NGVhLWIxMWEtZGQ4ZDc4NmVkNDMxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "agod6as",
    message: "Lets goo",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE4ODQwMTIvY2UxNjYxNDQtMWI0Zi00NGVhLWIxMWEtZGQ4ZDc4NmVkNDMxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "agod6as",
    message: "What was the deal for $30? Sorry I’m driving 😂",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE5OTUyMjIvYzIzOTZiNjgtMDVhNy00NjMwLTk0NmUtZTYxOWY5NzkwYTA3LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "kittietorres",
    message: "joined 👋",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE5NjU0NTIvMzkzMjJkYjctYWNjZS00OTE0LWI4YzktOGUxMTk3ZGE3YjFlLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "dafunkyhomosapien1",
    message: "left",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzIwODc1NTIvM2ZmZjNiY2QtZjVkNS00OTU3LTk5N2QtOTMxZjVmOTk5NTNjLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "drewpatel123",
    message: "Yea I’m on here too much 😂",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzk0Njc0Mi85NWE1MjgzOC03NzU4LTQ4Y2ItYjhlZC0yNzk5ZmU3NmVhNDkuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "shanemojo",
    message: "No bulk",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE3NjA3NjgvNTFkZWM3NDItNjg4Mi00NjU2LWIwYTMtY2Q2NjhhNzU2MWQ5LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19",
    name: "kittietorres",
    message: "cool",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzk0Njc0Mi85NWE1MjgzOC03NzU4LTQ4Y2ItYjhlZC0yNzk5ZmU3NmVhNDkuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "dafunkyhomosapien1",
    message: "Left 2nd from the front",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzgyOTE4Mi84NzIwYTk1Yy0yM2YzLTQ5YjQtYjhjZS0zNmU4OWM1OWU4NDcuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "louskilla🎮",
    message: "Morning chat welcome in",
  },
];
function JustChat() {
  return (
    <div className="justChat__div">
      <div className="chat__messages">
        {messages.map((message) => {
          return (
            <div key={message.name} className="individual__message__user">
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
          );
        })}
      </div>
      <div>
        <input
          className="chat__input"
          type="text"
          placeholder="Say something"
        />
      </div>
    </div>
  );
}

export default JustChat;
