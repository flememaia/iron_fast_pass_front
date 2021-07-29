import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../apis/api";

function AllEstab() {
    
    //todos os estabelecimentos - EstabModel
    const [allEstab, setAllEstab] = useState([]);
  
    useEffect(() => {
      async function fetchAllEstab() {
        try {
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

console.log(allEstab)

    return (
      <div className="container mt-5">
        <Link className="btn btn-primary" to="/profile_estab/edit">
          Editar Perfil ESTABELECIMENTO
        </Link>
  
        <h1>GERAL - NÃO LOGADO OU LOGADO - ALL ESTABELECIMENTOS</h1>
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
                  className="rounded shadow w-50 my-4 p-3 text-center "
                >
                 <Link className="text-decoration-none"
                    to={`/estab_details/${estab._id}`}
                  >
                    Ver detalhes
                  </Link>
                    <p>
                      <strong>{estab.name}</strong>
                    </p>

                    <img className="img-fluid rounded-circle m-3" src="https://avatars.githubusercontent.com/u/81379613?s=60&v=4" alt="Sua foto de perfil"/>
                    <img className="img-fluid rounded-circle" src={estab.fotoUrl[0]} alt={`${estab.name} foto`}/>

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
  
export default AllEstab;
