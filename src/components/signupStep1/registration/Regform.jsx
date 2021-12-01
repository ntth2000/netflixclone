import React from "react";
import { Link } from "react-router-dom";
import "./Regform.scss";
const Regform = () => {
  return (
    <div className="registerStep1-main regform">
      <p className="stepNum">
        Step <b>1</b> of <b>3</b>
      </p>
      <h2 className="registerStep1-title">Account Created</h2>
      <p className="registerStep1-desc">
        Use this email to access your account:
      </p>
      <p className="registerStep1-email">
        {localStorage.getItem("initialEmail")}
      </p>

      <Link to="/signup" className="link registerStep1-link">
        <button className="registerStep1-button"> Next</button>
      </Link>
    </div>
  );
};

export default Regform;
