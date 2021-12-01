import React, { useEffect, useState } from "react";
import { Check, Computer, PhoneIphone, Tablet, Tv } from "@material-ui/icons";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./Planform.scss";
const Planform = () => {
  const [chosenPlan, setChosenPlan] = useState(
    localStorage.getItem("plan") ? localStorage.getItem("plan") : "premium"
  );
  useEffect(() => {
    localStorage.setItem("plan", chosenPlan);
    $(document).ready(function () {
      $("#" + localStorage.getItem("plan") + "*").addClass("active");
      $(".planform-table-top-item").click(function (e) {
        const chosen = this.id;
        setChosenPlan(chosen);
        $(".planform-table-top-item").removeClass("active");
        $(".planform-table-item-option").removeClass("active");
        $("#" + chosen + "*").addClass("active");
      });
    });
  }, [chosenPlan]);
  return (
    <div className="register-planform">
      <div className="register-planform-top">
        <p className="register-planform-stepNum">
          Step <b>2</b> of <b>3</b>
        </p>
        <h2 className="register-planform-title">
          Choose the plan that’s right for you
        </h2>
        <p className="register-planform-desc">
          <Check className="register-planform-desc-icon" /> Watch all you want.
          Ad-free.
        </p>
        <p className="register-planform-desc">
          <Check className="register-planform-desc-icon" /> Recommendations just
          for you.
        </p>
        <p className="register-planform-desc">
          <Check className="register-planform-desc-icon" />
          Change or cancel your plan anytime.
        </p>
      </div>
      <div className="register-planform-plan">
        <div className="register-planform-table">
          <div className="planform-table-top">
            <div className="planform-table-top-title"></div>
            <div className="planform-table-top-item" id="mobile">
              <p className="planform-table-top-item-name">Mobile</p>
            </div>
            <div className="planform-table-top-item" id="basic">
              <p className="planform-table-top-item-name">Basic</p>
            </div>
            <div className="planform-table-top-item" id="standard">
              <p className="planform-table-top-item-name">Standard</p>
            </div>
            <div className="planform-table-top-item" id="premium">
              <p className="planform-table-top-item-name ">Premium</p>
            </div>
          </div>
          <div className="planform-table-item">
            <p className="planform-table-item-title">Monthly price</p>
            <div>
              <p className="planform-table-item-option" id="mobile">
                70,000đ
              </p>
              <p className="planform-table-item-option" id="basic">
                180,000đ
              </p>
              <p className="planform-table-item-option" id="standard">
                220,000đ
              </p>
              <p className="planform-table-item-option" id="premium">
                260,000đ
              </p>
            </div>
          </div>
          <div className="planform-table-item">
            <p className="planform-table-item-title">Video quality</p>
            <div>
              <p className="planform-table-item-option" id="mobile">
                Good
              </p>
              <p className="planform-table-item-option" id="basic">
                Good
              </p>
              <p className="planform-table-item-option" id="standard">
                Better
              </p>
              <p className="planform-table-item-option" id="premium">
                Best
              </p>
            </div>
          </div>
          <div className="planform-table-item">
            <p className="planform-table-item-title">Resolution</p>
            <div>
              {" "}
              <p className="planform-table-item-option" id="mobile">
                480p
              </p>
              <p className="planform-table-item-option" id="basic">
                480p
              </p>
              <p className="planform-table-item-option" id="standard">
                1080p
              </p>
              <p className="planform-table-item-option " id="premium">
                4K+HDR
              </p>
            </div>
          </div>
          <div className="planform-table-item device">
            <p className="planform-table-item-title">
              Devices you can use to watch
            </p>
            <div>
              <div className="planform-table-item-option" id="mobile">
                <div className="planform-table-device-item">
                  <p>
                    <PhoneIphone className="planform-table-device-item-icon" />
                  </p>
                  <p> Phone</p>
                </div>
                <div className="planform-table-device-item">
                  <p>
                    <Tablet className="planform-table-device-item-icon" />
                  </p>
                  <p> Tablet</p>
                </div>
                <div className="planform-table-device-item"></div>{" "}
                <div className="planform-table-device-item"></div>
              </div>
              <div className="planform-table-item-option" id="basic">
                <div className="planform-table-device-item">
                  <p>
                    <PhoneIphone className="planform-table-device-item-icon" />
                  </p>
                  <p> Phone</p>
                </div>
                <div className="planform-table-device-item">
                  <p>
                    <Tablet className="planform-table-device-item-icon" />
                  </p>
                  <p> Tablet</p>
                </div>
                <div className="planform-table-device-item">
                  <p>
                    <Computer className="planform-table-device-item-icon" />
                  </p>
                  <p>Computer</p>
                </div>
                <div className="planform-table-device-item">
                  <p>
                    <Tv className="planform-table-device-item-icon" />{" "}
                  </p>
                  <p>TV</p>
                </div>
              </div>
              <div className="planform-table-item-option" id="standard">
                <div className="planform-table-device-item">
                  <p>
                    <PhoneIphone className="planform-table-device-item-icon" />
                  </p>
                  <p> Phone</p>
                </div>
                <div className="planform-table-device-item">
                  <p>
                    <Tablet className="planform-table-device-item-icon" />
                  </p>
                  <p> Tablet</p>
                </div>
                <div className="planform-table-device-item">
                  <p>
                    <Computer className="planform-table-device-item-icon" />
                  </p>
                  <p>Computer</p>
                </div>
                <div className="planform-table-device-item">
                  <p>
                    <Tv className="planform-table-device-item-icon" />{" "}
                  </p>
                  <p>TV</p>
                </div>
              </div>
              <div className="planform-table-item-option" id="premium">
                <div className="planform-table-device-item">
                  <p>
                    <PhoneIphone className="planform-table-device-item-icon" />
                  </p>
                  <p> Phone</p>
                </div>
                <div className="planform-table-device-item">
                  <p>
                    <Tablet className="planform-table-device-item-icon" />
                  </p>
                  <p> Tablet</p>
                </div>
                <div className="planform-table-device-item">
                  <p>
                    <Computer className="planform-table-device-item-icon" />
                  </p>
                  <p>Computer</p>
                </div>
                <div className="planform-table-device-item">
                  <p>
                    <Tv className="planform-table-device-item-icon" />{" "}
                  </p>
                  <p>TV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="register-planform-note">
          <p>
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. Not all
            content is available in all resolutions. See our
            <a className="link" href="#">
              Terms of Use
            </a>
            for more details.
          </p>
          <p>
            Only people who live with you may use your account. Watch on 4
            different devices at the same time with Premium, 2 with Standard,
            and 1 with Basic and Mobile.
          </p>
        </div>
      </div>
      <div className="register-planform-bottom">
        <Link to="/signup/payment" className="link">
          <button className="register-planform-button">Next </button>
        </Link>
      </div>
    </div>
  );
};

export default Planform;
