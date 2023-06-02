import React from "react";
import Logo from "../../assets/images/logo.png";
import UserImage from "../../assets/images/user-image.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <img className="logo" src={Logo} alt="logo" />
        <div className="user">
          <div>
            <p className="user-label">Handcrafted by</p>
            <p className="username">Jim HLS</p>
          </div>
          <img className="user-logo" src={UserImage} alt="user-logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
