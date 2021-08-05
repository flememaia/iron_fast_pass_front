import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../../apis/api";
import { Navbar } from "react-bootstrap";
import LogoFixa from "../../../img/logo.png";
import Rating from "../../../components/Rating";
// import Carousel from "../../../components/Carousel";
import { NavBarLogado } from "../../../components/NavBar";

function EstabProfile() {

  const logoff = {
    isActive: true
  }

    //dados do estabelecimento - EstabModel
    const [state, setState] = useState({
      name: "", 
      email: "",
      fotoUrl: []
    });
    
    //dados da agenda - AgendaModel
    const [agendas, setAgendas] = useState([]);
  
    useEffect(() => {
      async function fetchProfile() {
        try {
          const response = await api.get("/profile_estab");
          setState({ ...response.data });
          console.log(response.data)

          if (response.data) {
            setState({
              ...response.data
            });
            console.log(state)
          }
  
          const agendasResponse = await api.get("/agenda");
          console.log(agendasResponse.data)
          
          if (agendasResponse.data.length) {
            setAgendas([
              ...agendasResponse.data
            ]);
            console.log(agendas)
          }
        } catch (err) {
          console.error(err);
        }
      }
      fetchProfile();
    }, []);

console.log(state)
console.log(agendas)

//ATUALIZAR O FORMATO DA DATA DE STRING para DD/MM/AAAA
function formatDate(date) {
  const dateObj = new Date(date);

  const dateString = dateObj.toLocaleDateString();

  return dateString
}

console.log(state.fotoUrl)
    return (
      <div>
      {/* <Navbar
      className="navbar sticky-top"
      bg="white"
      variant="white"
      expand="lg"
    >
      <Link>
        <img
          className="pl-2 d-flex justify-content-start"
          src={LogoFixa}
          style={{ height: "30%", width: "30%" }}
          alt="logo"
          to="/"
        />
      </Link>
    </Navbar> */}

    <NavBarLogado src={LogoFixa} height="40px" state={logoff}/>
    <div className="pag-fundo pt-4">
    
      <div className="container mt-5" style={{ color: "#FFA900" }}>
        <h1>{state.name}</h1>
        <Rating style={{ color: "#FFA900" }} >{state.rank}</Rating>
        {/* FOTO */}
      <div className="form-group d-flex">
          <img className="img-fluid" src={state.fotoUrl[0]} alt=""/>
        </div>

        

        <div className="d-flex justify-content-end">
            <Link className="btn text-white" style={{ backgroundColor: "#FF7600"}} to="/profile_estab/edit"> 
              Editar Perfil
            </Link>
          </div>
        <hr style={{ backgroundColor: "#FFFFFF" }}/>
        
        <div className="pt-4">
          <div className="form-group d-flex justify-content-between m-3">
            <h2>Agendas</h2>
            <Link className="fas fa-calendar-plus fa-2x" style={{ color: "#FFA900" }} 
            to={`/agenda/${state._id}/criar`} />
          </div>

          {agendas.length ? (
            agendas.filter(agenda => agenda.status === "Ativa")
              .map((agenda) => {
                return ( 
                <div key={agenda._id} className="rounded shadow w-100 my-4 p-3 ">
                  {/* <Link className="text-decoration-none" to={`/agenda/${agenda._id}`}> Ver detalhes </Link> */}
                  <Link className="fas fa-eye d-flex justify-content-end" style={{ color: "#FFFFFF" }} to={`/agenda/${agenda._id}`} />
                 <p> <strong> Data: </strong> {formatDate(agenda.data)} </p>
                 <p> <strong>Evento: </strong> {agenda.evento} </p>
                 <p> <strong>Atracao: </strong> {agenda.atracao} </p>
                 <p> <strong> Status: </strong> {agenda.status} </p>
                 <p> <strong>Horario: </strong> {agenda.horario}</p>
                </div>); 
            }) 
          ) : (null)}

          <h3>Histórico</h3>
          {agendas.length ? (
            agendas.filter(agenda => agenda.status !== "Ativa")
              .map((agenda) => {
                return ( 
                <div key={agenda._id} className="rounded shadow w-100 my-4 p-3 ">
                <Link className="fas fa-eye d-flex justify-content-end" style={{ color: "#FFFFFF" }} to={`/agenda/${agenda._id}`} />
                 <p> <strong> Data: </strong> {formatDate(agenda.data)} </p>
                 <p> <strong>Evento: </strong> {agenda.evento} </p>
                 <p> <strong>Atracao: </strong> {agenda.atracao} </p>
                 <p> <strong> Status: </strong> {agenda.status} </p>
                 <p> <strong>Horario: </strong> {agenda.horario}</p>
                </div>); 
            }) 
          ) : (null)}
        
        </div>
        <hr style={{ backgroundColor: "#FFFFFF" }}/>

        <div className="py-4">
          <h3>RESERVAS</h3>
          {/* <Link to="/reserva_estab">RESERVAS</Link> */}

          <div className="d-flex justify-content-start">
            <Link className="btn text-white" style={{ backgroundColor: "#FF7600"}} to="/reserva_estab"> 
              Reservas
            </Link>
          </div>
        
        
        </div>
      </div> 
      </div>
      </div>
    );
  }
  
export default EstabProfile;
