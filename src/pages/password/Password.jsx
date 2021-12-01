import React, { useContext, useState } from "react";
import Footer from "../../components/footer/Footer";
import SettingHeader from "../../components/settingHeader/SettingHeader";
import "./Password.scss";
import $ from "jquery";
import { useHistory } from "react-router";
import { AuthContext } from "../../context/authContext/AuthContext";
import { updateUser } from "../../context/authContext/apiCall";
import Loadingspinner from "../../components/UI/LoadingSpinner";
const Password = () => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [checkSimilarity, setCheckSimilarity] = useState(null);
  const [passwordLengthValidity, setPasswordLengthValidity] = useState(null);
  const [pending, setPending] = useState(null);

  const blurPasswordInputHandler = () => {
    if (newPassword.length < 6 || newPassword.length > 60) {
      setPasswordLengthValidity(false);
      $(".passwordPage-input").addClass("invalid");
    } else {
      setPasswordLengthValidity(true);
      $(".passwordPage-input").removeClass("invalid");
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (newPassword === confirmNewPassword) {
      setCheckSimilarity(true);
      if (newPassword.length >= 6 && newPassword.length <= 60) {
        $(".passwordPage-input-confirm").removeClass("invalid");
        setPending(true);
        await updateUser(dispatch, { password: newPassword });
        setPending(false);
        history.replace("/YourAccount");
      }
    } else {
      setCheckSimilarity(false);
      $(".passwordPage-input-confirm").addClass("invalid");
    }
  };
  return (
    <div className="passwordPage-wrapper">
      <SettingHeader />
      <div className="passwordPage">
        <p className="passwordPage-title">Change Password</p>
        <form className="passwordPage-form" onSubmit={submitHandler}>
          <input
            type="password"
            placeholder="New password (6-60 characters)"
            onChange={(e) => setNewPassword(e.target.value)}
            className="passwordPage-input"
            onBlur={blurPasswordInputHandler}
          />
          {passwordLengthValidity === false && (
            <p className="passwordPage-input-invalid">
              New password must have 6-60 characters!
            </p>
          )}
          <input
            type="password"
            placeholder="Confirm new password"
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            className="passwordPage-input-confirm"
          />
          {checkSimilarity === false && (
            <p className="passwordPage-input-confirm-invalid">
              Must match your new password!
            </p>
          )}
          <div className="passwordPage-button-wrapper">
            <button type="submit">
              {pending === false ? <Loadingspinner /> : "Save"}
            </button>
            <button>Cancel</button>
          </div>
        </form>
      </div>
      <div className="passwordPage-footer-wrapper">
        <Footer />{" "}
      </div>
    </div>
  );
};

export default Password;
