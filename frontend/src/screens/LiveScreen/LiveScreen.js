import React from "react";
import "../../styles/LiveScreen.css";
import AuctionProducts from "./AuctionProducts/AuctionProducts";
import Chat from "./Chat/Chat";
import LiveVideo from "./LiveVideo/LiveVideo";
function LiveScreen() {
  return (
    <div className="liveScreen">
      <AuctionProducts></AuctionProducts>
      <LiveVideo></LiveVideo>
      <Chat></Chat>
    </div>
  );
}

export default LiveScreen;
