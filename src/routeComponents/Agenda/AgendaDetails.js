import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import api from "../../apis/api";

function AgendaDetails() {

  const [agendas, setAgendas] = useState([]);
  
  const { id } = useParams();

  useEffect(() => {
    async function fetchAgenda() {
      try {
        const response = await api.get(`/agenda/${id}`); 
        console.log(response.data)
        setAgendas({ ...response.data });
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
        <Link className="btn btn-primary" to={`/agenda/${agendas._id}/editar`}>
          Editar
        </Link> 
        <br></br>   
        <br></br>                  
        <Link className="btn btn-primary" to={`/agenda/${agendas._id}/cancelar`}>
          Cancelar
        </Link>            
      </div>
  );
}

export default AgendaDetails;
