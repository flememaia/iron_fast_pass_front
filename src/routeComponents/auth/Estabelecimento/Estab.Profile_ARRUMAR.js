import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../../apis/api";

function EstabProfile() {

    //dados do estabelecimento - EstabModel
    const [state, setState] = useState({
      name: "", 
      email: "",
      fotoUrl: "",
      // id estabelecimento
      // telefone: 0,
      // redeSocialUrl: "",
      // rua: "",
      // bairro: "",
      // cidade: "",
      // numero: 0,
      // estado: "",
      // cep: 0,
      // localizacaoUrl: "",
      // rank: 5,
      // cnpj: 0,
      // horarioDeFuncionamento: "",
    });
    
    //dados da agenda - AgendaModel
    const [agendas, setAgendas] = useState([]);
  
    useEffect(() => {
      async function fetchProfile() {
        try {
          const response = await api.get("/profile_estab");
          setState({ ...response.data });
          console.log(response.data)
  
          const agendasResponse = await api.get("/agenda");
          console.log(agendasResponse.data)
  
          if (agendasResponse.data.length) {
            setAgendas([
              ...agendasResponse.data
            ]);
            console.log(agendas)
          }
        } catch (err) {
          console.error(err);
        }
      }
      fetchProfile();
    }, []);

console.log(state)
console.log(agendas)

    return (
      <div className="container mt-5"> 
        
        {/* <Link className="btn btn-primary" to="/profile_estab/edit">
          Editar Perfil ESTABELECIMENTO
        </Link>
   */}
        <h1>Perfil ESTABELECIMENTO</h1>
        <hr />
  
        <img
          className="img-fluid rounded-circle"
          src={state.fotoUrl}
          alt="Sua foto de perfil"
        />
  
        <p>
          <strong>Nome: </strong>
          {state.name}
        </p>

        <div className="form-group d-flex">
          <Link className="fas fa-edit fa-2x" to="/profile_estab" />
        </div>

        <hr />
        
        <div className="py-4">
          <h3>AGENDAS</h3>

          {/* aqui o state._id é o id do estabelecimento */}
          {/* <Link className="btn btn-lg btn-primary" to={`/agenda/${state._id}/criar`}> 
              Incluir Agenda
          </Link> */}

          <div className="form-group d-flex">
            <Link className="fas fa-calendar-plus fa-2x" to={`/agenda/${state._id}/criar`} />
          </div>

          {/* agendas => é o state das agendas => linha 24 */}
          {/* DÚVIDA RENDERIZAR SEPARADO SOMENTE AS ATIVAS E AS NÃO ATIVAS COMO HISTÓRICO */}
          {agendas.length ? (
            agendas.map((agenda) => {
                return ( 
                <div key={agenda._id} className="rounded shadow w-100 my-4 p-3 ">
                  {/* <Link className="text-decoration-none" to={`/agenda/${agenda._id}`}> Ver detalhes </Link> */}
                  <Link className="fas fa-eye" to={`/agenda/${agenda._id}`} />
                 <p> <strong> Data: </strong> {agenda.data}</p>
                 <p> <strong>Evento: </strong> {agenda.evento} </p>
                 <p> <strong> Status: </strong> {agenda.status} </p>
                 <p> <strong>Horario: </strong> {agenda.horario}</p>
                </div>); 
            }) 
          ) : (null)}
        
        </div>
      </div> 
    );
  }
  
export default EstabProfile;
