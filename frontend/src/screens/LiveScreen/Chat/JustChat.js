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
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "agod6as",
    message: "Lets goo",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "agod6as",
    message: "What was the deal for $30? Sorry I’m driving 😂",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "kittietorres",
    message: "joined 👋",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "dafunkyhomosapien1",
    message: "left",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "drewpatel123",
    message: "Yea I’m on here too much 😂",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "shanemojo",
    message: "No bulk",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "kittietorres",
    message: "cool",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "dafunkyhomosapien1",
    message: "Left 2nd from the front",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "louskilla🎮",
    message: "Morning chat welcome in",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "agod6as",
    message: "Lets goo",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "agod6as",
    message: "Lets goo",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "agod6as",
    message: "What was the deal for $30? Sorry I’m driving 😂",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "kittietorres",
    message: "joined 👋",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "dafunkyhomosapien1",
    message: "left",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "drewpatel123",
    message: "Yea I’m on here too much 😂",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "shanemojo",
    message: "No bulk",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "kittietorres",
    message: "cool",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    name: "dafunkyhomosapien1",
    message: "Left 2nd from the front",
  },
  {
    image:
      "https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzU1Mzg1NS9iNjE5ODRiOS1lMmM2LTQwMWMtYWY3NC05MDg3NDliMGY2N2IuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
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
            <div key={message.name} className="individual__message">
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
      <div className="chat__input">
        <input type="text" />
      </div>
    </div>
  );
}

export default JustChat;
