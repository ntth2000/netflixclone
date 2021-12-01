import React from "react";
import { useHistory } from "react-router-dom";
const Registration = () => {
  const history = useHistory();
  const onClick = () => {
    history.push("/signup/password");
  };
  return (
    <div className="registerStep1-main registration">
      <img
        src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
        alt=""
        className="registerStep1-img"
      />
      <p className="stepNum">
        Step <b>1</b> of <b>3</b>
      </p>
      <h2 className="registerStep1-title">Finish setting up your account</h2>
      <p className="registerStep1-desc">
        Netflix is personalized for you. Create a password to watch on any
        device at any time.
      </p>

      {/* <Link to="/signup/password" className="link registerStep1-link"> */}
      <button className="registerStep1-button" onClick={onClick}>
        {" "}
        Next
      </button>
      {/* </Link> */}
    </div>
  );
};

export default Registration;
