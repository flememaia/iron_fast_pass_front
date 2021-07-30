import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../../apis/api";
import { Navbar } from "react-bootstrap";
import LogoFixa from "../../../img/logo.png";

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
    <div>
      <Navbar
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
      </Navbar>

        <div className="pag-fundo pt-4">
          <div className="container mt-5" style={{ color: "#FFA900" }}>
          {/* <Link className="fas fa-angle-double-left pr-4" to="/">
          <h7>Logoff</h7>
          </Link> */}
            <div className="d-flex justify-content-around"> 
              <img className="img-fluid rounded-circle" src={state.fotoUrl} alt={`${state.fotoUrl} foto`}/>
                <h3 className="align-self-center">{state.name}</h3>
            </div>
        
            <hr style={{ backgroundColor: "#FFFFFF" }}/>

            <div className="form-group d-flex">
              <Link className="fas fa-edit fa-2x" style={{ color: "#FFFFFF" }} to="/profile/edit" />
            </div>
            <hr style={{ backgroundColor: "#FFFFFF" }}/>

            <Link className="btn btn-lg btn-primary" style={{ backgroundColor: "#FF7600" }} to="/allestab"> 
                E aí, qual vai ser o rolê?
            </Link>



      <div className="pt-4">
        <h3>Suas Reservas</h3>
        {/* reservas => é o state das reservas => linha 24 */}
        {reservas.length ? (
          reservas.map((reserva) => {
            return (
              <div key={reserva._id} className="rounded shadow w-100 my-4 p-3">
                <Link className="fas fa-eye d-flex justify-content-end" style={{ color: "#FFFFFF" }} to={`/reserva/${reserva._id}`} />
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
    </div>
    </div> 
  );
}

export default ClientProfile;
