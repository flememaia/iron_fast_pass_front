import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../../apis/api";

function EstabProfile() {

    //dados do estabelecimento - EstabModel
    const [state, setState] = useState({
      name: "", 
      email: "",
      fotoUrl: ""
    });
    
    //dados da agenda - AgendaModel
    const [agendas, setAgendas] = useState([]);

    // //dados da agenda - AgendaModel
    // const [reservas, setReservas] = useState([]);
  
    useEffect(() => {
      async function fetchProfile() {
        try {
          const response = await api.get("/profile_estab");
          setState({ ...response.data });
          console.log(response.data)
  
          const agendasResponse = await api.get("/agenda");
          console.log(agendasResponse.data)
          
          if (agendasResponse.data.length) {
            setAgendas([
              ...agendasResponse.data
            ]);
            console.log(agendas)
          }
          // RENDERIZAR RESERVAS!!!!
          //RENDERIZAR AS RESERVAS
          // const reservasResponse = await api.get("/reserva");
          // console.log(reservasResponse.data)

          // if (reservasResponse.data.length) {
          //   setReservas([
          //     ...reservasResponse.data
          //   ]);
          //   console.log(reservas)
          // }
        } catch (err) {
          console.error(err);
        }
      }
      fetchProfile();
    }, []);

console.log(state)
console.log(agendas)
// console.log(reservas)

    return (
      <div className="container mt-5"> 
      <div className="form-group d-flex">
          <Link className="fas fa-angle-double-left pr-4" to="/">
          <h7>Logoff</h7>
          </Link>
        </div>
          <h1>{state.name}</h1>
          <img className="img-fluid" src={state.fotoUrl} alt={`${state.fotoUrl} foto`}/>
        <hr />

        <div className="form-group d-flex">
          <Link className="fas fa-edit fa-2x" to="/profile_estab/edit" />
        </div>
        <hr />
        
        <div className="py-4">
          <h3>AGENDAS</h3>

          <div className="form-group d-flex">
            <Link className="fas fa-calendar-plus fa-2x" to={`/agenda/${state._id}/criar`} />
          </div>

          {/* agendas => é o state das agendas => linha 24 */}
          {/* DÚVIDA RENDERIZAR SEPARADO SOMENTE AS ATIVAS E AS NÃO ATIVAS COMO HISTÓRICO */}
          {agendas.length ? (
            agendas.map((agenda) => {
                return ( 
                <div key={agenda._id} className="rounded shadow w-100 my-4 p-3 ">
                  {/* <Link className="text-decoration-none" to={`/agenda/${agenda._id}`}> Ver detalhes </Link> */}
                  <Link className="fas fa-eye" to={`/agenda/${agenda._id}`} />
                 <p> <strong> Data: </strong> {agenda.data}</p>
                 <p> <strong>Evento: </strong> {agenda.evento} </p>
                 <p> <strong> Status: </strong> {agenda.status} </p>
                 <p> <strong>Horario: </strong> {agenda.horario}</p>
                </div>); 
            }) 
          ) : (null)}
        
        </div>
        <hr/>
        <div className="py-4">
          <h3>RESERVAS</h3>

          {/* DÚVIDA RENDERIZAR SEPARADO SOMENTE AS ATIVAS E AS NÃO ATIVAS COMO HISTÓRICO */}
          {/* {reservas.length ? (
            reservas.map((reserva) => {
                return ( 
                <div key={reserva._id} className="rounded shadow w-100 my-4 p-3 "> */}
                  {/* <Link className="fas fa-eye" to={`/reserva/${reserva._id}`} /> */}
                 {/* <p> <strong> Data: </strong> {reserva.data}</p>
                 <p> <strong>Evento: </strong> {reserva.evento} </p>
                 <p> <strong> Status: </strong> {reserva.status} </p>
                 <p> <strong>Horario: </strong> {reserva.horario}</p> */}
                {/* </div>); 
            }) 
          ) : (null)} */}
        
        </div>

      </div> 
    );
  }
  
export default EstabProfile;
