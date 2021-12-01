import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Login.scss";
import { login } from "../../context/authContext/apiCall";
import Loadingspinner from "../../components/UI/LoadingSpinner";
const Login = () => {
  const history = useHistory();
  const [loginError, setLoginError] = useState(null);
  const { dispatch, status, error } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passowrdChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  useEffect(() => {
    setLoginError(error);
    console.log("login error", error);
    console.log("status", status);
  }, [error]);
  return (
    <div className="login">
      <nav>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt=""
        />
      </nav>
      <div className="main">
        <div className="card">
          <h1>Sign In</h1>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Email or phone number"
              onChange={emailChangeHandler}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={passowrdChangeHandler}
            />
            {error && (
              <p style={{ fontSize: "14px", color: "orange" }}>
                {" "}
                Wrong email or password. Please try again!
              </p>
            )}
            <button className="button" type="submit">
              {status === "pending" ? <Loadingspinner /> : "Sign in"}
            </button>
          </form>
          <div>
            <p className="first">
              New to Netflix? <a>Sign up now</a>.
            </p>
            <p className="last">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="#">Learn more.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
