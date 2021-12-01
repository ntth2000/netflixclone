import { ArrowForwardIos, LockRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React from "react";
import "./Payment.scss";
const Payment = () => {
  return (
    <div className="register-payment">
      <div className="register-payment-main">
        <div className="register-payment-top">
          <img
            className="register-payment-icon"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png"
          />
        </div>
        <div className="register-payment-middle">
          <p className="register-payment-stepNum">
            Step <b>3</b> of <b>3</b>
          </p>
          <h2 className="register-payment-title">Set up your payment</h2>
          <div className="register-payment-desc first">
            <p>
              Your membership starts as <br />
              soon as you set up <br />
              payment.
            </p>
          </div>
          <div className="register-payment-desc second">
            <p>No commitments.</p>
            <p>Cancel online anytime.</p>
          </div>
        </div>
        <div className="register-payment-bottom">
          <p className="register-payment-bottom-secure">
            Secure Server
            <LockRounded className="register-payment-bottom-secure-icon" />
          </p>
          <Link to="/signup/creditoption" className='link'>
            <div className="register-payment-bottom-card">
              <div className="register-payment-bottom-card-first">
                <p>Credit or Debit Card</p>
                <div className="register-payment-bottom-card-img">
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
              <p>
                <ArrowForwardIos className="register-payment-bottom-next-icon" />
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
