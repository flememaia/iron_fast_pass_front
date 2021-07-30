import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import LogoFixa from "../../../img/logo.png"
import api from "../../../apis/api";

function Estab() {
  const [state, setState] = useState({
    name: "", 
    // fotoUrl: "",
  });

  //todos os estabelecimentos - EstabModel
  const [estab, setEstab] = useState([

  ]);
  
  //dados da agenda - AgendaModel
  const [agendas, setAgendas] = useState([]);
  
  // parâmetro de rota é do estabelecimento específico
  const { id } = useParams();

  useEffect(() => {
    async function fetchEstab() {
      try {
        const response = await api.get("/profile");
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
    <div>
    <Navbar
      className="navbar sticky-top"
      bg="white"
      variant="white"
      expand="lg"
    >
      <Link to="/profile">
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
              to="/profile"
            />
          </div>

        <div className="d-flex justify-content-around"> 
          <img className="img-fluid rounded-circle" src={state.fotoUrl} alt={`${state.fotoUrl} foto`}/>
          <h3 className="align-self-center">{state.name}</h3>
        </div>
        <hr style={{ backgroundColor: "#FFFFFF" }} />

  <div className="p-4">
    <h3>Estabelecimento</h3>
        <div className="rounded shadow w-100 my-4 p-3" style={{backgroundColor: "#FFA900", color: "#56005C"}}>
          <h1>{estab.name}</h1>
              {/* <img className="img-fluid m-3" src={estab.fotoUrl[0]} alt="Sua foto de perfil"/> */}
              <p><strong>{estab.email}</strong></p>
                <p>{`${estab.rua}, ${estab.numero}, ${estab.bairro} - ${estab.cidade} - ${estab.estado} - ${estab.cep}`}</p>
                <Link to={estab.localizacaoUrl} >
                  {/* <iframe>{estab.localizacaoUrl}</iframe> */}
                </Link>
                <p>{estab.rank}</p>
                <p>{estab.horarioDeFuncionamento}</p>
                <p>{estab.telefone}</p> 
                <Link to={estab.redeSocialUrl} />  
          </div>                
        </div>

        {agendas.length ? (
            agendas.map((agenda) => {
                return ( 
                <div key={agenda._id} className="rounded shadow w-100 my-4 p-3 ">
                <Link className="fas fa-eye" style={{ color: "#FFFFFF" }} to={`/client_agenda/${agenda._id}`} />
                 <p> <strong> Data: </strong> {agenda.data}</p>
                 <p> <strong>Evento: </strong> {agenda.evento} </p>
                 <p> <strong> Status: </strong> {agenda.status} </p>
                 <p> <strong>Horario: </strong> {agenda.horario}</p>
                </div>); 
            }) 
          ) : (null)}
      </div> 
      </div> 
      </div> 
    );
  }

export default Estab;
