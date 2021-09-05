import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="larger" />
      </IconButton>
      <WhatshotIcon className="header__logo" fontSize="larger" />
      <IconButton>
        <ForumIcon className="header__icon" fontSize="larger" />
      </IconButton>
    </div>
  );
}

export default Header;
