import React from "react";
import "./RegistrationProcess.scss";
import { Link, useHistory } from "react-router-dom";

const Registrationprocess = ({ children }) => {
  const history = useHistory();
  const signoutHandler = () => {
    localStorage.removeItem("initialEmail");
    localStorage.removeItem("initialPassword");
    localStorage.removeItem("initialUsername");
    localStorage.removeItem("plan");
    history.replace("/register");
  };
  return (
    <div className="registration">
      <nav className="registration-header">
        <Link to="/register" className="backToRegister">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </Link>
        {/* <Link to="/login" className='link'> */}
        <button className="registration-button" onClick={signoutHandler}>
          Sign Out
        </button>
        {/* </Link> */}
      </nav>
      {children}
      <footer className="registration-footer ">
        <div className="registration-footer-top">
          <a href="#" className="link registration-footer-top-link">
            Questions? Contact us.
          </a>
        </div>
        <div className="registration-footer-links">
          <div className="registration-footer-container">
            <a href="#" className="link registration-footer-link">
              FAQ
            </a>{" "}
          </div>{" "}
          <div className="registration-footer-container">
            <a href="#" className="link registration-footer-link">
              Cookie Preferences
            </a>
          </div>
          <div className="registration-footer-container">
            <a href="#" className="link registration-footer-link">
              Help Center
            </a>
          </div>{" "}
          <div className="registration-footer-container">
            <a href="#" className="link registration-footer-link">
              Corporate Information
            </a>
          </div>
          <div className="registration-footer-container">
            <a href="#" className="link registration-footer-link">
              Terms of Use
            </a>
          </div>
          <div className="registration-footer-container">
            <a href="#" className="link registration-footer-link">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Registrationprocess;
