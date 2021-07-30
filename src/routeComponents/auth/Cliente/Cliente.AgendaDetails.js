import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LogoFixa from "../../../img/logo.png"
import { Navbar } from "react-bootstrap";
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
    <div>
    <Navbar
  className="navbar sticky-top"
  bg="white"
  variant="white"
  expand="lg"
>
  <Link to="/profile_estab">
    <img
      className="pl-2 d-flex justify-content-start"
      src={LogoFixa}
      style={{ height: "30%", width: "30%" }}
      alt="logo"
    />
  </Link>
</Navbar>

<div className="pag-fundo pt-4">
        <div className="container mt-5" style={{ color: "#FFA900" }}>
        <div className="form-group d-flex pb-3">
          <Link  
          className="fas fa-angle-double-left pr-4"
          style={{ color: "#FFFFFF" }}to="/profile_estab" />
        </div>
        <h1 className="pb-4"><strong>Agenda Específica</strong></h1>
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
        <div className="form-group d-flex pt-5 jusd-flex justify-content-center">
          <Link 
          className="btn btn-primary" 
          style={{ backgroundColor: "#FF7600" }} 
          to={`/agenda/${agendas._id}/reserva`} >
            Fazer uma Reserva 
            </Link>
        </div>
        </div>
      </div>
      </div>
  );
}

export default ClienteAgendaDetails;
