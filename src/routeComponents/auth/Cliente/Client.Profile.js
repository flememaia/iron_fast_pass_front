import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../../apis/api";
import { Navbar } from "react-bootstrap";
import LogoFixa from "../../../img/logo.png";
import Rating from "../../../components/Rating";

function ClientProfile() {
  const [state, setState] = useState({
    name: "", 
    email: "",
    fotoUrl: "",
    rank: ""
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
        <div className="d-flex justify-content-between m-3">
            <Link className="fas fa-edit fa-2x ms-3" style={{ color: "#FFA900" }} to="/profile/edit" />
            <Link className="fas fa-sign-out-alt fa-2x pr-4 me-3" style={{ color: "#FFA900" }} to="/"/>
            {/* <p style={{fontSize: "20px"}}>SignOut</p> */}
          </div>
        {/* <div className="form-group d-flex justify-content-end m-3">
              <Link className="fas fa-edit fa-2x" style={{ color: "#FFFFFF" }} to="/profile/edit" />
            </div> */}
          <div className="container mt-5" style={{ color: "#FFA900" }}>
            <div className="d-flex justify-content-around"> 
              <img className="img-fluid rounded-circle" src={state.fotoUrl} alt={`${state.fotoUrl} foto`}/>
                <h3 className="align-self-center">{state.name}</h3>
            </div>
            <Rating style={{ color: "#FFA900" }} >{state.rank}</Rating>

            <hr style={{ backgroundColor: "#FFFFFF" }}/>

            <Link className="btn btn-lg btn-primary m-3" style={{ backgroundColor: "#FF7600", fontSize: "30px"}} to="/allestab"> 
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
                    <span style={{color: "#FFFFFF"}}>{reserva.data}</span>
                  </p>
                  <p>
                    <strong>Evento: </strong>
                    <span style={{color: "#FFFFFF"}}>{reserva.evento}</span>
                  </p>
                  <p>
                    <strong>Status: </strong>
                    <span style={{color: "#FFFFFF"}}>{reserva.status}</span>
                  </p>
                  <p>
                    <strong>Horario: </strong>
                    <span style={{color: "#FFFFFF"}}>{reserva.horario}</span>
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
