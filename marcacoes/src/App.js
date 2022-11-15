import React, { useState } from "react";
import "./App.css";
import Consulta from "./componentes/Consulta";
import Container from "./componentes/Container";
import Form from "./componentes/Form";
import logo from "./Media/logo.png";
import RegForm from "./componentes/RegForm";

function App() {
  const Registar = () => {
    setstate({
      data: <RegForm />,
      navData: notLogged,
    });
  };
  const MarcarNoLogin = () => {
    setstate({
      data: <Form />,
      navData: notLogged,
    });
  };
  const Marcar = () => {
    setstate({
      data: <Form />,
      navData: logged,
    });
  };
  const Consultar = () => {
    setstate({
      data: <Consulta />,
      navData: logged,
    });
  };
  const Sair = () => {
    setstate({
      data: <Form />,
      navData: notLogged,
    });
  };
  const logged = (
    <>
      <button className="btn" onClick={Marcar}>
        Marcar
      </button>
      <button className="btn" onClick={Consultar}>
        Consultar
      </button>
      <button className="btn" onClick={Consultar}>
        Desmarcar
      </button>
      <button className="btn" onClick={Sair}>
        Sair
      </button>
    </>
  );

  const Entrar = () => {
    setstate({
      data: <Form />,
      navData: logged,
    });
  };

  const notLogged = (
    <>
      <button className="btn" onClick={MarcarNoLogin}>
        Marcar
      </button>
      <button className="btn" onClick={Entrar}>
        Entrar
      </button>

      <button className="btn" onClick={Registar}>
        Registar
      </button>
    </>
  );

  const [state, setstate] = useState({
    data: <Form />,
    navData: notLogged,
  });

  function Nav(props) {
    return (
      <>
        <nav>{props.navData}</nav>
      </>
    );
  }

  return (
    <>
      <header>
        <div className="empresa">
          <img alt="Ana Saiago Massagens" src={logo} />
        </div>
        <Nav navData={state.navData} />
      </header>

      <Container data={state.data} />
    </>
  );
}

export default App;
