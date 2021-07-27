import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../../../apis/api";
import TextInput from "../../../components/TextInput";
import { AuthContext } from "../../../contexts/authContext";

function EstabLogin(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/login_estab", state);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });
      props.history.push("/profile_estab");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <h1>Login Estabelecimento</h1>

        <TextInput
          label="E-mail:"
          type="email"
          name="email"
          id="signupFormEmail"
          value={state.email}
          error={errors.email}
          onChange={handleChange}
        />
        <TextInput
          label="Senha:"
          type="password"
          name="password"
          id="signupFormPassword"
          value={state.password}
          error={errors.password}
          onChange={handleChange}
        />
        <div className="form-group">
          <div className=" d-flex justify-content-between">
            <Link className="btn btn-primary" to="/">
              Voltar
            </Link>
            <div className=" d-flex justify-content-between">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </div>
          <br />

          <Link to="/signup_estab">
            Ainda não tenho uma conta? <br />
            Clique Aqui!
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EstabLogin;
