import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../../apis/api";

function EstabList() {
  const [state, setState] = useState({
    name: "", 
    fotoUrl: "",
  });

  //todos os estabelecimentos - EstabModel
  const [allEstab, setAllEstab] = useState([]);


  useEffect(() => {
    async function fetchAllEstab() {
      try {
        const response = await api.get("/profile");
        // console.log(response)
        // console.log(response.data)
        setState({ ...response.data });

        const allEstabsResponse = await api.get("/allestab");
        console.log(allEstabsResponse.data)

          setAllEstab([
              ...allEstabsResponse.data
            ]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchAllEstab();
  }, []);

  return (
        
    <div className="container mt-5">

      <h1>Perfil - Navbar APP</h1>
      <hr />

      <div className="d-flex justify-content-around"> 
            <img className="img-fluid rounded-circle m-3" src="https://avatars.githubusercontent.com/u/81379613?s=60&v=4" alt="Sua foto de perfil"/>
            {/* <img className="img-fluid rounded-circle" src={state.fotoUrl} alt="Sua foto de perfil"/> */}
            <h3>{state.name}</h3>
        </div>
        <hr />

        <div className="py-4">
          <h3>ESTABELECIMENTOS</h3>

{/*         
          <Link className="btn btn-lg btn-primary" to={`/agenda/${state._id}/criar`}> 
              Nova Agenda
          </Link> */}
  
          {/* agendas => é o state das agendas => linha 24 */}
          {allEstab.length ? (
            allEstab.map((estab) => {
              return (
                <div
                  key={estab._id}
                  className="rounded shadow w-100 my-4 p-3"
                >
                 <Link className="text-decoration-none"
                    to={`/allestab/${estab._id}`}
                  >
                    Ver detalhes
                  </Link>
                    <p>
                      <strong>{estab.name}</strong>
                    </p>

                    <img className="img-fluid" src={estab.fotoUrl[0]} alt={`${estab.name} foto`}/>

                    <p>
                      {estab.rank}
                    </p>
                    <p>
                      <strong>Horario de Funcionamento: </strong>
                        {estab.horarioDeFuncionamento}
                    </p>
                </div>
              );
            }) 
          ) : (null)}
        
        </div>
      </div> 

    );
  }

export default EstabList;
