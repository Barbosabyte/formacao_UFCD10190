import logo from "./logo.svg";
import "./App.css";
import Media from "./Media";
import Header from "./componentes/Header.js";
import Form from "./componentes/Form.js";

function App() {
  return (
    <>
      <Header title="Ana Saiago Massagens" bgcolor="rgba(0,0,0,4)" />
      <h1>Marcações</h1>
      <Form />
    </>
  );
}

export default App;
