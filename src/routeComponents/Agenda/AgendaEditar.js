import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AgendaForm from "./AgendaForm";

import api from "../../apis/api";

function AgendaEditar(props){

  const [agenda, setAgenda] = useState({
    evento: "",
    atracao: "",
    data: "",
    horario: "",
    limiteDeMesaDe4pessoas: "",
    promocaoDoDia: "",
    taxa: "",
    status: "Ativa"
  });

  const { id } = useParams();

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

console.log(agenda)

  const [errors, setError] = useState(null);

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
    props.history.push("/profile_estab");
  } catch (err) {
    console.error(err.response);
    setError(err.response.data.error);
  }
}
  
  return (
  <div>
    <div className="container mt-5">
        <div className="form-group d-flex">
          <Link className="fas fa-angle-double-left pr-4" to="/profile_estab" />
          <h1>Editar Agenda</h1>
        </div>
        {/* <h4>{agenda.nameEstab}</h4> */}
      <AgendaForm
        state={agenda} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        error={errors}
      />
    </div>
  </div>
  );
}

export default AgendaEditar
