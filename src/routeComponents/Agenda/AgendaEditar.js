import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AgendaForm from "./AgendaForm";
import LogoFixa from "../../img/logo.png";
import { Navbar } from "react-bootstrap";

import api from "../../apis/api";

function AgendaEditar(props){

  const [agenda, setAgenda] = useState({
    evento: "",
    atracao: "",
    data: "",
    horario: "",
    limiteDeMesaDe4pessoas: "",
    promocaoDoDia: "",
    taxa: "",
    status: "Ativa"
  });

  const { id } = useParams();

  useEffect(() => {
    async function fetchAgenda() {
      try {
        const response = await api.get(`/agenda/${id}`); 
        console.log(response.data)
        setAgenda({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchAgenda();
  }, [id]);
// useEffect só vai disparar a callback fetchReserva quando o id for extraido do parâmetro de rota

console.log(agenda)

  const [errors, setError] = useState(null);

  function handleChange(event) {
    setAgenda({
      ...agenda,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
  event.preventDefault();

  try {
    const response = await api.put(`/agenda/${id}`, agenda);
    console.log(response.data)
    props.history.push("/profile_estab");
  } catch (err) {
    console.error(err.response);
    setError(err.response.data.error);
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
        <strong>Editar Agenda</strong>
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

export default AgendaEditar
