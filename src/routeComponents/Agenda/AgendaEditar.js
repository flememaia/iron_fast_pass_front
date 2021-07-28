import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import TextInput from "../../components/TextInput";

import api from "../../apis/api";

function AgendaEditar(){
  const [agenda, setAgenda] = useState({
    data: "",
    horario: "",
    evento: "",
    atracao: "",
    status: "",
    limiteDeMesaDe4pessoas: 0,
    promocaoDoDia: "",
    taxa:0
  });
  
  const { id } = useParams();

  const [errors, setError] = useState(null);

  useEffect(() => {
    async function fetchAgenda() {
      try {
        const response = await api.get(`/agenda/${id}`); 
        console.log(response.data)
        setAgenda({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchAgenda();
  }, [id]);

  // useEffect só vai disparar a callback fetchReserva quando o id for extraido do parâmetro de rota

  function handleChange(event) {
    setAgenda({
      ...agenda,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
  event.preventDefault();

  try {
    const response = await api.put(`/agenda/${id}`, agenda);
    console.log(response.data)

  } catch (err) {
    console.error(err.response);
    setError(err.response.data.error);
  }
  
  return (
  <div>
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group d-flex">
          <Link className="fas fa-angle-double-left pr-4" to="/profile_estab" />
          <h1>Editar Agenda</h1>
        </div>

        <TextInput
          label="Data:"
          type="date"
          name="data"
          id="signupFormData"
          value={agenda.data}
          error={errors}
          onChange={handleChange}
        />
        <TextInput
          label="Horário:"
          type="text"
          name="horario"
          id="signupFormHorario"
          value={agenda.horario}
          error={errors}
          onChange={handleChange}
        />
        <TextInput
        label="Evento:"
        type="text"
        name="evento"
        id="signupFormEvento"
        value={agenda.evento}
        error={errors}
        onChange={handleChange}
      />
      <TextInput
        label="Atracao:"
        type="text"
        name="atracao"
        id="signupFormAtracao"
        value={agenda.atracao}
        error={errors}
        onChange={handleChange}
      />
      <TextInput
        label="Status:"
        type="text"
        name="status"
        id="signupFormStatus"
        value={agenda.status}
        error={errors}
        onChange={handleChange}
      />
      <TextInput
        label="Limite de Mesa de 4 Pessoas:"
        type="number"
        name="limiteDeMesaDe4pessoas"
        id="signupFormlimiteDeMesaDe4pessoas"
        value={agenda.limiteDeMesaDe4pessoas}
        error={errors}
        onChange={handleChange}
      />
      <TextInput
        label="Promocao do Dia:"
        type="text"
        name="promocaoDoDia"
        id="signupFormPromocaoDoDia"
        value={agenda.promocaoDoDia}
        error={errors}
        onChange={handleChange}
      />
      <TextInput
        label="Taxa de Entrada:"
        type="number"
        name="taxa"
        id="signupFormTaxa"
        value={agenda.taxa}
        error={errors}
        onChange={handleChange}
      />

        <div className="form-group">
          <div className=" d-flex justify-content-between">
            <button className="btn btn-primary" type="submit">
              Editar Agenda
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
}
}
export default AgendaEditar
