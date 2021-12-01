import React, { useContext } from "react";
import Footer from "../../components/footer/Footer";
import SettingHeader from "../../components/settingHeader/SettingHeader";
import { Link } from "react-router-dom";
import "./Setting.scss";
import { AuthContext } from "../../context/authContext/AuthContext";
const Setting = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="settingPage-wrapper">
      <SettingHeader />
      <div className="settingPage">
        <div className="settingPage-top">
          <p className="settingPage-top-title">Account</p>
          <div className="settingPage-top-membersince">
            <img
              src="https://assets.nflxext.com/ffe/siteui/account/svg/membersince.svg"
              alt=""
            />
            Member Since January 2021
          </div>
        </div>

        <div className="settingPage-content-wrapper">
          <div className="settingPage-content-section">
            <p className="settingPage-content-title">
              Membership &amp; Billing
            </p>
            <button className="settingPage-content-button">
              Cancel Membership
            </button>
          </div>
          <div className="settingPage-content-section">
            <div className="settingPage-content-account-info">
              <p className="settingPage-content-account-info-left email">
                abc@gmail.com
              </p>
            </div>
            <div className="settingPage-content-account-info">
              <p className="settingPage-content-account-info-left">
                Username: {user?.username ? user.username : "unset"}
              </p>
              <Link
                to={"/username"}
                className="settingPage-content-account-info-right"
              >
                Change username
              </Link>
            </div>
            <div className="settingPage-content-account-info">
              <p className="settingPage-content-account-info-left">
                Password: ******
              </p>
              <Link
                to="/password"
                className="settingPage-content-account-info-right"
              >
                Change password
              </Link>
            </div>
          </div>
        </div>
        <div className="settingPage-content-wrapper">
          <div className="settingPage-content-section">
            <p className="settingPage-content-title">Plan Details</p>
          </div>
          <div className="settingPage-content-section">
            <div className="settingPage-content-account-info">
              <p className="settingPage-content-account-info-left plan" style={{textTransform:'capitalize'}}>
                {user?.plan}
              </p>
              <Link
                to="/changeplan"
                className="settingPage-content-account-info-right"
              >
                Change plan
              </Link>
            </div>
          </div>
        </div>
        <div className="settingPage-content-wrapper">
          <div className="settingPage-content-section">
            <p className="settingPage-content-title">Settings</p>
          </div>
          <div className="settingPage-content-section">
            <div className="settingPage-content-account-info">
              <a href="#" className="settingPage-content-account-info-right">
                Test participation
              </a>
              <a href="#" className="settingPage-content-account-info-right">
                Manage download devices
              </a>
              <a href="#" className="settingPage-content-account-info-right">
                Activate a device
              </a>
              <a href="#" className="settingPage-content-account-info-right">
                Recent device streaming activity
              </a>
              <a href="#" className="settingPage-content-account-info-right">
                Sign out of all devices
              </a>
              <a href="#" className="settingPage-content-account-info-right">
                Download your personal information
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="settingPage-footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default Setting;
