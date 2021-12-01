import React from "react";
import { Check, CheckCircleOutline } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
const Signup = () => {
  const history = useHistory();

  return (
    <div className="registerStep1-main signup">
      <p className="registerStep1-icon-container">
        <CheckCircleOutline className="registerStep1-top-icon" />
      </p>
      <p className="stepNum signup">
        Step <b>2</b> of <b>3</b>
      </p>
      <h2 className="signup registerStep1-title">Choose your plan</h2>
      <p className="registerStep1-desc signup">
        <Check className="registerStep1-desc-icon" /> No commitments, cancel
        anytime.
      </p>
      <p className="registerStep1-desc signup">
        <Check className="registerStep1-desc-icon" /> Everything on Netflix for
        one low price.
      </p>
      <p className="registerStep1-desc signup">
        <Check className="registerStep1-desc-icon" />
        No ads and no extra fees. Ever.
      </p>
      {/* <Link to="/signup/planform" className="link  registerStep1-link"> */}
      <button
        className="registerStep1-button signup"
        onClick={() => {
          history.push("/signup/planform");
        }}
      >
        Next
      </button>
      {/* </Link> */}
    </div>
  );
};

export default Signup;
