import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";

function ReservaFormStatus(props) {
  return (
    <form onSubmit={props.handleSubmit}>
{/* 
        <TextInput
          label="Horário"
          type="text"
          name="horario"
          id="reservaFormHorario"
          value={props.state.horario}
          onChange={props.handleChange}
        />
        <TextInput
          label="Quantidade de Pessoas"
          type="number"
          name="quantidadeDePessoas"
          id="reservaFormQuantidadeDePessoas"
          value={props.state.quantidadeDePessoas}
          onChange={props.handleChange}
        /> */}

        <SelectInput
            label="Status da Agenda"
            type="text"
            name="status"
            id="agendaFormStatus"
            value={props.state.status}
            onChange={props.handleChange}
            items={["Aprovada", "Não Aprovada", "Usuário Compareceu - emitir Avaliação", 
            "Usuário Não Compareceu" ]}
        />

      {props.error ? (
        <div className="alert alert-danger">{props.error}</div>
      ) : null}

      <div className="form-group">
        <button className="btn btn-primary" type="submit" style={{backgroundColor: "#FFA900"}}>
          Enviar
        </button>
      </div>
    </form>
  );
}

export default ReservaFormStatus;