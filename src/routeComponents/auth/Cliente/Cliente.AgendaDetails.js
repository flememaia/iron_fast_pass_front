import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import api from "../../../apis/api";

function ClienteAgendaDetails() {

  const [agendas, setAgendas] = useState({
    nameEstab: ""
  });
  
  const { id } = useParams();

  useEffect(() => {
    async function fetchAgenda() {
      try {
        const response = await api.get(`/client_agenda/${id}`); 
        console.log(response.data[0])
        setAgendas({ ...response.data[0] });
      } catch (err) {
        console.error(err);
      }
    }
    fetchAgenda();
  }, [id]);
// useEffect só vai disparar a callback fetchReserva quando o id for extraido do parâmetro de rota

console.log(agendas)

  return (
    <div className="container mt-5">
        <div className="form-group d-flex">
          <Link className="fas fa-angle-double-left pr-4" to="/profile_estab" />
        </div>
        <h1>AGENDA Específica</h1>
        <p>
          <strong> Estabelecimento: </strong>
            {agendas.nameEstab}
        </p>
        <p>
          <strong> Data: </strong>
            {agendas.data}
        </p>
        <p>
        <strong>Horario: </strong>
        {agendas.horario}
        </p>            
        <p>
          <strong>Evento: </strong>
          {agendas.evento}
        </p>
        <p>
          <strong>Atração: </strong>
          {agendas.atracao}
        </p>
        <p>
        <strong>Status: </strong>
         {agendas.status}
        </p>  
        <p>
        <strong>Limite de Mesas de 4 Pessoas: </strong>
         {agendas.limiteDeMesaDe4pessoas}
        </p>  
        <p>
        <strong>Promoção do Dia: </strong>
         {agendas.promocaoDoDia}
        </p> 
        <p>
        <strong>Taxa de Entrada: </strong>
         {agendas.taxa}
        </p> 
        <div className="form-group d-flex m-4 justify-content-between">
          <Link className="btn btn-primary" to={`/agenda/${agendas._id}/reserva`} >
            Fazer uma Reserva </Link>
        </div>
      </div>
  );
}

export default ClienteAgendaDetails;
