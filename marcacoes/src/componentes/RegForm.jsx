import React from "react";
import "./RegForm.css";
function RegForm() {
  return (
    <>
      <h1>Registo de Utilizador</h1>
      <div className="formBody">
        <form>
          <label className="nome">
            Nome: <input type="text" required />
          </label>
          <label className="telefone">
            Telefone: <input type="tel" required />
          </label>
          <label className="email">
            Email: <input type="email" />
          </label>
          <label className="pass">
            Password: <input type="password" />
          </label>
          <label className="passConf">
            Repita a Password: <input type="password" />
          </label>
          <label className="registar">
            <input className="btn" type="submit" value="Registar" />
          </label>
        </form>
      </div>
    </>
  );
}

export default RegForm;
