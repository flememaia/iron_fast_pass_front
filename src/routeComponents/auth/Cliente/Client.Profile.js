import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../../apis/api";

function ClientProfile() {
  const [state, setState] = useState({
    name: "", 
    email: "",
    fotoUrl: "",
  });

  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get("/profile");
        // console.log(response)
        // console.log(response.data)
        setState({ ...response.data });

        const reservasResponse = await api.get("/reserva");
        console.log(reservasResponse.data)

        // const reservaData = { ...reservaResponse.data.agendaId };
        // delete reservaResponse.data.agendaId;

        // const { data } = reservaData

        if (reservasResponse.data.length) {
          setReservas([
            ...reservasResponse.data
          ]);
          console.log(reservas)
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchProfile();
  }, []);

  return (
        
    <div className="container mt-5">
      <div className="form-group d-flex">
          <Link className="fas fa-angle-double-left pr-4" to="/">
          <h7>Logoff</h7>
          </Link>
        </div>
        <h1>Perfil - Navbar APP</h1>
          <hr />

      <div className="d-flex justify-content-around"> 
        <img className="img-fluid rounded-circle" src={state.fotoUrl} alt={`${state.fotoUrl} foto`}/>
        <h3 className="align-self-center">{state.name}</h3>
      </div>
        <hr />

        <div className="form-group d-flex">
          <Link className="fas fa-edit fa-2x" to="/profile/edit" />
        </div>

        <Link className="btn btn-lg btn-primary" to="/allestab"> 
            E aí, qual vai ser o rolê?
        </Link>

      <div className="py-4">
        <h3>Suas Reservas</h3>
        {/* <div className="form-group d-flex">
            <Link className="fas fa-calendar-plus fa-2x" to={`/agenda/${state._id}/reserva`} />
          </div> */}

        {/* reservas => é o state das reservas => linha 24 */}
        {reservas.length ? (
          reservas.map((reserva) => {
            return (
              <div key={reserva._id} className="rounded shadow w-100 my-4 p-3 text-center ">
                <Link className="fas fa-eye" to={`/reserva/${reserva._id}`} />
                  <p>
                    <strong> Data: </strong>
                    {reserva.data}
                  </p>

                  <p>
                    <strong>Evento: </strong>
                    {reserva.evento}
                  </p>
                  <p>
                    <strong>Status: </strong>
                    {reserva.status}
                  </p>
                  <p>
                    <strong>Horario: </strong>
                      {reserva.horario}
                  </p>
                
              </div>
            );
          })
        ) : (null)}
      </div>
    </div> 
  );
}

export default ClientProfile;
