import React from "react";

function LiveVideoUpperPart() {
  return (
    <div className="liveVideo__upperpart">
      <div className="user__details__div">
        {/* user details */}
        <div className="userimg__name">
          <img
            src="https://images.whatnot.com/eyJidWNrZXQiOiJ3aGF0bm90LWltYWdlcyIsImtleSI6InVzZXJzLzQwNzU0MC9mYTczYTE4MS00NGNkLTRlOWEtOGIxMy02ZTZiNDRiN2JlNmQuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjQsImhlaWdodCI6MjQsImZpdCI6ImNvdmVyIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0="
            alt="user"
            className="user__image"
          />
          <div className="user_name">thirdeyecards</div>
        </div>
        {/* ratings */}
        <div className="ratings__div">
          * 4.9 <span className="rating__text">3,124 Ratings</span>
        </div>
        {/* followers */}
        <div className="followers__div">10,692 Followers</div>
        <div className="follow__button">Follow</div>
      </div>
      <div className="share__video__div">
        <div className="share__video__firstpart">
          <div className="livestreamers">
            <img
              src="https://www.whatnot.com/assets/a3d9fdd7.svg"
              alt="livestreams"
              height="20px"
            />
            <div className="numberof__livestreamers">210</div>
          </div>
          <div className="share__video__link">whatnot.com/live/eb6...</div>
          <div className="copy__button">Copy</div>
        </div>
        <div className="share__video__secondpart">secondpart</div>
      </div>
    </div>
  );
}

export default LiveVideoUpperPart;
