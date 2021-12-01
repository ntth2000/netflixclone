import { Link, useHistory } from "react-router-dom";

import React, { useRef, useState } from "react";
const Password = () => {
  const history = useHistory();
  const invalidPasswordRef = useRef();
  const passwordInputRef = useRef();
  const [password, setPassword] = useState(
    localStorage.getItem("initialPassword") || ""
  );

  const onClick = () => {
    localStorage.setItem("initialPassword", password);

    if (localStorage.getItem("initialPassword") !== "") {
      history.push("/signup");
    } else {
      invalidPasswordRef.current.style.display = "block";
      passwordInputRef.current.style.border = "1px solid orange";
    }
  };
  return (
    <div className="registerStep1-main">
      <p className="stepNum">
        Step <b>1</b> of <b>3</b>
      </p>
      <h2 className="registerStep1-title">
        Welcome back!
        <br />
        Joining Netflix is easy.
      </h2>
      <p className="registerStep1-desc">
        Enter your password and you'll be watching in no time.
      </p>
      <p className="registerStep1-email-label">Email</p>
      <p className="registerStep1-email password">
        {localStorage.getItem("initialEmail")}
      </p>
      <input
        type="password"
        className="registerStep1-input password"
        placeholder="Enter your password"
        defaultValue={localStorage.getItem("initialPassword")}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        ref={passwordInputRef}
      />
      <p
        className="invalid-password"
        style={{ color: "orange", fontSize: "13px", display: "none" }}
        ref={invalidPasswordRef}
      >
        Password is required!
      </p>
      <p className="registerStep1-forgotPassword">
        <a href="#" className="link">
          Forgot your password?
        </a>
      </p>

      {/* <Link to="/signup" className="link registerStep1-link"> */}
      <button className="registerStep1-button" onClick={onClick}>
        Next
      </button>
      {/* </Link> */}
    </div>
  );
};

export default Password;
