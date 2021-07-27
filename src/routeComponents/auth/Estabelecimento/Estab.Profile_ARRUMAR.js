import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../../apis/api";

function Profile() {
  const [state, setState] = useState({
    name: "",
    email: "",
    profilePictureUrl: "",
    address: {
      street: "",
      neighbourhood: "",
      city: "",
      state: "",
      postalCode: "",
      number: "",
    },
    birthDate: "",
    phoneNumber: "",
    document: "",
    instagram:"",
  });

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get("/profile");

        setState({ ...response.data });

        const accountsResponse = await api.get("/account");

        if (accountsResponse.data.length) {
          setAccounts([...accountsResponse.data]);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchProfile();
  }, []);

  function formatDate(date) {
    const dateObj = new Date(date);

    const day = String(dateObj.getUTCDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <div className="container mt-5">
      <Link className="btn btn-primary" to="/profile/edit">
        Editar Perfil
      </Link>

      <h1>Perfil</h1>
      <hr />

      <img
        className="img-fluid rounded-circle"
        src={state.profilePictureUrl}
        alt="Sua foto de perfil"
      />

      <p>
        <strong>Nome: </strong>
        {state.name}
      </p>
      <p>
        <strong>E-mail: </strong>
        {state.email}
      </p>

      <h3>Endereço</h3>
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
        <strong>CNPJ: </strong>
        {state.document}
      </p>
      <p>
        <strong>Instagram: </strong>
        {state.isntagram}
      </p>

      <div className="py-4">
        <h3>Suas contas</h3>

        {accounts.length ? (
          accounts.map((account) => {
            return (
              <div
                key={account._id}
                className="rounded shadow w-50 my-4 p-3 text-center "
              >
                <Link
                  className="text-decoration-none"
                  to={`/account/${account._id}`}
                >
                  <p>
                    <strong>Agência: </strong>
                    {account.agency}
                  </p>

                  <p>
                    <strong>{account.type} Nº: </strong>
                    {String(account.accountNumber).padStart(7, "0")}
                  </p>
                </Link>
              </div>
            );
          })
        ) : (
          <Link className="btn btn-lg btn-primary" to="/account/create">
            Abra sua conta
          </Link>
        )}
      </div>
    </div>
  );
}

export default Profile;
