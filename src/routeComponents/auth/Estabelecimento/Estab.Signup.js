import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../apis/api";
import TextInput from "../../../components/TextInput";

function EstabSignUp (props) {
  const [state, setState] = useState({ 
    name: "", 
    password: "", 
    email: "",
    fotoUrl: "",
    telefone: 0,
    redeSocialUrl: "",
    rua: "",
    bairro: "",
    cidade: "",
    numero: 0,
    estado: "",
    cep: 0,
    localizacaoUrl: "",
    rank: 5,
    cnpj: 0,
    horarioDeFuncionamento: "",
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
      await api.post("/signup_estab", state);
      setError(null);
      props.history.push("/login_estab");
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
          <h1>Cadastro Estabelecimento!</h1>
        </div>

        <TextInput
          label="Estabelecimento:"
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
          label="Número de Telefone:"
          type="number"
          name="telefone"
          id="signupFormTelefone"
          value={state.telefone}
          e error={errors}
          onChange={handleChange}
        />

        <TextInput
          label="Url Rede Social:"
          type="text"
          name="redeSocialUrl"
          id="signupFormRedeSocialUrl"
          value={state.redeSocialUrl}
          error={errors}
          onChange={handleChange}
        />
        <fieldset>
          <legend>Endereço</legend>
          <TextInput
          label="Rua:"
          type="text"
          name="rua"
          id="signupFormAdreessStreet"
          value={state.rua}
          error={errors}
          onChange={handleChange}
        />
        <TextInput
          label="N°:"
          type="number"
          name="numero"
          id="signupFormAdreessNumber"
          value={state.numero}
          error={errors}
          onChange={handleChange}
        />
        <TextInput
          label="Bairro:"
          type="text"
          name="bairro"
          id="signupFormAdreessBairro"
          value={state.bairro}
          error={errors}
          onChange={handleChange}
        />
        <TextInput
          label="Cidade:"
          type="text"
          name="cidade"
          id="signupFormAdreessCidade"
          value={state.cidade}
          error={errors}
          onChange={handleChange}
        />
        <TextInput
          label="Estado:"
          type="text"
          name="estado"
          id="signupFormAdreessEstado"
          value={state.estado}
          error={errors}
          onChange={handleChange}
        />
        <TextInput
          label="CEP:"
          type="number"
          name="cep"
          id="signupFormAdreessCEP"
          value={state.cep}
          error={errors}
          onChange={handleChange}
        />
        <TextInput
          label="Url Localização:"
          type="text"
          name="localizaçãoUrl"
          id="signupFormAdreesslocalizaçãoUrl"
          value={state.localizaçãoUrl}
          error={errors}
          onChange={handleChange}
        />
        
        </fieldset>
        <TextInput
          label="CNPJ:"
          type= "number"
          name="cnpj"
          id="signupFormCnpj"
          value={state.cnpj}
          error={errors}
          onChange={handleChange}
        />
        <TextInput
          label="Horário de Funcionamento:"
          type= "text"
          name="horarioDeFuncionamento"
          id="signupFormHorarioDeFuncionamento"
          value={state.horarioDeFuncionamento}
          error={errors}
          onChange={handleChange}
        />

{/* fotoUrl: "", // Galeria de Fotos => colocar várias como? */}
{errors ? <div className="alert alert-danger">{errors}</div> : null}

        <div className="form-group">
          <div className=" d-flex justify-content-between">
            <button className="btn btn-primary" type="submit">
              Cadastrar
            </button>
          </div>
          <br />
          <Link to="/login_estab">
            Já tem uma conta? <br />
            Clique Aqui!
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EstabSignUp;
