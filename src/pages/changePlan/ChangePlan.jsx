import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import SettingHeader from "../../components/settingHeader/SettingHeader";
import { AuthContext } from "../../context/authContext/AuthContext";
import { updateUser } from "../../context/authContext/apiCall";
import $ from "jquery";
import "./ChangePlan.scss";
import { useHistory } from "react-router";
import { Close } from "@material-ui/icons";
const Changeplan = () => {
  const history = useHistory();
  const { user, dispatch } = useContext(AuthContext);
  const [chosenPlan, setChosenPlan] = useState(user.plan);
  const showModal = () => {
    $("body").css({
      overflow: "hidden",
    });
    $(".modal").show();
  };
  useEffect(() => {
    console.log(chosenPlan);
    $(document).ready(function () {
      $(`.changeplanPage-plan`).click(function () {
        $(`.changeplanPage-plan`).removeClass("active");
        $(this).addClass("active");
      });
      $(".modal").click(function () {
        $("body").css({ overflow: "auto" });
        $(this).hide();
        $(".changePlan-modal").click(function (event) {
          event.stopPropagation();
        });
      });
    });
  }, [chosenPlan]);
  const submitHandler = (e) => {
    e.preventDefault();
    updateUser(dispatch, { plan: chosenPlan });
    history.replace("/YourAccount");
  };
  return (
    <React.Fragment>
      <div className="modal">
        <div className="modal-close-wrapper" style={{ marginTop: "20vh" }}>
          <span
            className="modal-close-span"
            style={{ backgroundColor: "white" }}
          >
            <Close
              className="modal-close-icon"
              style={{ fill: "rgb(119,119,119)", fontSize: "28px" }}
            />
          </span>
        </div>
        <div
          className="modal-content"
          style={{ borderRadius: "0", marginTop: "20vh" }}
        >
          <div className="changePlan-modal">
            <p className="changePlan-modal-title">Change Streaming Plan</p>
            <div className="changePlan-modal-item">
              <p className="changePlan-modal-item-title">
                CURRENT PLAN: {user.plan}
              </p>
              <p className="changePlan-modal-item-desc">
                Our best video quality in Ultra HD (4K) and HDR. Watch on any
                phone, tablet, computer or TV. USD17.99/month
              </p>
            </div>
            <div className="changePlan-modal-item">
              <p className="changePlan-modal-item-title">
                NEW PLAN: {chosenPlan}
              </p>
              <p className="changePlan-modal-item-desc">
                Great video quality in Full HD (1080p). Watch on any phone,
                tablet, computer or TV. USD13.99/month
              </p>
            </div>
            <div className="changePlan-modal-button-wrapper">
              <button onClick={submitHandler}>Confirm Change</button>
              <button
                onClick={() => {
                  $("body").css({ overflow: "auto" });
                  $(".modal").hide();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="changeplanPage-wrapper">
        <SettingHeader />
        <div className="changeplanPage">
          <p className="changeplanPage-title">Change Streaming Plan</p>
          <div className="changeplanPage-plans-wrapper">
            <div
              className={`changeplanPage-plan ${
                chosenPlan === "basic" ? "active" : ""
              }`}
              id="basic"
              onClick={() => setChosenPlan("basic")}
            >
              <div className="changeplanPage-plan-title-wrapper">
                {user.plan === "basic" && (
                  <p className="changeplanPage-plan-title-current">
                    Current Plan:
                  </p>
                )}
                <p className="changeplanPage-plan-title">Basic</p>
              </div>
              <div className="changeplanPage-plan-desc-price">
                <p className="changeplanPage-plan-desc">
                  Good video quality in SD (480p). Watch on any phone, tablet,
                  computer or TV.
                </p>
                <p className="changeplanPage-plan-price">USD8.99/month</p>
              </div>
            </div>
            <div
              className={`changeplanPage-plan ${
                chosenPlan === "standard" ? "active" : ""
              }`}
              id="standard"
              onClick={() => setChosenPlan("standard")}
            >
              <div className="changeplanPage-plan-title-wrapper">
                {user.plan === "standard" && (
                  <p className="changeplanPage-plan-title-current">
                    Current Plan:
                  </p>
                )}{" "}
                <p className="changeplanPage-plan-title">Standard</p>
              </div>
              <div className="changeplanPage-plan-desc-price">
                <p className="changeplanPage-plan-desc">
                  Great video quality in Full HD (1080p). Watch on any phone,
                  tablet, computer or TV.
                </p>{" "}
                <p className="changeplanPage-plan-price">USD13.99/month</p>
              </div>
            </div>
            <div
              onClick={() => setChosenPlan("premium")}
              className={`changeplanPage-plan ${
                chosenPlan === "premium" ? "active" : ""
              }`}
              id="premium"
            >
              <div className="changeplanPage-plan-title-wrapper">
                {user.plan === "premium" && (
                  <p className="changeplanPage-plan-title-current">
                    Current Plan:
                  </p>
                )}{" "}
                <p className="changeplanPage-plan-title">Premium</p>
              </div>
              <div className="changeplanPage-plan-desc-price">
                <p className="changeplanPage-plan-desc">
                  Our best video quality in Ultra HD (4K) and HDR. Watch on any
                  phone, tablet, computer or TV.
                </p>{" "}
                <p className="changeplanPage-plan-price">USD17.99/month</p>
              </div>
            </div>
          </div>
          <p className="changeplanPage-desc">
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. Not all
            content is available in all resolutions. See our Terms of Use for
            more details.
          </p>
          <p className="changeplanPage-desc">
            Only people who live with you may use your account. Watch on 4
            different devices at the same time with Premium, 2 with Standard,
            and 1 with Basic and Mobile.
          </p>
          <div className="changeplanPage-button-wrapper">
            {chosenPlan === user.plan ? (
              <button disabled>Continue</button>
            ) : (
              <button onClick={showModal}>Continue</button>
            )}
            <button onClick={() => history.replace("/YourAccount")}>
              Go Back
            </button>
          </div>
        </div>
        <div className="changeplanPage-footer-wrapper">
          <Footer />{" "}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Changeplan;
