import React from "react";

function Form() {
  return (
    <>
      <form>
        <label className="nome">
          Nome: <input type="text" required />
        </label>
        <br />
        <label className="telefone">
          Telefone: <input type="tel" required />
        </label>
        <br />
        <label className="email">
          Email: <input type="email" />
        </label>
        <br />
        <label className="data">
          Data pretendida: <input type="date"></input>
        </label>
        <br />
        <label className="hora">
          Hora pretendida:{" "}
          <select>
            <option disabled selected value="">
              Escolha a hora
            </option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
          </select>
        </label>
        <br />
        <label className="terapia">
          Terapia pretendida:{" "}
          <select>
            <option disabled selected value="">
              Escolha a terapia
            </option>
            <option value="relaxante">Massagem Relaxante</option>
            <option value="californiana">Massagem Californiana</option>
            <option value="pedras">Massagem com Pedras Quentes</option>
            <option value="drenagem">Drenagem Linfática</option>
            <option value="reflex">Reflexologia</option>
            <option value="envolvimentos">Envolvimento Corporal</option>
            <option value="aromaterapia">Aromaterapia</option>
            <option value="reiki">Reiki</option>
            <option value="herbalismo">Aconselhamento por Herbalista</option>
          </select>
        </label>
        <br />
        <label className="enviar">
          <input type="submit" value="Marcar" />
        </label>
      </form>
    </>
  );
}

export default Form;
