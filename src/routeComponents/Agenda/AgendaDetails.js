import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LogoFixa from "../../img/logo.png";
import { Navbar } from "react-bootstrap";

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

//ATUALIZAR O FORMATO DA DATA DE STRING para DD/MM/AAAA
function formatDate(date) {
  const dateObj = new Date(date);

  const dateString = dateObj.toLocaleDateString();

  return dateString
}

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
        <div className="form-group d-flex">
          <Link 
          className="fas fa-angle-double-left pr-4"
          style={{ color: "#FFFFFF" }}to="/profile_estab" />
        </div>
        <h1 className="pb-4"><strong>Agenda Específica</strong></h1>  
        <p>
          <strong> Estabelecimento: </strong>
          <p style={{ color: "#FFFFFF" }}>{agendas.nameEstab}</p>
        </p>
        <p>
          <strong> Data: </strong>
          <p style={{ color: "#FFFFFF" }}>{formatDate(agendas.data)} </p>
        </p>
        <p>
        <strong>Horario: </strong>
        <p style={{ color: "#FFFFFF" }}>{agendas.horario}</p>
        </p>            
        <p>
          <strong>Evento: </strong>
          <p style={{ color: "#FFFFFF" }}>{agendas.evento}</p>
          
        </p>
        <p>
          <strong>Atração: </strong>
          <p style={{ color: "#FFFFFF" }}>{agendas.atracao}</p>
        </p>
        <p>
        <strong>Status: </strong>
        <p style={{ color: "#FFFFFF" }}>{agendas.status}</p>
        </p>  
        <p>
        <strong>Limite de Mesas de 4 Pessoas: </strong>
        <p style={{ color: "#FFFFFF" }}>{agendas.limiteDeMesaDe4pessoas}</p>
         
        </p>  
        <p>
        <strong>Promoção do Dia: </strong>
         <p style={{ color: "#FFFFFF" }}>{agendas.promocaoDoDia}</p>
        </p> 
        <p>
        <strong>Taxa de Entrada: </strong>
        <p style={{ color: "#FFFFFF" }}>{agendas.taxa}</p>
        </p> 
        <div className="form-group d-flex m-4 justify-content-between">
          <Link className="fas fa-edit fa-2x" style={{ color: "#FFFFFF" }} to={`/agenda/${agendas._id}/editar`} />
          <Link className="fas fa-trash-alt fa-2x" style={{ color: "#FFFFFF" }} to={`/agenda/${agendas._id}/cancelar`} />
        </div>
        <br></br>   
        <br></br>            
      </div>
      </div>
      </div>
  );
}

export default AgendaDetails;
