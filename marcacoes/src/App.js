import React, { useState } from "react";
import "./App.css";
import Consulta from "./componentes/Consulta";
import Container from "./componentes/Container";
import Form from "./componentes/Form";
import logo from "./Media/logo.png";
import RegForm from "./componentes/RegForm";

function App() {
  const [state, setstate] = useState({ data: "" });

  const Registar = () => {
    setstate({
      data: <RegForm />,
    });
  };
  const Marcar = () => {
    setstate({
      data: <Form />,
    });
  };
  const Consultar = () => {
    setstate({
      data: <Consulta />,
    });
  };

  return (
    <>
      <header>
        <div className="empresa">
          <img alt="Ana Saiago Massagens" src={logo} />
        </div>
        <nav>
          <button className="btn" onClick={Registar}>
            Registar
          </button>
          <button className="btn" onClick={Marcar}>
            Marcar
          </button>
          <button className="btn" onClick={Consultar}>
            Consultar
          </button>
          <button className="btn" onClick={Consultar}>
            Desmarcar
          </button>
          <button className="btn">Login</button>
          <button className="btn">Sair</button>
        </nav>
      </header>

      <Container data={state.data} />
    </>
  );
}

export default App;
