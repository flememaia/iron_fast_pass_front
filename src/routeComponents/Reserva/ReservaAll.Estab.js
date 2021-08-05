import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import LogoFixa from "../../img/logo.png";
import { Navbar } from "react-bootstrap";
import { NavBarLogado } from "../../components/NavBar";

import api from "../../apis/api";

function ReservaAllEstab() {
  const logoff = {
    isActive: true
  }

  const [reservas, setReservas] = useState({
    horario: "",
    quantidadeDePessoas: 0,
    status: "",
    agendaId: ""
  });

  useEffect(() => {
    async function fetchReserva() {
      try {
        const response = await api.get("/reserva_estab");
        console.log(response.data)
        setReservas([ ...response.data]);

      } catch (err) {
        console.error(err);
      }
    }
    fetchReserva();
  }, []);

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
            <strong>Reservas</strong></h1>
            <h2 className="mb-2">Ativas</h2>
            <h3 className="mb-2" style={{ fontSize: "25px" }}>Aguardando Aprovação</h3>
            {reservas.length ? (
            reservas.filter(reserva => reserva.status === "Aguardando Aprovação")
            .map((reserva) => {
                return ( 
                <div key={reserva._id} className="rounded shadow w-100 my-4 p-3 ">
                  <Link className="fas fa-eye d-flex justify-content-end" style={{ color: "#FFFFFF" }} 
                  to={`/reserva_estab/${reserva._id}`} />             
                  <p> <strong>Horario: </strong> {reserva.horario}</p>
                 <p> <strong>Quantidade de Pessoas: </strong> {reserva.quantidadeDePessoas} </p>                 
                 <p> <strong> Status: </strong> {reserva.status} </p>
                </div>); 
            }) 
          ) : (null)}  

            <h3 className="mb-2" style={{ fontSize: "25px" }}>Aprovada</h3>
            {reservas.length ? (
            reservas.filter(reserva => reserva.status === "Aprovada")
            .map((reserva) => {
                return ( 
                <div key={reserva._id} className="rounded shadow w-100 my-4 p-3 ">
                  <Link className="fas fa-eye d-flex justify-content-end" style={{ color: "#FFFFFF" }} 
                  to={`/reserva_estab/${reserva._id}`} />  
                  <p> <strong>Horario: </strong> {reserva.horario}</p>
                 <p> <strong>Quantidade de Pessoas: </strong> {reserva.quantidadeDePessoas} </p>                 
                 <p> <strong> Status: </strong> {reserva.status} </p>
                </div>); 
            }) 
          ) : (null)}

          <h2 className="mb-2">Histórico</h2>
          {reservas.length ? (
            reservas.filter(reserva => reserva.status !== "Aprovada" || reserva.status !== "Aguardando Aprovação")
            .map((reserva) => {
                return ( 
                <div key={reserva._id} className="rounded shadow w-100 my-4 p-3 ">
                  <Link className="fas fa-eye d-flex justify-content-end" style={{ color: "#FFFFFF" }} 
                  to={`/reserva_estab/${reserva._id}`} />  
                  <p> <strong>Horario: </strong> {reserva.horario}</p>
                 <p> <strong>Quantidade de Pessoas: </strong> {reserva.quantidadeDePessoas} </p>                 
                 <p> <strong> Status: </strong> {reserva.status} </p>
                </div>); 
            }) 
          ) : (null)}  
        </div>
      </div>
    </div>
  );
}

export default ReservaAllEstab;
