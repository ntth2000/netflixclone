import React from "react";
import "./RegisterStep1.scss";
import Registrationprocess from "../../../components/registrationProcess/RegistrationProcess";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";

import Registration from "../../../components/signupStep1/registration/Registration";
import Regform from "../../../components/signupStep1/registration/Regform";
import Password from "../../../components/signupStep1/registration/Password";
import Signup from "../../../components/signupStep2/Signup";
import Planform from "../../../components/signupStep2/Planform";
import Payment from "../../../components/signupStep3/Payment";
import Creditoption from "../../../components/signupStep3/CreditOption";
const Registerstep1 = () => {
  const match = useRouteMatch();
  return (
    <Registrationprocess>
      <Switch>
        <Route path={`${match.url}/registration`}>
          {localStorage.getItem("initialEmail") !== null &&
          localStorage.getItem("initialEmail") !== "" ? (
            <div className="registerStep1">
              <Registration />
            </div>
          ) : (
            <Redirect to="/register" />
          )}
        </Route>
        <Route path={`${match.url}/regform`}>
          {localStorage.getItem("initialEmail") !== null &&
          localStorage.getItem("initialEmail") !== "" ? (
            <div className="registerStep1">
              <Regform />
            </div>
          ) : (
            <Redirect to="/register" />
          )}
        </Route>
        <Route path={`${match.url}/password`}>
          {localStorage.getItem("initialEmail") !== null &&
          localStorage.getItem("initialEmail") !== "" ? (
            <div className="registerStep1">
              <Password />
            </div>
          ) : (
            <Redirect to="/register" />
          )}
        </Route>
        <Route exact path={match.url}>
          <div className="registerStep1">
            <Signup />
          </div>
        </Route>
        <Route path={`${match.url}/planform`}>
          <Planform />
        </Route>
        <Route path={`${match.url}/payment`}>
          <Payment />
        </Route>
        <Route path={`${match.url}/creditoption`}>
          <Creditoption />
        </Route>
      </Switch>
    </Registrationprocess>
  );
};

export default Registerstep1;
