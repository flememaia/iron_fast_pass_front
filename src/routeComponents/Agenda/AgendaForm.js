import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";

function AgendaForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div style={{ fontSize: 16 }}>
        <strong>
        {/* <TextInput
          label="Estabelecimento"
          type="text"
          name="nameEstab"
          id="nameEstab"
          value={props.state.nameEstab}
          onChange={props.handleChange}
        /> */}

        <TextInput
          label="Evento"
          type="text"
          name="evento"
          id="agendaFormEvento"
          value={props.state.evento}
          onChange={props.handleChange}
        />

        <TextInput
          label="Atração"
          type="text"
          name="atracao"
          id="agendaFormAtracao"
          value={props.state.atracao}
          onChange={props.handleChange}
        />

        <TextInput
          label="Data"
          type="date"
          name="data"
          id="agendaFormData"
          value={props.state.data}
          onChange={props.handleChange}
        />

        <TextInput
          label="Horário"
          type="text"
          name="horario"
          id="agendaFormHorario"
          value={props.state.horario}
          onChange={props.handleChange}
        />

        <TextInput
          label="Limite De Mesa De 4 pessoas"
          type="number"
          name="limiteDeMesaDe4pessoas"
          id="agendaFormLimiteDeMesaDe4pessoas"
          value={props.state.limiteDeMesaDe4pessoas}
          onChange={props.handleChange}
        />

        <TextInput
          label="Promoção Do Dia"
          type="text"
          name="promocaoDoDia"
          id="agendaFormPromocaoDoDia"
          value={props.state.promocaoDoDia}
          onChange={props.handleChange}
        />

        <TextInput
            label="Taxa"
            type="text"
            name="taxa"
            id="agendaFormTaxa"
            value={props.state.taxa}
            onChange={props.handleChange}
        />
      
        <SelectInput
            label="Status da Agenda"
            type="text"
            name="status"
            id="agendaFormStatus"
            value={props.state.status}
            onChange={props.handleChange}
            items={["Ativa", "Não Ativa"]}
        />
        </strong>
      </div>

      {props.error ? (
        <div className="alert alert-danger">{props.error}</div>
      ) : null}

      <div className="form-group">
        <button
          className="btn text-white"
          style={{ backgroundColor: "#FF7600" }}
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

export default AgendaForm;