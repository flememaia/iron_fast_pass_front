import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import api from "../../apis/api";

function AgendaDetails() {

  const [agendas, setAgendas] = useState([]);
  
  const { id } = useParams();

  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    async function fetchAgenda() {
      try {
        const response = await api.get(`/agenda/${id}`); 
        console.log(response.data)
        setAgendas({ ...response.data });

        const reservas = await api.get("/reserva");
        console.log(reservas.data)
        setReservas({ ...reservas.data });

      } catch (err) {
        console.error(err);
      }
    }
    fetchAgenda();
  }, [id]);
// useEffect só vai disparar a callback fetchReserva quando o id for extraido do parâmetro de rota

console.log(agendas)
console.log(reservas)

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
          <Link className="fas fa-edit fa-2x" to={`/agenda/${agendas._id}/editar`} />
          <Link className="fas fa-trash-alt fa-2x" to={`/agenda/${agendas._id}/cancelar`} />
        </div>
        <br></br>   
        {/* NÃO TO CONSEGUINDO PEGAR AS RESERVAS DESSA AGENDA
        <h1>Reservas </h1> */}
      </div>
  );
}

export default AgendaDetails;
