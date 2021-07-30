import TextInput from "../../../components/TextInput";

function EstabProfileForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <fieldset>
        <legend><strong>Dados Gerais</strong></legend>
        {/* <TextInput
          label="Estabelecimento:"
          type="text"
          name="name"
          id="signupFormName"
          value={props.state.name}
          onChange={props.handleChange}
        />

        <TextInput
          label="E-mail:"
          type="email"
          name="email"
          id="signupFormEmail"
          value={props.state.email}
          onChange={props.handleChange}
        /> */}
        <TextInput
          label="CNPJ:"
          type= "number"
          name="cnpj"
          id="signupFormCnpj"
          value={props.state.cnpj}
          onChange={props.handleChange}
        />
        <TextInput
          label="Horário de Funcionamento:"
          type= "text"
          name="horarioDeFuncionamento"
          id="signupFormHorarioDeFuncionamento"
          value={props.state.horarioDeFuncionamento}
          onChange={props.handleChange}
        />
        {/* <TextInput
          label="Foto"
          type="file"
          name="foto"
          id="signupFormfoto"
          onChange={props.handleChange}
        /> */}

        <TextInput
          label="Número de Telefone:"
          type="number"
          name="telefone"
          id="signupFormTelefone"
          value={props.state.telefone}
          onChange={props.handleChange}
        />

        <TextInput
          label="Url Rede Social:"
          type="text"
          name="redeSocialUrl"
          id="signupFormRedeSocialUrl"
          value={props.state.redeSocialUrl}
          onChange={props.handleChange}
        />
        </fieldset>
        <hr/>
        <fieldset>
          <legend>Endereço</legend>
          <TextInput
          label="Rua/ Av:"
          type="text"
          name="rua"
          id="signupFormAdreessStreet"
          value={props.state.rua}
          onChange={props.handleChange}
        />
        <TextInput
          label="N°:"
          type="number"
          name="numero"
          id="signupFormAdreessNumber"
          value={props.state.numero}
          onChange={props.handleChange}
        />
        <TextInput
          label="Bairro:"
          type="text"
          name="bairro"
          id="signupFormAdreessBairro"
          value={props.state.bairro}
          onChange={props.handleChange}
        />
        <TextInput
          label="Cidade:"
          type="text"
          name="cidade"
          id="signupFormAdreessCidade"
          value={props.state.cidade}
          onChange={props.handleChange}
        />
        <TextInput
          label="Estado:"
          type="text"
          name="estado"
          id="signupFormAdreessEstado"
          value={props.state.estado}
          onChange={props.handleChange}
        />
        <TextInput
          label="CEP:"
          type="number"
          name="cep"
          id="signupFormAdreessCEP"
          value={props.state.cep}
          onChange={props.handleChange}
        />
        <TextInput
          label="Url Localização:"
          type="text"
          name="localizaçãoUrl"
          id="signupFormAdreesslocalizaçãoUrl"
          value={props.state.localizaçãoUrl}
          onChange={props.handleChange}
        />
        </fieldset>

      {props.error ? (
        <div className="alert alert-danger">{props.error}</div>
      ) : null}

      <div className="form-group">
        <button
          className="btn text-white"
          style={{ backgroundColor: "#FF7600" }}
          type="submit"
        >Enviar</button>
      </div>
    </form>
  );
}

export default EstabProfileForm;