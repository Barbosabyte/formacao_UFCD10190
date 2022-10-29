import React from "react";
import "./Header.css";
import logo from "../Media/logo.png";

function Header() {
  return (
    <>
      <header>
        <div className="empresa">
          <img alt="Ana Saiago Massagens" src={logo} />
        </div>
      </header>
    </>
  );
}

export default Header;
