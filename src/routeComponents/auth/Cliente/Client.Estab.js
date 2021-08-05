import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import LogoFixa from "../../../img/logo.png"
import api from "../../../apis/api";
import { NavBarLogado } from "../../../components/NavBar";
import Rating from "../../../components/Rating";

function Estab() {
  const logoff = {
    isActive: true
  }

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

//ATUALIZAR O FORMATO DA DATA DE STRING para DD/MM/AAAA
function formatDate(date) {
  const dateObj = new Date(date);

  const dateString = dateObj.toLocaleDateString();

  return dateString
}

  return (
    <div>
    {/* <Navbar
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
    </Navbar> */}
    <NavBarLogado src={LogoFixa} height="40px" state={logoff}/>

    <div className="pag-fundo pt-4">
       <div className="container mt-2" style={{ color: "#FFA900" }}>
          <div className="form-group d-flex">
            <Link
              className="fas fa-angle-double-left pr-4"
              style={{ color: "#FFFFFF" }}
              to="/profile"
            />
          </div>

        <div className="d-flex justify-content-around"> 
          <img className="img-fluid rounded-circle" src={state.fotoUrl} alt={`${state.fotoUrl} foto`}/>
          <div className="mt-4">
            <h3 className="align-self-start">{state.name}</h3>
            <Rating style={{ color: "#FFA900"}} >{state.rank}</Rating>
          </div>
        </div>
        <hr style={{ backgroundColor: "#FFFFFF" }} />

  <div className="p-4">
    <h2>Estabelecimento</h2>
        <div className="rounded shadow w-100 my-4 p-3" style={{backgroundColor: "#FFFFFF", color: "#56005C"}}>
        <p>
          <h3><strong>{estab.name}</strong></h3>
          <Rating style={{ color: "#FFA900"}} >{estab.rank}</Rating>
        </p>
              {/* <img className="img-fluid m-3" src={estab.fotoUrl[0]} alt="Sua foto de perfil"/> */}
              <p><strong>{estab.email}</strong></p>
                <p>{`${estab.rua}, ${estab.numero}, ${estab.bairro} - ${estab.cidade} - ${estab.estado} - ${estab.cep}`}</p>
                <Link to={estab.localizacaoUrl} >
                  {/* <iframe>{estab.localizacaoUrl}</iframe> */}
                </Link>
                <p>{estab.horarioDeFuncionamento}</p>
                <p>{estab.telefone}</p> 
                <Link to={estab.redeSocialUrl} />  
          </div>                
        </div>

      {/* Renderiza apenas as agendas ATIVAS */}
        <h3>Agendas</h3>
        {agendas.length ? (
            agendas.filter(agenda => agenda.status === "Ativa")
              .map((agenda) => {
                return ( 
                <div key={agenda._id} className="rounded shadow w-100 my-4 p-3 ">
                  {/* <Link className="text-decoration-none" to={`/agenda/${agenda._id}`}> Ver detalhes </Link> */}
                  <Link className="fas fa-eye d-flex justify-content-end" style={{ color: "#FFFFFF" }} to={`/client_agenda/${agenda._id}`} />
                 <p> <strong> Data: </strong> {formatDate(agenda.data)} </p>
                 <p> <strong>Evento: </strong> {agenda.evento} </p>
                 <p> <strong>Atracao: </strong> {agenda.atracao} </p>
                 {/* <p> <strong> Status: </strong> {agenda.status} </p> */}
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
