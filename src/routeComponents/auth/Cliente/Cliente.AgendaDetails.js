import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LogoFixa from "../../../img/logo.png"
import { Navbar } from "react-bootstrap";
import api from "../../../apis/api";
import { NavBarLogado } from "../../../components/NavBar";

function ClienteAgendaDetails() {

  const logoff = {
    isActive: true
  }

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

//ATUALIZAR O FORMATO DA DATA DE STRING para DD/MM/AAAA
function formatDate(date) {
  const dateObj = new Date(date);

  const dateString = dateObj.toLocaleDateString();

  return dateString
}

  return (
    <div>
    {/* <Navbar
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
</Navbar> */}

<NavBarLogado src={LogoFixa} height="40px" state={logoff}/>
<div className="pag-fundo pt-4">
        <div className="container mt-2" style={{ color: "#FFA900" }}>
        <div className="form-group d-flex pb-3">
          <Link  
          className="fas fa-angle-double-left pr-4"
          style={{ color: "#FFFFFF" }}to="/allestab" />
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
        {/* <p>
        <strong>Status: </strong>
        <p style={{ color: "#FFFFFF" }}>{agendas.status}</p>
        </p>   */}
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
        <div className="form-group d-flex pt-2 jusd-flex justify-content-center">
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
