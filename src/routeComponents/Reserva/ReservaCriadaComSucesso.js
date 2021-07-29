import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


function ReservaCriadaSucesso(){
  const [show, setShow] = useState(true);
  const history = useHistory();
  
  const { id } = useParams();

  function handleClose() {
    setShow(false);
    history.push(`/profile`);
  }

return (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Reserva Criada com Sucesso!</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <img src={"https://giphy.com/gifs/SmartMomsTravel-LkeWlMQsLK50e5ifrD"}/>

    <h2>Acompanhe o status da sua reserva no seu perfil</h2>
    <p>Aproveite para verificar mais opções de rolê!</p>
    <p>E a qualquer momento, avaliar a sua experiência com o nosso app! </p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={handleClose}/>
    </Modal.Footer>
  </Modal>
);
}

export default ReservaCriadaSucesso;
