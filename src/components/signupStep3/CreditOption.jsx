import React, { useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { login, register } from "../../context/authContext/apiCall";
import { AuthContext } from "../../context/authContext/AuthContext";
import Loadingspinner from "../UI/LoadingSpinner";
import "./CreditOption.scss";
const plans = {
  mobile: "70,000",
  basic: "180,000",
  standard: "220,000",
  premium: "260,000",
};
const Creditoption = () => {
  const history = useHistory();
  const { dispatch, error, status } = useContext(AuthContext);
  const startMembershipHandler = async (e) => {
    await register(dispatch, {
      email: localStorage.getItem("initialEmail"),
      password: localStorage.getItem("initialPassword"),
      plan: localStorage.getItem("plan"),
    });
    await login(dispatch, {
      email: localStorage.getItem("initialEmail"),
      password: localStorage.getItem("initialPassword"),
    });
    localStorage.removeItem("initialEmail");
    localStorage.removeItem("initialPassword");
    localStorage.removeItem("plan");
    history.replace("/");
  };
  useEffect(() => {}, [error, status]);
  return (
    <div className="register-creditoption">
      <div className="register-creditoption-wrapper">
        <div className="register-creditoption-top">
          <p className="register-creditoption-stepNum">
            Step <b>2</b> of <b>3</b>
          </p>
          <h2 className="register-creditoption-title">
            Set up your credit or debit card{" "}
          </h2>
          <div className="register-creditoption-img-wrapper">
            <div className="register-creditoption-img">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/visa-v3.svg"
                alt=""
              />
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/mastercard-v2.svg"
                alt=""
              />
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/amex-v2.svg"
                alt=""
              />
            </div>
          </div>
          <form className="user-payment-info">
            <div className="user-payment-info-item">
              <input
                type="text"
                className="user-payment-info-input"
                name="firstname"
                placeholder="First Name"
              />
            </div>
            <div className="user-payment-info-item">
              <input
                type="text"
                className="user-payment-info-input"
                name="lastname"
                placeholder="Last Name"
              />
            </div>
            <div className="user-payment-info-item">
              <input
                type="text"
                className="user-payment-info-input"
                name="cardNumber"
                placeholder="Card Number"
              />
            </div>
            <div className="user-payment-info-item">
              <input
                type="text"
                className="user-payment-info-input"
                name="expirationDate"
                placeholder="Expiration date"
              />
            </div>
            <div className="user-payment-info-item">
              {" "}
              <input
                type="text"
                className="user-payment-info-input"
                name="securityCode"
                placeholder="Security Code (CVV)"
              />
            </div>
            <div className="user-payment-info-chosenplan">
              <div className="user-payment-info-chosenplan-left">
                <p className="user-payment-info-chosenplan-price">
                  {plans[localStorage.getItem("plan")]}đ/month
                </p>
                <p className="user-payment-info-chosenplan-planname">
                  {localStorage.getItem("plan")} plan
                </p>
              </div>
              <div className="user-payment-info-chosenplan-right">
                <Link className="link" to="/signup/planform">
                  Change
                </Link>
              </div>
            </div>
            <div className="user-payment-info-note">
              <p>
                Your payments will be processed internationally. Additional bank
                fees may apply.
              </p>
            </div>
          </form>
          <div className="register-creditoption-bottom">
            <div className="register-creditoption-agreement">
              <p>
                By checking the checkbox below, you agree to our{" "}
                <a href="#">Terms of Use</a>, <a href="#">Privacy Statement</a>,
                and that you are over 18. Netflix will automatically continue
                your membership and charge the monthly membership fee (currently{" "}
                {plans[localStorage.getItem("plan")]}đ) to your payment method
                until you cancel. You may cancel at any time to avoid future
                charges.
              </p>
            </div>
            <div className="register-creditoption-agreement-checkbox">
              <label>
                <input type="checkbox" name="checkbox" />
                <span>I agree.</span>
              </label>
            </div>
            <div className="register-creditoption-button-wrapper">
              <button
                className="register-creditoption-button"
                onClick={startMembershipHandler}
              >
                {status === "pending" ? <Loadingspinner /> : "Start Membership"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creditoption;
