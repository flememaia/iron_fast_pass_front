import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LogoFixa from "../../img/logo.png";
import { Navbar } from "react-bootstrap";
import { NavBarLogado } from "../../components/NavBar";

import api from "../../apis/api";

function ReservaDetailsEstab() {

const logoff = {
  isActive: true
}

  const [reservas, setReservas] = useState({
    horario: "",
    quantidadeDePessoas: 0,
    status: ""
  });

  const { id } = useParams();

  useEffect(() => {
    async function fetchReserva() {
      try {
        const response = await api.get(`/reserva/${id}`);
        console.log(response.data)
        setReservas({ ...response.data });

      } catch (err) {
        console.error(err);
      }
    }
    fetchReserva();
  }, [id]);
// useEffect só vai disparar a callback fetchReserva quando o id for extraido do parâmetro de rota

console.log(reservas)

// const { nameEstab, atracao, data, evento } = reservas.agendaId

// console.log(nameEstab, atracao, data, evento)

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
    </Navbar>    */}

  <NavBarLogado src={LogoFixa} height="40px" state={logoff}/>
  
   <div className="pag-fundo pt-4">
        <div className="container mt-5" style={{ color: "#FFA900" }}>
          <div className="form-group d-flex">
            <Link
              className="fas fa-angle-double-left pr-4"
              style={{ color: "#FFFFFF" }}
              to="/profile_estab"
            />
          </div>
          <h1 className="mb-5">
            <strong>Reserva</strong></h1>

        {/* <p>
          <strong> Data: </strong>
              {data}
        </p> */}
        {/* <p>
          <strong>Estabelecimento: </strong>
          {nameEstab}
        </p>            
        <p>
          <strong>Evento: </strong>
          {evento}
        </p> */}
        {/* <p>
          <strong>Atração: </strong>
          {atracao}
        </p> */}
        <p>
        <strong>Status: </strong>
         {reservas.status}
        </p>                    
        <p>
        <strong>Horario: </strong>
        {reservas.horario}
        </p>
        <p>
        <strong>Quantidade de Pessoas: </strong>
        {reservas.quantidadeDePessoas}
        </p>
        <Link className="btn text-white"
          style={{ backgroundColor: "#FF7600" }} 
          to={`/reserva_estab/${reservas._id}/edit_status`} 
          //=> ARRUMAR PRA ONDE DIRECIONA => TENTAR APROVAR AUTOMATICO. 
          //PERMITIR APENAS USUÁRIO COMPARECEU OU NÃO.
          >
          Alterar Status
        </Link>            
        </div>
      </div>
    </div>
  );
}

export default ReservaDetailsEstab;
