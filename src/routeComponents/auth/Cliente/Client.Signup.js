import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../apis/api";
import TextInput from "../../../components/TextInput";

function ClientSignUp(props) {
  const [state, setState] = useState({ 
    name: "", 
    password: "", 
    email: "",
    foto:'',
    rank: 5
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
console.log(state)

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
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group d-flex">
          <Link className="fas fa-angle-double-left pr-4" to="/signupAll" />
          <h1>Cadastro CLIENTE</h1>
        </div>

        <TextInput
          label="Name"
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
          label="Foto"
          type="file"
          name="foto"
          id="signupFormfoto"
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
