import React from "react";
import BemVindo from "../img/bem-vindo.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center d-flex flex-column align-items-center ">
      <div src={BemVindo} alt="logo" />
      <h3 className="mt-5 mb-5">
        <strong>noLines</strong>
      </h3>
      <div className="d-flex flex-column align-items-center">
        <Link
          className="btn btn-lg btn-primary pl-5 pr-5 pt-3 pb-3 mb-2"
          to="/login"
        >
          Sou <br />
          Cliente
        </Link>
        <h3>ou</h3>
        <Link
          className="btn btn-lg btn-primary pl-2 pr-2 pt-3 pb-3 mt-2 mb-4"
          to="/login_estab"
        >
          Tenho <br />
          Estabelecimento
        </Link>

        <p>
          Ainda não está <br />
          cadastrado? <br />
          <Link to="/signupAll">Registre-se</Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
