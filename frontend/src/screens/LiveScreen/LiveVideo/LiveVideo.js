import React from "react";
import LiveVideoLowerPart from "./LiveVideoLowerPart";
import LiveVideoUpperPart from "./LiveVideoUpperPart";

function LiveVideo() {
  return (
    <div className="liveVideo__div">
      <div className="background__video">
        <img
          src="https://res.cloudinary.com/proudposhak-com/image/upload/v1656932744/aestheticproject/livevideo_display_image_yhdcbt.jpg"
          alt="livevideo"
          width="350px"
        />
      </div>
      <LiveVideoUpperPart></LiveVideoUpperPart>
      <LiveVideoLowerPart></LiveVideoLowerPart>
    </div>
  );
}

export default LiveVideo;
