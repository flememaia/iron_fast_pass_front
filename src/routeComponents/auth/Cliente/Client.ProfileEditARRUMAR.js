import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../../apis/api";

function ClientProfile() {
  const [state, setState] = useState({
    name: "", 
    email: "",
    fotoUrl: "",
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

  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get("/profile");
        // console.log(response)
        // console.log(response.data)
        setState({ ...response.data });

        const reservasResponse = await api.get("/reserva");
        console.log(reservasResponse.data)

        // const reservaData = { ...reservaResponse.data.agendaId };
        // delete reservaResponse.data.agendaId;

        // const { data } = reservaData

        if (reservasResponse.data.length) {
          setReservas([
            ...reservasResponse.data
          ]);
          console.log(reservas)
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchProfile();
  }, []);

  return (
    <div className="container mt-5">
      <Link className="btn btn-primary" to="/profile/edit">
        Editar Perfil
      </Link>

      <h1>Perfil</h1>
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
      {/* <p>
        <strong>E-mail: </strong>
        {state.email}
      </p> */}

      {/* <h3>Endereço</h3>
      <hr />
      
      <p>
        <strong>CEP: </strong>
        {state.address.postalCode}
      </p>
      <p>
        <strong>Rua: </strong>
        {state.address.street}
      </p>
      <p>
        <strong>Número: </strong>
        {state.address.number}
      </p>
      <p>
        <strong>Bairro: </strong>
        {state.address.neighbourhood}
      </p>
      <p>
        <strong>Cidade: </strong>
        {state.address.city}
      </p>
      <p>
        <strong>Estado: </strong>
        {state.address.state}
      </p>

      <h3>Informações Pessoais</h3>
      <hr />
      <p>
        <strong>Data de Nascimento: </strong>
        {formatDate(state.birthDate)}
      </p>
      <p>
        <strong>Telefone: </strong>
        {state.phoneNumber}
      </p>
      <p>
        <strong>CPF: </strong>
        {state.document}
      </p>
      <p>
        <strong>Instagram: </strong>
        {state.isntagram}
      </p> */}

      <div className="py-4">
        <h3>Suas Reservas</h3>

        {/* reservas => é o state das reservas => linha 24 */}
        {reservas.length ? (
          reservas.map((reserva) => {
            return (
              <div
                key={reserva._id}
                className="rounded shadow w-50 my-4 p-3 text-center "
              >
                <Link
                  className="text-decoration-none"
                  to={`/reserva/${reserva._id}`}
                >
                  Ver detalhes
                </Link>
                  <p>
                  <strong> Data: </strong>
                    {reserva.data}
                  </p>

                  <p>
                    <strong>Evento: </strong>
                    {reserva.evento}
                  </p>
                  <p>
                    <strong>Status: </strong>
                    {reserva.status}
                  </p>
                  <p>
                    <strong>Horario: </strong>
                      {reserva.horario}
                  </p>
                
              </div>
            );
          })
        ) : (
          <Link className="btn btn-lg btn-primary" to="/agenda"> 
            Reserve seu rolê
          </Link>
        )}
      </div>
    </div> 
  );
}

export default ClientProfile;
