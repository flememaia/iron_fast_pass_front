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
  <div>
  <div className="pag-fundo">
  <div className="container mt-5" style={{ color: "#FFA900" }}>
<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title><h1>Reserva Criada com Sucesso!</h1></Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <img src={"https://res.cloudinary.com/flavia-maia/image/upload/v1627611077/pictures/file_ymek70.png"}/>

  <h3>Acompanhe o status da sua reserva no seu perfil</h3>

  <p>Aproveite para verificar mais opções de rolê no apê!</p>
  {/* <p>E a qualquer momento, avaliar a sua experiência com o nosso app! </p> */}
  </Modal.Body>
  <Modal.Footer>
    <Button style={{ backgroundColor: "#FFA900" }} onClick={handleClose}>Ok</Button>
  </Modal.Footer>
</Modal>
</div>
</div>
</div>
);
}

export default ReservaCriadaSucesso;
