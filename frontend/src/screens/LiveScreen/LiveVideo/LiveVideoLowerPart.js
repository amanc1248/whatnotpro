import React from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
function LiveVideoLowerPart() {
  return (
    <div>
      <div className="liveVideo__lowerpart">
        <div className="lower__leftdiv">
          <div className="user__winning">
            <img
              src="https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzE1Mzg0MjUvN2I2ZDdiMmItNGNlNi00Y2UxLTllNTgtMjNmZjg2MGJjMmExLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI0LCJoZWlnaHQiOjI0LCJmaXQiOiJjb3ZlciIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19"
              alt="user"
              className="user__img"
            />
            <span className="username">deatheath27</span>
            <span className="iswinning_text">is winning!</span>
          </div>
          <div className="product__auction"> 2 Prizm hobby 1NT #3</div>
          <div className="shipping__and__tax__text">Shipping and Tax</div>
        </div>
        <div className="lower__rightdiv">
          <div className="volume__button">
            <VolumeUpIcon></VolumeUpIcon>
          </div>
          <div className="pay__button">
            <div className="pay__button__inner" style={{ color: "black" }}>
              $
            </div>
          </div>
          <div className="pay__text">Pay</div>
          <div className="auction__price">$210</div>
          <div className="time__reamaining">00:07</div>
        </div>
      </div>
      <div className="lower__part__buttons">
        <div className="custome__button">Custom</div>
        <div className="bid__button">Bid: $ 220</div>
      </div>
    </div>
  );
}

export default LiveVideoLowerPart;
