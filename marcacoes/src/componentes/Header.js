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
        <nav>
          <button className="btn">Registar</button>
          <button className="btn">Marcar</button>
          <button className="btn">Desmarcar</button>
          <button className="btn">Consultar</button>
          <button className="btn">Login</button>
          <button className="btn">Sair</button>
        </nav>
      </header>
    </>
  );
}

export default Header;
