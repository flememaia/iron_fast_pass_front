import React from "react";
import { Route, Switch } from "react-router-dom";

import Signup from "./Signup";
import LoginClient from "./Cliente/Client.Login";
import Client from "./Cliente/Client.Signup";
import LoginEstab from "./Estabelecimento/Estab.Login";
import Estab from "./Estabelecimento/Estab.Signup";


function AuthRouter(props) {
  return (
    // <> é um alias (apelido) para React.Fragment
    <React.Fragment>
      <Switch>
        <Route path={`${props.match.path}/signup`} component={Signup} />
        <Route
          path={`${props.match.path}/estabelecimentoSignup`}
          component={Estab}
        />
        <Route path={`${props.match.path}/clienteSignup`} component={Client} />
        <Route
          path={`${props.match.path}/logincliente`}
          component={LoginClient}
        />
        <Route
          path={`${props.match.path}/loginestabelecimento`}
          component={LoginEstab}
        />
      </Switch>
    </React.Fragment>
  );
}

export default AuthRouter;
