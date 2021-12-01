import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";
import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-socialmedia">
        <Facebook className="footer-socialmedia-icon" />
        <Instagram className="footer-socialmedia-icon" />
        <Twitter className="footer-socialmedia-icon" />
        <YouTube className="footer-socialmedia-icon" />
      </div>
      <div className="footer-links">
        <div className="footer-links-container">
          <a href="#" className="footer-link-item link">
            Audio and Subtitles
          </a>
        </div>
        <div className="footer-links-container">
          <a href="#" className="footer-link-item link">
            Media Center
          </a>
        </div>
        <div className="footer-links-container">
          <a href="#" className="footer-link-item link">
            Privacy
          </a>
        </div>
        <div className="footer-links-container">
          <a href="#" className="footer-link-item link">
            Contact Us
          </a>
        </div>

        <div className="footer-links-container">
          <a href="#" className="footer-link-item link">
            Audio Description
          </a>
        </div>
        <div className="footer-links-container">
          <a href="#" className="footer-link-item link">
            Invester Relations
          </a>
        </div>
        <div className="footer-links-container">
          <a href="#" className="footer-link-item link">
            Legal Notices
          </a>
        </div>
        <div className="footer-links-container">
          <a href="#" className="footer-link-item link">
            Help Center
          </a>
        </div>
        <div className="footer-links-container">
          <a href="#" className="footer-link-item link">
            Jobs
          </a>
        </div>
        <div className="footer-links-container">
          <a href="#" className="footer-link-item link">
            Cookie Preferences
          </a>
        </div>
        <div className="footer-links-container">
          <a href="#" className="footer-link-item link">
            Gift Cards
          </a>
        </div>
        <div className="footer-links-container">
          <a href="#" className="footer-link-item link">
            Terms of Uses
          </a>
        </div>
        <div className="footer-links-container">
          <a href="#" className="footer-link-item link">
            Corporate Information
          </a>
        </div>
      </div>
      <div className="footer-service">
        <a className="footer-service-code link" href="#">
          Service Code
        </a>
      </div>
      <div className="footer-copyright">
        <p>&copy; 1997-2021 Netflix, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
