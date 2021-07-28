import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import api from "../../apis/api";

function ReservaDetails() {
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

  return (
    <div className="container mt-5">
        <div className="form-group d-flex">
          <Link className="fas fa-angle-double-left pr-4" to="/profile" />
        </div>
        <h1>Reserva Específica</h1>
        <p>
          <strong> Data: </strong>
            {/* {account.agency} */}
        </p>            
        <p>
          <strong>Evento: </strong>
          {/* {reservas.evento} */}
        </p>
        <p>
        <strong>Status: </strong>
         {reservas.status}
        </p>                    
        <p>
        <strong>Horario: </strong>
        {reservas.horario}
        </p>
        <Link className="btn btn-primary" to={`/reserva/${reservas._id}/cancelar`}>
          Cancelar
        </Link>            
      </div>
  );
}

export default ReservaDetails;
