import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import api from "../../apis/api";

function ReservaCancelar(){
  const [show, setShow] = useState(true);
  const history = useHistory();
  
  const { id } = useParams();

  function handleClose() {
    setShow(false);
    history.goBack(); // Volta para a página anterior
  }

  async function handleDelete() {
    try {
      const response = await api.put(`/reserva/${id}`, { status: "Cancelada pelo Usuário"});
      console.log(response.data)
      history.push(`/profile`);
    } catch (err) {
      console.error(err.response.data);
    }
  }

return (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Cancelar sua reserva</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Tem certeza que deseja cancelar sua reserva? Essa operação é irreversível.
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Voltar
      </Button>
      <Button variant="danger" onClick={handleDelete}>
        Cancelar
      </Button>
    </Modal.Footer>
  </Modal>
);
}

export default ReservaCancelar;
