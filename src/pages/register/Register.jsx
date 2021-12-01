import "./Register.scss";
import $ from "jquery";
import { Add, ChevronRight, Close } from "@material-ui/icons";
import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
const Register = () => {
  const history = useHistory();
  const invalidMessage = useRef();
  const emailInputRef = useRef();
  const [email, setEmail] = useState(
    localStorage.getItem("initialEmail") || ""
  );
  const [emailIsValid, setEmailIsValid] = useState(
    (email.includes("@") &&
      email.split("@").length !== 2 &&
      email.indexOf("@") !== email.length - 1) ||
      email === ""
  );
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const registerBegin = (e) => {
    localStorage.setItem("initialEmail", email);
    if (
      localStorage.getItem("initialEmail") === "" ||
      localStorage.getItem("initialEmail") === null ||
      !emailIsValid
    ) {
      $(".invalid-input").css({ display: "block" });
      $(".email-input").css({ border: "2px solid orange" });
    } else {
      history.push("/signup/registration");
    }
  };

  useEffect(() => {
    $(document).ready(function () {
      $(".question").click(function (e) {
        var chosen = this.id;
        $(".answer").removeClass("active");
        $("#a" + chosen).addClass("active");
        $(".questionCloseIcon").click(function (event) {
          event.preventDefault();
          event.stopPropagation();
        });
        $(`#${chosen} > .questionCloseIcon`).css({
          transform: "rotate(45deg)",
          transition: "transform 0.3s",
        });
      });
      $(".questionCloseIcon").click(function () {
        $(".answer").removeClass("active");
        $(this).css({
          transform: "rotate(-90deg)",
        });
      });
    });
    setEmailIsValid(
      (email.includes("@") &&
        email.split("@").length === 2 &&
        email.indexOf("@") !== email.length - 1) ||
        email === ""
    );
  }, [email]);
  console.log("include @", email.includes("@"));
  console.log("splilt", email.split("@").length);
  console.log("index", email.indexOf("@") !== email.length - 1);
  console.log(email === "");
  return (
    <div className="register">
      <div className="home">
        <nav className="register-home-header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/login">
            <button className="button">Sign In</button>
          </Link>
        </nav>
        <div className="main">
          <div>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="input">
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  onChange={emailHandler}
                  value={email}
                  className="email-input"
                  ref={emailInputRef}
                />
                <p className="invalid-input" ref={invalidMessage}>
                  {email === "" && "Email is required!"}
                  {!emailIsValid && "Please enter a valid email!"}
                </p>
              </div>
              <button className="registerButton" onClick={registerBegin}>
                <span>Get Started</span>{" "}
                <ChevronRight className="registerButton-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-1 text">
          <h1>Enjoy on your TV.</h1>
          <h2>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </div>
        <div className="col-2 img">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <div className="col-1 img">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          />
        </div>
        <div className="col-2 text converseOrder">
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favorites easily and always have something to watch.
          </h2>
        </div>
      </div>
      <div className="container watchEverywhere">
        <div className="col-1 text">
          <h1>Watch everywhere.</h1>
          <h2>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="col-1 img">
          <img
            src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
            alt=""
          />
        </div>
        <div className="col-2 text converseOrder">
          <h1>Create profiles for kids.</h1>
          <h2>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </h2>
        </div>
      </div>
      <div className="FAQ">
        <h1>Frequently Asked Questions</h1>
        <div className="QAs">
          <div className="QA">
            <div className="question" id="q1">
              <p>What is Netflix?</p>
              <Add className="questionCloseIcon" style={{ fontSize: "28px" }} />
            </div>
            <div className="answer" id="aq1">
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more
                on thousands of internet-connected devices.
              </p>
              <p>
                You can watch as much as you want, whenever you want without a
                single commercial – all for one low monthly price. There's
                always something new to discover and new TV shows and movies are
                added every week!
              </p>
            </div>
          </div>
          <div className="QA">
            <div className="question" id="q2">
              <p>How much does Netflix cost?</p>
              <Add className="questionCloseIcon" style={{ fontSize: "28px" }} />
            </div>
            <div className="answer" id="aq2">
              <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from 70,000 ₫ to 260,000 ₫ a month. No extra costs, no
                contracts.
              </p>
            </div>
          </div>
          <div className="QA">
            <div className="question" id="q3">
              <p>Where can I watch?</p>
              <Add className="questionCloseIcon" style={{ fontSize: "28px" }} />
            </div>
            <div className="answer" id="aq3">
              <p>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
              </p>
              <p>
                You can also download your favorite shows with the iOS, Android,
                or Windows 10 app. Use downloads to watch while you're on the go
                and without an internet connection. Take Netflix with you
                anywhere.
              </p>
            </div>
          </div>
          <div className="QA">
            <div className="question" id="q4">
              <p>How do I cancel?</p>
              <Add className="questionCloseIcon" style={{ fontSize: "28px" }} />
            </div>
            <div className="answer" id="aq4">
              <p>
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </p>
            </div>
          </div>
          <div className="QA">
            <div className="question" id="q5">
              <p>What can I watch on Netflix?</p>
              <Add className="questionCloseIcon" style={{ fontSize: "28px" }} />
            </div>
            <div className="answer" id="aq5">
              <p>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </p>
            </div>
          </div>
          <div className="QA">
            <div className="question" id="q6">
              <p>Is Netflix good for kids</p>
              <Add className="questionCloseIcon" style={{ fontSize: "28px" }} />
            </div>
            <div className="answer" id="aq6">
              <p>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and movies in their own space.
              </p>
              <p>
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don’t want kids to see.
              </p>
            </div>
          </div>
        </div>
        <div className="FAQ-input">
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div>
            <div>
              <input
                type="text"
                placeholder="Email address"
                onChange={emailHandler}
                value={email}
                ref={emailInputRef}
              />
              <p ref={invalidMessage}>Email is required!</p>
            </div>
            <button className="registerButton" onClick={registerBegin}>
              <span>Get Started</span>{" "}
              <ChevronRight className="registerButton-icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="register-footer">
        <div className="register-footer-top">
          <a className="link register-footer-top-link" href="#">
            Questions? Contact us.
          </a>
        </div>
        <div className="register-footer-links">
          <div className="register-footer-container">
            <a href="#" className="link register-footer-link">
              FAQ
            </a>
          </div>
          <div className="register-footer-container">
            <a href="#" className="link register-footer-link">
              Investor Relations
            </a>
          </div>
          <div className="register-footer-container">
            <a href="#" className="link register-footer-link">
              Privacy
            </a>
          </div>
          <div className="register-footer-container">
            <a href="#" className="link register-footer-link">
              Speed Test
            </a>
          </div>
          <div className="register-footer-container">
            <a href="#" className="link register-footer-link">
              Help Center
            </a>
          </div>
          <div className="register-footer-container">
            <a href="#" className="link register-footer-link">
              Jobs
            </a>
          </div>
          <div className="register-footer-container">
            <a href="#" className="link register-footer-link">
              Cookie Preferences
            </a>
          </div>
          <div className="register-footer-container">
            <a href="#" className="link register-footer-link">
              Legal Notices
            </a>
          </div>
          <div className="register-footer-container">
            <a href="#" className="link register-footer-link">
              Account
            </a>
          </div>
          <div className="register-footer-container">
            <a href="#" className="link register-footer-link">
              Ways to Watch
            </a>
          </div>
          <div className="register-footer-container">
            <a href="#" className="link register-footer-link">
              Corporate Information
            </a>
          </div>
          <div className="register-footer-container">
            <a href="#" className="link register-footer-link">
              Only on Netflix
            </a>
          </div>
          <div className="register-footer-container">
            <a href="#" className="link register-footer-link">
              Media Center
            </a>
          </div>
          <div className="register-footer-container">
            <a href="#" className="link register-footer-link">
              Terms of Use
            </a>
          </div>
          <div className="register-footer-container">
            <a href="#" className="link register-footer-link">
              Contact Us
            </a>
          </div>
        </div>
        <p className="register-footer-country">Netflix Vietnam</p>
      </div>
    </div>
  );
};

export default Register;
