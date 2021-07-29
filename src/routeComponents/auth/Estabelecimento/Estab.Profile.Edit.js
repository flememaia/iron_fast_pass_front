import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../../apis/api";
import EstabProfileForm from "./Estab.ProfileForm";

function EstabProfileEditar(props) {

    //dados do estabelecimento - EstabModel
    const [state, setState] = useState({
      name: "", 
      email: "",
      foto: "",
      telefone: "",
      redeSocialUrl: "",
      rua: "",
      bairro: "",
      cidade: "",
      numero: "",
      estado: "",
      cep: "",
      localizacaoUrl: "",
      horarioDeFuncionamento: ""
    });
    
  
    useEffect(() => {
      async function fetchProfile() {
        try {
          const response = await api.get("/profile_estab");
          setState({ ...response.data });
          console.log(response.data)
  
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

// //file = state.foto
// async function handleFileUpload(file) {
//   const uploadData = new FormData();

//   uploadData.append("foto", file);

//   const response = await api.post("/upload", uploadData);

//   return response.data.url;
// }

  async function handleSubmit(event) {
    event.preventDefault();

    // const fotoUrl = await handleFileUpload(state.foto);

    try {
      await api.put("/profile_estab", {
        ...state,
        // fotoUrl,
      });
      setError(null);
      props.history.push("/profile_estab");
    } catch (err) {
      console.error(err.response);
      setError(err.response.data.error);
    }
}
    return (
      <div className="container mt-5"> 
        <div className="form-group d-flex">
          <Link className="fas fa-angle-double-left pr-4" to="/profile_estab" />
          <h1>Editar Perfil</h1>
        </div>
          <h1>{state.name}</h1>
          <img className="img-fluid" src={state.fotoUrl} alt={`${state.fotoUrl} foto`}/>
        <hr/>
        <br/>
        <br/>
      <EstabProfileForm
        state={state} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        error={errors}
      />
      </div>
    );
  }
  
export default EstabProfileEditar;
