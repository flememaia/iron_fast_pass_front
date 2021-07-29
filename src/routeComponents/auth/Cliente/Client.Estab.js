import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../../apis/api";

function Estab() {
  const [state, setState] = useState(null);

  //todos os estabelecimentos - EstabModel
  const [estab, setEstab] = useState([]);
  
  //dados da agenda - AgendaModel
  const [agendas, setAgendas] = useState([]);
  
  // parâmetro de rota é do estabelecimento específico
  const { id } = useParams();

  useEffect(() => {
    async function fetchEstab() {
      try {
        const response = await api.get("/profile");
        // console.log(response)
        // console.log(response.data)
        setState({ ...response.data });

        const estabResponse = await api.get(`/allestab/${id}`);
        console.log(estabResponse.data)
        setEstab({...estabResponse.data});

        const agendasResponse = await api.get(`/client_agendas/${id}`);
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
    fetchEstab();
  }, []);

console.log(estab)

  return (
        
    <div className="container mt-5">

      <h6>Componente - Client.Estab</h6>
        <div className="d-flex justify-content-around"> 
            <img className="img-fluid rounded-circle m-3" src="https://avatars.githubusercontent.com/u/81379613?s=60&v=4" alt="Sua foto de perfil"/>
            {/* <img className="img-fluid rounded-circle" src={state.fotoUrl} alt="Sua foto de perfil"/> */}
            <h5>{state.name}</h5>
        </div>
        <hr />

        <div className="py-4">
          <div className="rounded shadow w-100 my-4 p-3">
          <p>{estab.name}</p>
              <img className="img-fluid m-3" src={estab.fotoUrl[0]} alt="Sua foto de perfil"/>
              {/* <img className="img-fluid rounded-circle" src={estab.fotoUrl[0]} alt={`${estab.name} foto`}/> */}
              <p><strong>{estab.email}</strong></p>
                <p>{`${estab.rua}, ${estab.number}, ${estab.bairro} - ${estab.cidade} - ${estab.estado} - ${estab.cep}`}</p>
                <Link to={estab.localizacaoUrl} >
                  <iframe>{estab.localizacaoUrl}</iframe>
                </Link>
                <p>{estab.rank}</p>
                <p>{estab.horarioDeFuncionamento}</p>
                <p>{estab.phoneNumber}</p> 
                <Link to={estab.redeSocialUrl} />  
          </div>                
        </div>

        {agendas.length ? (
            agendas.map((agenda) => {
                return ( 
                <div key={agenda._id} className="rounded shadow w-100 my-4 p-3 ">
                <Link className="fas fa-eye" to={`/agenda/${agenda._id}`} />
                 <p> <strong> Data: </strong> {agenda.data}</p>
                 <p> <strong>Evento: </strong> {agenda.evento} </p>
                 <p> <strong> Status: </strong> {agenda.status} </p>
                 <p> <strong>Horario: </strong> {agenda.horario}</p>
                </div>); 
            }) 
          ) : (null)}
      </div> 
    );
  }

export default Estab;
