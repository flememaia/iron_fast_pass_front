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
import ClientProfile from "../routeComponents/auth/Cliente/Client.ProfileARRUMAR.";
import ProtectedRoute from "../routeComponents/auth/PrivateRoute";

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
        </Switch>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
