import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflix logo"
        className="nav__logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar img"
        className="nav__avatar"
      />
    </div>
  );
}
