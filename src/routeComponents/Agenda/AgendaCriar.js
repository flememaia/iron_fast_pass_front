import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../apis/api";
import AgendaForm from "./AgendaForm";
import { AuthContext } from "../../contexts/authContext";
import LogoFixa from "../../img/logo.png";
import { Navbar } from "react-bootstrap";

function AgendaCriar(props) {

  // pegar nome do estabelecimento do contexto global
  const authContext = useContext(AuthContext);

  console.log(authContext)

  const nameEstabelecimento = authContext.loggedInUser.user.name
  console.log(nameEstabelecimento)

  const [agenda, setAgenda] = useState({
    nameEstab: nameEstabelecimento,
    evento: "",
    atracao: "",
    data: "",
    horario: "",
    limiteDeMesaDe4pessoas: "",
    promocaoDoDia: "",
    taxa: "",
    status: "Ativa"
  });
  const [errors, setErrors] = useState(
    null
  );

  const { id } = useParams();
  console.log(id)

  function handleChange(event) {
    setAgenda({
      ...agenda,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post("/agenda", agenda);
      setErrors(
        null
      //   {
      //   evento: "",
      //   atracao: "",
      //   data: "",
      //   horario: "",
      //   limiteDeMesaDe4pessoas: "",
      //   promocaoDoDia: "",
      //   taxa: "",
      // }
      );
      props.history.push("/profile_estab");
    } catch (err) {
      console.error(err.response);
      setErrors(err.response.data.errors);
    }
  }
  
  return (
    <div>
      <Navbar
        className="navbar sticky-top"
        bg="white"
        variant="white"
        expand="lg"
      >
        <Link to="/profile_estab">
          <img
            className="pl-2 d-flex justify-content-start"
            src={LogoFixa}
            style={{ height: "30%", width: "30%" }}
            alt="logo"
          />
        </Link>
      </Navbar>
          <div className="pag-fundo pt-4">
            <div className="container mt-5" style={{ color: "#FFA900" }}>
              <div className="form-group d-flex">
                <Link
                  className="fas fa-angle-double-left pr-4"
                  style={{ color: "#FFFFFF" }}
                  to="/profile_estab"
                />
                </div>
          <h1 className="mb-5">
            <strong>
            Incluir Agenda
            </strong>
            </h1>
          <h4>{agenda.nameEstab}</h4>
          <AgendaForm
            state={agenda} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            error={errors}
          />
        </div>
      </div>
    </div>
  );
}

export default AgendaCriar;