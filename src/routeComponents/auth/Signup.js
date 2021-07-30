import React from "react";
import { Link } from "react-router-dom";
import SignupLogo from "../../img/logosignup.png";
import { Navbar } from "react-bootstrap";

function Home() {
  return (
    <div>
    <Navbar
      className="navbar sticky-top"
      bg="white"
      variant="white"
      expand="lg"
    >
      <img
        className="container d-flex"
        src={SignupLogo}
        style={{ height: "23%", width: "23%" }}
        alt="logo"
      />
    </Navbar>
    
    <div className="pag-fundo pt-4">
        <div className="container mt-5 " style={{ color: "#FFA900" }}>
          <div className="form-group d-flex">
            <Link
              className="fas fa-angle-double-left"
              style={{ color: "#FFFFFF" }}
              to="/"
            />
          </div>

          <div className="text-center d-flex flex-column align-items-center">
            <h3 className="text-white mb-5">
              <strong>Qual a Sua Escolha?</strong>
            </h3>
            <br />
            <br />
            
            <div className="d-flex flex-column align-items-center">
              <Link
                className="btn btn-lg btn-primary pl-5 pr-5 mt-3 mb-2"
                style={{ backgroundColor: "#FF7600" }}
                to="/signup"
              >
                Cliente <br />
              </Link>
              <h3 className="text-white">
                <br/>
              </h3>
              <Link
                className="btn btn-lg btn-primary p-2 mt-2"
                style={{ backgroundColor: "#FF7600" }}
                to="/signup_estab"
              >
                Estabelecimentos <br />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
