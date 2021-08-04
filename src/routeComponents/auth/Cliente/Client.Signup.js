import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../apis/api";
import TextInput from "../../../components/TextInput";
import SignupLogo from "../../../img/logosignup.png";
import { Navbar } from "react-bootstrap";

function ClientSignUp(props) {
  const [state, setState] = useState({
    name: "",
    password: "",
    email: "",
    foto: "",
    rank: 5,
  });
  const [errors, setError] = useState(null);

  function handleChange(event) {
    if (event.target.files) {
      return setState({
        ...state,
        [event.currentTarget.name]: event.currentTarget.files[0],
      });
    }
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }
  console.log(state);

  //file = state.foto
  async function handleFileUpload(file) {
    const uploadData = new FormData();

    uploadData.append("foto", file);

    const response = await api.post("/upload", uploadData);

    return response.data.url;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const fotoUrl = await handleFileUpload(state.foto);

    try {
      await api.post("/signup", {
        ...state,
        fotoUrl,
      });
      setError(null);
      props.history.push("/login");
    } catch (err) {
      console.error(err.response);
      setError(err.response.data.error);
    }
  }

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
        <div className="container mt-5" style={{ color: "#FFA900" }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group d-flex">
              <Link
                className="fas fa-angle-double-left pr-4"
                style={{ color: "#FFFFFF" }}
                to="/signupAll"
              />
              <h1>
                <strong>Cadastro Usuário!</strong>
              </h1>
            </div>
            <div style={{ fontSize: 17 }}>
              <strong>
                <TextInput
                  label="Name:"
                  type="text"
                  name="name"
                  id="signupFormName"
                  value={state.name}
                  error={errors}
                  onChange={handleChange}
                />

                <TextInput
                  label="E-mail:"
                  type="email"
                  name="email"
                  id="signupFormEmail"
                  value={state.email}
                  error={errors}
                  onChange={handleChange}
                />

                <TextInput
                  label="Senha:"
                  type="password"
                  name="password"
                  id="signupFormPassword"
                  value={state.password}
                  error={errors}
                  onChange={handleChange}
                />

                <TextInput
                  label="Foto:"
                  type="file"
                  name="foto"
                  id="signupFormfoto"
                  error={errors}
                  onChange={handleChange}
                />
              </strong>
            </div>

            {errors ? <div className="alert alert-danger">{errors}</div> : null}

            <div className="form-group">
              <div className=" d-flex justify-content-between">
                <button
                  className="btn text-white"
                  style={{ backgroundColor: "#FF7600" }}
                  type="submit"
                >
                  Cadastrar
                </button>
              </div>

              <br />
              <p style={{ color: "#FFA900" }}>
                Já tem uma conta? <br />
                <Link className="text-white" to="/login">
                  Clique Aqui!
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClientSignUp;
