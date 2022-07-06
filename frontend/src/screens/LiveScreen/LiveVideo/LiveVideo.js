import React from "react";
import LiveVideoLowerPart from "./LiveVideoLowerPart";
import LiveVideoUpperPart from "./LiveVideoUpperPart";

function LiveVideo() {
  return (
    <div className="liveVideo__div">
      <LiveVideoUpperPart></LiveVideoUpperPart>

      <div className="background__video">
        <LiveVideoLowerPart></LiveVideoLowerPart>
      </div>
    </div>
  );
}

export default LiveVideo;
