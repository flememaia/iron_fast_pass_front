import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/index.css";
import LogoHome from "../img/logohome.png";

function SignUp() {
  return (
    <div className="pag-fundo pt-4">
      <div
        className="text-center d-flex flex-column align-items-center "
        style={{ color: "#FFFFFF" }}
      >
        <h3 className="mt-3 mb-5">
          <img
            src={LogoHome}
            style={{ height: "62%", width: "62%"}}
            alt="logo"
          />
        </h3>
        <div className="d-flex flex-column align-items-center">
          <Link
            className="btn btn-lg btn-primary pt-2Z pl-5 pr-5 pb-3 mt-4 mb-2"
            style={{ backgroundColor: "#FF7600" }}
            to="/login"
          >

            Cliente
          </Link>
          <br/>
          <Link
            className="btn btn-lg btn-primary pl-2 pr-2 pt-3 pb-3 mt-2 mb-4"
            style={{ backgroundColor: "#FF7600" }}
            to="/login_estab"
          >
            Estabelecimento
          </Link>

          <p style={{ color: "#FFA900" }}>
            Ainda não está <br />
            cadastrado? <br />
            <Link className="text-white" to="/signupAll">
              Registre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
