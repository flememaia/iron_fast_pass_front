import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReservaForm from "./ReservaForm";

import api from "../../apis/api";

function ReservaCriar(props) {
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
  <div className="container mt-5">
    <div className="form-group d-flex">
        <Link className="fas fa-angle-double-left pr-4" to="/profile" />
      </div>
    <h1>Fazer uma reserva</h1>
    <ReservaForm
      state={reserva} 
      handleChange={handleChange} 
      handleSubmit={handleSubmit} 
      error={errors}
    />
  </div>
);
}

export default ReservaCriar;
