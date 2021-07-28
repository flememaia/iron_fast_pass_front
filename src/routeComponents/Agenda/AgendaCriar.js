import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../apis/api";
import AgendaForm from "./AgendaForm";

import { AuthContext } from "../../contexts/authContext";

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
  //   {
  //   // evento: null,
  //   // atracao: null,
  //   // data: null,
  //   // horario: null,
  //   // limiteDeMesaDe4pessoas: null,
  //   // promocaoDoDia: null,
  //   // taxa: null,
  // }
  );

  const { id } = useParams();
  console.log(id)

//   useEffect(() => {
//     async function fetchEstab() {
//       try {
//         const response = await api.get(`/agenda/${id}`); 
//         console.log(response.data)
//         setAgendas({ ...response.data });
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     fetchEstab();
//   }, [id]);
// // useEffect só vai disparar a callback fetchReserva quando o id for extraido do parâmetro de rota

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
    <div className="container mt-5">
      <div className="form-group d-flex">
          <Link className="fas fa-angle-double-left pr-4" to="/profile_estab" />
        </div>
      <h1>Incluir Agenda</h1>
      <h4>{agenda.nameEstab}</h4>
      <AgendaForm
        state={agenda} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        error={errors}
      />
    </div>
  );
}

export default AgendaCriar;