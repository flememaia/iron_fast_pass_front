import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (

  <div className="container mt-5">
    <div className="form-group d-flex">
      <Link className="fas fa-angle-double-left pr-4" to="/" />
          <h1>PAG SIGNUP GERAL</h1>
    </div>
    <div className="text-center d-flex flex-column align-items-center">
      <br />
      <h3>
        <strong>Qual a Sua Escolha?</strong>
      </h3>
      <br />
      <div className="d-flex flex-column align-items-center">
        <Link
          className="btn btn-lg btn-primary pl-5 pr-5 mt-3 mb-2"
          to="/signup"
        >
          CLIENTE - Quer fugir <br />
          das filas?
        </Link>
        <h3>ou</h3>
        <Link
          className="btn btn-lg btn-primary p-2 mt-2"
          to="/signup_estab"
        >
          ESTAB - Quer oferecer <br />
          alternativa as filas?
        </Link>
        <Link className="btn btn-primary mt-4" to="/">
          Voltar
        </Link>
      </div>
    </div>
  </div>

  );
}

export default Home;
