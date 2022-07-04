import React from "react";
import "../../styles/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
const navbarTitles = [
  { title: "Messages" },
  { title: "Lives" },
  { title: "Become a Seller" },
  {
    title: "Invite Friends",
    image: "https://www.whatnot.com/assets/b83dbbda.png",
  },
];
function NavbarPresentational() {
  return (
    <div className="navbar__presentational">
      <div className="navbar__firstPart">
        <img
          src="https://www.whatnot.com/assets/a634058c.png"
          alt="whatnot"
          className="logo__image"
          height="25px"
        />
      </div>
      <div className="navbar__secondPart">
        <div className="titles__div">
          {navbarTitles.map((title) => {
            return (
              <div className="individual__titles" key={title.title}>
                {title.image && (
                  <img src={title.image} alt={title} height="25px" />
                )}
                {title.title}
              </div>
            );
          })}
          <SearchIcon className="icon__style"></SearchIcon>
          <PersonIcon className="icon__style extra__border__toIcon"></PersonIcon>
        </div>
      </div>
    </div>
  );
}

export default NavbarPresentational;
