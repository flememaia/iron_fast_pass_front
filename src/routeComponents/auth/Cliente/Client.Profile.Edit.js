import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClientProfileForm from "./Client.ProfileForm";
import api from "../../../apis/api";
import { Navbar } from "react-bootstrap";
import LogoFixa from "../../../img/logo.png";
import { NavBarLogado } from "../../../components/NavBar";

function ClienteProfileEditar(props){
  const logoff = {
    isActive: true
  }

  const [state, setState] = useState({
  name: "", 
  email: "",
  telefone: "",
  foto: "",
  instagramUrl: "",
  rua: "",
  bairro: "",
  cidade: "",
  numero: "",
  estado: "",
  documento: "",
  dataDeNascimento: "",
  status: "",
  formaDePagamento: "",
  });

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get("/profile"); 
        console.log(response.data)
        setState({ ...response.data });     
      } catch (err) {
        console.error(err);
      }
    }
    fetchProfile();
  }, []);

console.log(state)

  const [errors, setError] = useState(null);

  function handleChange(event) {
    if (event.target.files) {
      return setState({
        ...state,
        [event.currentTarget.name]: event.currentTarget.files[0],
      });
    }
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

//file = state.foto
async function handleFileUpload(file) {
  const uploadData = new FormData();

  uploadData.append("foto", file);

  const response = await api.post("/upload", uploadData);

  return response.data.url;
}

  async function handleSubmit(event) {
    event.preventDefault();

    const fotoUrl = await handleFileUpload(state.foto);

    try {
      await api.put("/profile", {
        ...state,
        fotoUrl,
      });
      setError(null);
      props.history.push("/profile");
    } catch (err) {
      console.error(err.response);
      setError(err.response.data.error);
    }
}
  
  return (
  <div>
      {/* <Navbar
        className="navbar sticky-top"
        bg="white"
        variant="white"
        expand="lg"
      >
        <Link>
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
            <Link className="fas fa-angle-double-left pr-4" style={{ color: "#FFFFFF" }} to="/profile" />
            <h1>Editar Perfil</h1>
        </div>
        <div className="d-flex justify-content-around"> 
          <img className="img-fluid rounded-circle" src={state.fotoUrl} alt={`${state.fotoUrl} foto`}/>
        <h3 className="align-self-center">{state.name}</h3>
      </div>
      <hr style={{ backgroundColor: "#FFFFFF" }}/>

        <br/>
        <br/>
      <ClientProfileForm
        state={state} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        error={errors}
      />
    </div>
  </div>
  </div>
  );
}

export default ClienteProfileEditar
