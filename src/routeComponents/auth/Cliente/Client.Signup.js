import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../apis/api";
import TextInput from "../../../components/TextInput";

function ClientSignUp(props) {
  const [state, setState] = useState({ 
    name: "", 
    password: "", 
    email: "",
    fotoUrl: "",
    rank: 5
  });
  const [errors, setError] = useState(null);
  
  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await api.post("/signup", state);
      setError(null);
      props.history.push("/login");
    } catch (err) {
      console.error(err.response);
      setError(err.response.data.error);
    }
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group d-flex">
          <Link className="fas fa-angle-double-left pr-4" to="/signupAll" />
          <h1>Cadastro CLIENTE</h1>
        </div>

        <TextInput
          label="Nome:"
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
          label="FotoUrl"
          type="text"
          name="fotoUrl"
          id="signupFormfotoUrl"
          value={state.fotoUrl}
          error={errors}
          onChange={handleChange}
        />

{errors ? <div className="alert alert-danger">{errors}</div> : null}

        <div className="form-group">
          <div className=" d-flex justify-content-between">
            <button className="btn btn-primary" type="submit">
              Cadastrar
            </button>
          </div>
          <br />
          <Link to="/login">
            Já tem uma conta? <br />
            Clique Aqui!
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ClientSignUp;
