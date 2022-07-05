import React from "react";
import LiveVideoUpperPart from "./LiveVideoUpperPart";

function LiveVideo() {
  return (
    <div className="liveVideo__div">
      <div className="background__video">
        <img
          src="https://res.cloudinary.com/proudposhak-com/image/upload/v1656932744/aestheticproject/livevideo_display_image_yhdcbt.jpg"
          alt="livevideo"
        />
      </div>
      <LiveVideoUpperPart></LiveVideoUpperPart>
    </div>
  );
}

export default LiveVideo;
