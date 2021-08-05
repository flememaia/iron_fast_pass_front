import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import LogoFixa from "../../../img/logo.png"
import { NavBarLogado } from "../../../components/NavBar";
import Rating from "../../../components/Rating";

import api from "../../../apis/api";

function EstabList() {

const logoff = {
  isActive: true
}

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

        const allEstabsResponse = await api.get("/allestab_teste");
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
  console.log(allEstab[0])
  console.log(allEstab[1])

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
          <div className="d-flex justify-content-around"> 
              <img className="img-fluid rounded-circle" src={state.fotoUrl} alt={`${state.fotoUrl} foto`}/>
                <div className="mt-4">
                    <h3 className="align-self-start">{state.name}</h3>
                    <Rating style={{ color: "#FFA900"}} >{state.rank}</Rating>
                </div>
                
            </div>

          <hr style={{ backgroundColor: "#FFFFFF" }} />

          <div className="p-4">
            <h3>Estabelecimentos</h3>

            {/* agendas => é o state das agendas => linha 24 */}
            {allEstab.length ? (
              allEstab.map((estab) => {
                console.log(estab._id)
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
                      <h3><strong>{estab.name}</strong></h3>
                      <Rating style={{ color: "#FFA900"}} >{estab.rank}</Rating>
                    </p>

                    <img className="img-fluid" src={estab.fotoUrl[0]} alt={`${estab.name} foto`} />

                      
                    
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

      </div>
    </div>

  );
}

export default EstabList;
