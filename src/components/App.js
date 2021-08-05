import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthContextComponent } from "../contexts/authContext";

//COMPONENTES
import Home from "../routeComponents/Home";
import Signup from "../routeComponents/auth/Signup";


import EstabSignUp from "../routeComponents/auth/Estabelecimento/Estab.Signup";
import ClientSignUp from "../routeComponents/auth/Cliente/Client.Signup";
import ClientLogin from "../routeComponents/auth/Cliente/Client.Login";
import EstabLogin from "../routeComponents/auth/Estabelecimento/Estab.Login";
import ClientProfile from "../routeComponents/auth/Cliente/Client.Profile";
import ProtectedRoute from "../routeComponents/auth/PrivateRoute";
import ReservaDetails from "../routeComponents/Reserva/ReservaDetails";
import ReservaCancelar from "../routeComponents/Reserva/ReservaCancelar_Edit";
import EstabProfile from "../routeComponents/auth/Estabelecimento/Estab.Profile";
import AgendaDetails from "../routeComponents/Agenda/AgendaDetails";
import AgendaCancelar from "../routeComponents/Agenda/AgendaCancelar_Edit";
import AgendaCriar from "../routeComponents/Agenda/AgendaCriar";
import AgendaEditar from "../routeComponents/Agenda/AgendaEditar";
import EstabList from "../routeComponents/auth/Cliente/Client.AllEstab";
import Estab from "../routeComponents/auth/Cliente/Client.Estab";
import ClienteAgendaDetails from "../routeComponents/auth/Cliente/Cliente.AgendaDetails";
import ReservaCriar from "../routeComponents/Reserva/ReservaCriar";
import ReservaCriadaSucesso from "../routeComponents/Reserva/ReservaCriadaComSucesso";
import ClienteProfileEditar from "../routeComponents/auth/Cliente/Client.Profile.Edit";
import EstabProfileEditar from "../routeComponents/auth/Estabelecimento/Estab.Profile.Edit";
import ReservaAllEstab from "../routeComponents/Reserva/ReservaAll.Estab";
import ReservaDetailsEstab from "../routeComponents/Reserva/ReservaDetailsEstab";
import ReservaEditEstab from "../routeComponents/Reserva/ReservaEdit.Estab";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          {/* Página inicial - 1.Fazer Login Cliente, 2.Fazer Login Estab, 3.Registre-se */}
          <Route exact path="/" component={Home} />
          {/* <Route path="/auth" component={AuthRouter} /> */}
          {/* 3.1 Fazer SignUp Cliente ou 3.2 Estab */}
          <Route exact path="/signupAll" component={Signup} />
          {/* 3.2.1 SignUp Estab */}
          <Route path="/signup_estab" component={EstabSignUp} />
          {/* Depois de fazer o cadastro, direciona para o login */}
          <Route path="/login_estab" component={EstabLogin}/>    
          {/* Login com sucesso, direciona para o profile_estab*/}
          <ProtectedRoute exact path="/profile_estab" component={EstabProfile} /> 
              {/* Editar Profile*/}
              <ProtectedRoute exact path="/profile_estab/edit" component={EstabProfileEditar} />
              <ProtectedRoute exact path="/agenda/:id" component={AgendaDetails} />
              <ProtectedRoute exact path="/agenda/:id/cancelar" component={AgendaCancelar} />
              <ProtectedRoute exact path="/agenda/:id/criar" component={AgendaCriar} />
              <ProtectedRoute exact path="/agenda/:id/editar" component={AgendaEditar} />
              <ProtectedRoute exact path="/reserva_estab" component={ReservaAllEstab} />
              <ProtectedRoute exact path="/reserva_estab/:id" component={ReservaDetailsEstab} />
              <ProtectedRoute exact path="/reserva_estab/:id/edit_status" component={ReservaEditEstab} />
         


          <Route path="/signup" component={ClientSignUp}/>
          <Route path="/login" component={ClientLogin}/>
          <ProtectedRoute exact path="/profile" component={ClientProfile} />
          <ProtectedRoute exact path="/profile/edit" component={ClienteProfileEditar} />

              <ProtectedRoute exact path="/allestab" component={EstabList} />
              <ProtectedRoute exact path="/allestab/:id" component={Estab} />
              <ProtectedRoute exact path="/client_agenda/:id" component={ClienteAgendaDetails} />
              <ProtectedRoute exact path="/agenda/:id/reserva" component={ReservaCriar} />
              <ProtectedRoute exact path="/reserva-criada-sucesso" component={ReservaCriadaSucesso} />

              {/* Ver detalhes da reserva no Cliente logado. Também da certo no estabelecimento? Sim, mas 
              aparece opções que não deveriam, como cancelar e o voltar direciona para o profile do cliente.
              uma opção seria o goback() 
              Por enquanto, vou renderizar outro componente. */}
              <ProtectedRoute exact path="/reserva/:id" component={ReservaDetails} />
              <ProtectedRoute exact path="/reserva/:id/cancelar" component={ReservaCancelar} />
              


        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
