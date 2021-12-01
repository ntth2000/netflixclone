import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import Registerstep1 from "./pages/register/step1/RegisterStep1";
import Search from "./pages/search/Search";
import Setting from "./pages/setting/Setting";
import Password from "./pages/password/Password";
import Changeusername from "./pages/changeUsername/ChangeUsername";
import Changeplan from "./pages/changePlan/ChangePlan";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/signup">
          <Registerstep1 />
        </Route>
        {user && (
          <React.Fragment>
            <Route path="/movie">
              <Home type={"movie"} />
            </Route>
            <Route path="/series">
              <Home type={"series"} />
            </Route>
            <Route path="/watch/:movieId">
              <Watch />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/YourAccount">
              <Setting />
            </Route>
            <Route path="/password">
              <Password />
            </Route>
            <Route path="/username">
              <Changeusername />
            </Route>
            <Route path="/changeplan">
              <Changeplan />
            </Route>
          </React.Fragment>
        )}
        <Route path="*">
          <Redirect to="/register" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
