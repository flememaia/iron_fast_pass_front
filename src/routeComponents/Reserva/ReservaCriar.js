import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReservaForm from "./ReservaForm";
import LogoFixa from "../../img/logo.png";
import { Navbar } from "react-bootstrap";
import { NavBarLogado } from "../../components/NavBar";


import api from "../../apis/api";

function ReservaCriar(props) {

  const logoff = {
    isActive: true
  }

  const [reserva, setReserva] = useState({
    horario: "",
    quantidadeDePessoas: 0,
    status: "Aguardando Aprovação"
  });

  const [errors, setErrors] = useState(null);

  // id da agenda extraído do paraâmetro de rota
  const { id } = useParams();
  console.log(id)
  
  function handleChange(event) {
    setReserva({
      ...reserva,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post(`/agenda/${id}/reserva`, reserva);
      setErrors(
        null
      );
      props.history.push("/reserva-criada-sucesso");
    } catch (err) {
      console.error(err.response);
      setErrors(err.response.data.errors);
    }
  }

console.log(reserva)

return (
  <div>
      {/* <Navbar
        className="navbar sticky-top"
        bg="white"
        variant="white"
        expand="lg"
      >
        <Link to="/profile">
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
        <div className="container mt-5" style={{ color: "#FFA900" }}>
          <div className="form-group d-flex">
            <Link
              className="fas fa-angle-double-left pr-4"
              style={{ color: "#FFFFFF" }}
              to="/profile"
            />
          </div>
          <h1 className="mb-5">
            <strong>Fazer uma reserva</strong>
          </h1>
    <ReservaForm
      state={reserva} 
      handleChange={handleChange} 
      handleSubmit={handleSubmit} 
      error={errors}
    />
  </div>
  </div>
  </div>
);
}

export default ReservaCriar;
