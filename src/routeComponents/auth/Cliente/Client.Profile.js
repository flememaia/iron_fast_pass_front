import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../../apis/api";
import { Navbar } from "react-bootstrap";
import LogoFixa from "../../../img/logo.png";
import Rating from "../../../components/Rating";
import { NavBarLogado } from "../../../components/NavBar";

function ClientProfile() {
  const logoff = {
    isActive: true
  }
  
  const [state, setState] = useState({
    name: "", 
    email: "",
    fotoUrl: "",
    rank: ""
  });

  const [reservas, setReservas] = useState(
    {
      data: "",
      nameEstab: "",
      evento: "",
      horario:"",
      quantidadeDePessoas: 0,
      status: ""
    }
  );

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get("/profile");
        // console.log(response)
        // console.log(response.data)
        setState({ ...response.data });

        const reservasResponse = await api.get("/reserva");
        // console.log(reservasResponse.data)
        // console.log(reservasResponse.data[0].agendaId)
        // console.log(reservasResponse.data.length)

        for (let i = 0; i < reservasResponse.data.length; i++){
          console.log(reservasResponse.data[i].agendaId)
          const {data, nameEstab, evento} = reservasResponse.data[i].agendaId 
          console.log(data, nameEstab, evento)
        }
        
        if (reservasResponse.data.length) {
          setReservas(
              [...reservasResponse.data],
            );
          console.log(reservas)
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchProfile();
  }, []);

  console.log(reservas)

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
          <div className="container mt-2" style={{ color: "#FFA900" }}>
            <div className="d-flex justify-content-around"> 
              <img className="img-fluid rounded-circle" src={state.fotoUrl} alt={`${state.fotoUrl} foto`}/>
                <div className="mt-4">
                    <h3 className="align-self-start">{state.name}</h3>
                    <Rating style={{ color: "#FFA900"}} >{state.rank}</Rating>
                </div>
                
            </div>
            
            <hr style={{ backgroundColor: "#FFFFFF" }}/>

            <Link className="btn btn-lg btn-primary m-3 d-flex justify-content-around" style={{ backgroundColor: "#FF7600", fontSize: "20px"}} to="/allestab"> 
                E aí, qual vai ser o rolê?
            </Link>


      <div className="pt-4">
        <h3>Suas Reservas Ativas </h3>
        {/* reservas => é o state das reservas => linha 24 */}
        {reservas.length ? (
          reservas.filter(reserva => reserva.status === "Aguardando Aprovação" || reserva.status === "Aprovada")
          .map((reserva) => {
            return (
              <div key={reserva._id} className="rounded shadow w-100 my-4 p-3">
                <Link className="fas fa-eye d-flex justify-content-end" style={{ color: "#FFFFFF" }} to={`/reserva/${reserva._id}`} />
                  {/* <p>
                    <strong> Data: </strong>
                    <span style={{color: "#FFFFFF"}}>{reserva.data}</span>
                  </p>
                  <p>
                    <strong>Evento: </strong>
                    <span style={{color: "#FFFFFF"}}>{reserva.evento}</span>
                  </p> */}
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

<div className="pt-4">
        <h3>Suas Reservas - Aguardando Avaliação</h3>
        {/* reservas => é o state das reservas => linha 24 */}
        {reservas.length ? (
          reservas.filter(reserva => reserva.status === "Usuário Compareceu - emitir Avaliação")
          .map((reserva) => {
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

      <div className="pt-4">
        <h3>Suas Reservas Histórico </h3>
        {/* reservas => é o state das reservas => linha 24 */}
        {reservas.length ? (
          reservas.filter(reserva => reserva.status !== "Aguardando Aprovação" && reserva.status !== "Aprovada")
          .map((reserva) => {
            return (
              <div key={reserva._id} className="rounded shadow w-100 my-4 p-3">
                <Link className="fas fa-eye d-flex justify-content-end" style={{ color: "#FFFFFF" }} to={`/reserva/${reserva._id}`} />
                  {/* <p>
                    <strong> Data: </strong>
                    <span style={{color: "#FFFFFF"}}>{reserva.data}</span>
                  </p>
                  <p>
                    <strong>Evento: </strong>
                    <span style={{color: "#FFFFFF"}}>{reserva.evento}</span>
                  </p> */}
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
      <div className="d-flex justify-content-end">
      <Link className="btn text-white" style={{ backgroundColor: "#FF7600"}} to="/profile/edit"> 
                Editar Perfil
            </Link>
      </div>
            {/* <Link className="fas fa-edit fa-2x" style={{ color: "#FFA900" }} to="/profile/edit" /> */}
    </div> 
    </div>
    </div> 
    </div> 
  );
}

export default ClientProfile;
