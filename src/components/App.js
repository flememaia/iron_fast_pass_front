import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthContextComponent } from "../contexts/authContext";
import Home from "../routeComponents/Home";
// import AuthRouter from "../routeComponents/auth/AuthRouter";
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
// import AllEstab from "../routeComponents/Geral/Geral.AllEstab";
import EstabDetails from "../routeComponents/Geral/Geral.EstabDetails";
import EstabList from "../routeComponents/auth/Cliente/Client.AllEstab";
import Estab from "../routeComponents/auth/Cliente/Client.Estab";
import ClienteAgendaDetails from "../routeComponents/auth/Cliente/Cliente.AgendaDetails";
import ReservaCriar from "../routeComponents/Reserva/ReservaCriar";
import ReservaCriadaSucesso from "../routeComponents/Reserva/ReservaCriadaComSucesso";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/auth" component={AuthRouter} /> */}
          <Route exact path="/signupAll" component={Signup} />
          <Route path="/signup_estab" component={EstabSignUp} />
          <Route path="/signup" component={ClientSignUp}/>
          <Route path="/login" component={ClientLogin}/>
          <Route path="/login_estab" component={EstabLogin}/>
          <ProtectedRoute exact path="/profile" component={ClientProfile} />
          {/* VERIFICAR SE NÃO VAI DAR RUIM e aí, qual vai ser o rolê? "/allestab */}
          {/* <Route path="/allestab" component={AllEstab} /> */}
          {/* to={`/estab_details/${estab._id}`} */}
          <ProtectedRoute exact path="/allestab" component={EstabList} />
          {/* <Route path="/allestab" component={EstabDetails} /> */}
          <ProtectedRoute exact path="/allestab/:id" component={Estab} />
          <ProtectedRoute exact path="/agenda/:id" component={ClienteAgendaDetails} />
          {/* to={`/agenda/${agenda._id}`} /> */}
          <ProtectedRoute exact path="/agenda/:id/reserva" component={ReservaCriar} />
          <ProtectedRoute exact path="/reserva-criada-sucesso" component={ReservaCriadaSucesso} />
          <ProtectedRoute exact path="/reserva/:id" component={ReservaDetails} />
          <ProtectedRoute exact path="/reserva/:id/cancelar" component={ReservaCancelar} />
          <ProtectedRoute exact path="/profile_estab" component={EstabProfile} />
          <ProtectedRoute exact path="/agenda/:id" component={AgendaDetails} />
          <ProtectedRoute exact path="/agenda/:id/cancelar" component={AgendaCancelar} />
          <ProtectedRoute exact path="/agenda/:id/criar" component={AgendaCriar} />
          <ProtectedRoute exact path="/agenda/:id/editar" component={AgendaEditar} />
          {/* to={`/agenda/${agendas._id}/editar`} */}
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
