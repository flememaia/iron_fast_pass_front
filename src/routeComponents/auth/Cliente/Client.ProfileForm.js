import TextInput from "../../../components/TextInput";
import SelectInput from "../../../components/SelectInput";

function ClientProfileForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>

      <fieldset>
        <legend><strong>Informações Pessoais</strong></legend>
        {/* <TextInput
          label="Name"
          type="text"
          name="name"
          id="signupFormName"
          value={props.state.name}
          onChange={props.handleChange}
        /> */}

        {/* <TextInput
          label="E-mail:"
          type="email"
          name="email"
          id="signupFormEmail"
          value={props.state.email}
          onChange={props.handleChange}
        /> */}
      
      <TextInput
          label="Foto"
          type="file"
          name="foto"
          id="signupFormfoto"
          onChange={props.handleChange}
        />

      <TextInput
          label="Whatsapp:"
          type="number"
          name="telefone"
          id="signupFormTelefone"
          value={props.state.telefone}
          onChange={props.handleChange}
        />

        <TextInput
          label="Url Instagram:"
          type="text"
          name="instagramUrl"
          id="signupFormInstagramUrl"
          value={props.state.instagramUrl}
          onChange={props.handleChange}
        />

        <TextInput
          label="Documento"
          type= "documento"
          name="documento"
          id="signupFormDocumento"
          value={props.state.documento}
          onChange={props.handleChange}
        />
        <TextInput
          label="Data de Nascimento:"
          type= "date"
          name=" dataDeNascimento"
          id="signupFormDataDeNascimento"
          value={props.state.dataDeNascimento}
          onChange={props.handleChange}
        />

        <SelectInput
            label="Vibe do dia:"
            type="text"
            name="status"
            id="agendaFormStatus"
            value={props.state.status}
            onChange={props.handleChange}
            items={["Quero flertar", "Não Disponível", "Prefiro não comentar"]}
        />
        </fieldset>
        <hr/>

        <fieldset>
        <legend><strong>Endereço</strong></legend>
          <TextInput
          label="Rua/ Av:"
          type="text"
          name="rua"
          id="signupFormRua"
          value={props.state.rua}
          onChange={props.handleChange}
        />
        <TextInput
          label="N°:"
          type="number"
          name="numero"
          id="signupFormNumero"
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
          id="signupFormCidade"
          value={props.state.cidade}
          onChange={props.handleChange}
        />
        <TextInput
          label="Estado:"
          type="text"
          name="estado"
          id="signupFormEstado"
          value={props.state.estado}
          onChange={props.handleChange}
        />
        {/* <TextInput
          label="CEP:"
          type="number"
          name="cep"
          id="signupFormAdreessCEP"
          value={props.state.cep}
          onChange={props.handleChange}
        /> */}

        </fieldset>

        <hr/>
        
        <fieldset>
        <legend><strong>Informações Adicionais:</strong></legend>
        <SelectInput
            label="Forma de Pagamento:"
            type="text"
            name="formaDePagamento"
            id="agendaFormFormaDePagamento"
            value={props.state.formaDePagamento}
            onChange={props.handleChange}
            items={["Cartão", "Dinheiro", "PIX"]}
        />
        </fieldset>

      {props.error ? (
        <div className="alert alert-danger">{props.error}</div>
      ) : null}

      <div className="form-group">
        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default ClientProfileForm;