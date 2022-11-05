import "./App.css";
import Header from "./componentes/Header.js";
import Form from "./componentes/Form.js";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Marcações</h1>
        <Form />
      </div>
    </>
  );
}

export default App;
