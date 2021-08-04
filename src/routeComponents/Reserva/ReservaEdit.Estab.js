import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ReservaFormStatus from "./ReservaFormStatus";

import api from "../../apis/api";

function ReservaEditEstab(){

  const [reserva, setReserva] = useState({
    status: ""
  });

  const [errors, setErrors] = useState(null);

  const [show, setShow] = useState(true);

  const history = useHistory();
  
  const { id } = useParams();

  useEffect(() => {
    async function fetchReserva() {
      try {
        const response = await api.get(`/reserva/${id}`);
        console.log(response.data)
        setReserva({ ...response.data });

      } catch (err) {
        console.error(err);
      }
    }
    fetchReserva();
  }, [id]);
// useEffect só vai disparar a callback fetchReserva quando o id for extraido do parâmetro de rota

console.log(reserva)

  function handleClose() {
    setShow(false);
    history.goBack(); // Volta para a página anterior
  }

  // async function handleApproval() {
  //   try {
  //     const response = await api.put(`/reserva/${id}`, { status: "Aprovada"});
  //     console.log(response.data)
  //     history.push(`/profile`);
  //   } catch (err) {
  //     console.error(err.response.data);
  //   }
  // }

  function handleChange(event) {
    setReserva({
      ...reserva,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.put(`/reserva/${id}`, reserva);
      console.log(response.data)
      history.push(`/profile_estab`);
    } catch (err) {
      console.error(err.response.data);
    }
  }

return (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Atualizar Status Reserva</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      xxxxxxxxxxxxxxxxxxxxxxxx
    </Modal.Body>
    <Modal.Footer>
      <ReservaFormStatus
      state={reserva} 
      handleChange={handleChange} 
      handleSubmit={handleSubmit} 
      error={errors}
      />
      <Button variant="secondary" onClick={handleClose}>
        Voltar
      </Button>
      {/* <Button variant="danger" onClick={handleApproval}>
        Aprovar
      </Button> */}
    </Modal.Footer>
  </Modal>
);
}

export default ReservaEditEstab;
