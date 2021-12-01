import React, { useContext, useState } from "react";
import Footer from "../../components/footer/Footer";
import SettingHeader from "../../components/settingHeader/SettingHeader";
import { updateUser } from "../../context/authContext/apiCall";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useHistory } from "react-router";
import Loadingspinner from "../../components/UI/LoadingSpinner";
import "./ChangeUsername.scss";
const Changeusername = () => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);
  const [newUsername, setNewUsername] = useState(null);
  const [pending, setPending] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    setPending(true);
    await updateUser(dispatch, { username: newUsername });
    setPending(false);
    history.replace("/YourAccount");
  };
  return (
    <div className="usernamePage-wrapper">
      <SettingHeader />
      <div className="usernamePage">
        <p className="usernamePage-title">Change Username</p>
        <form className="usernamePage-form" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="New Username"
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <div className="usernamePage-button-wrapper">
            <button type="submit">
              {!pending ? <Loadingspinner /> : "Save"}
            </button>
            <button
              onClick={() => {
                history.replace("/YourAccount");
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div className="usernamePage-footer-wrapper">
        <Footer />{" "}
      </div>
    </div>
  );
};

export default Changeusername;
