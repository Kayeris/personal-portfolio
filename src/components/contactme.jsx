import React from "react";

import "../styles/contactme.css"

import fieldBench from "../assets/fieldbench.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import instaIcon from "../assets/fontawesome/instagram.svg"
import twitterIcon from "../assets/fontawesome/twitter.svg"
import githubIcon from "../assets/fontawesome/github.svg"
import linkedinIcon from "../assets/fontawesome/linkedin.svg"


function ContactDiv() {
  return (
    <div className="contactme" id="#contact">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div className="contact-text">
          <h4>Inquiries?</h4>
          <h4>Interested in my work?</h4>
          <h4>Would you like to work together?</h4>
          <h4>Don’t hesitate to reach out by email or phone!</h4>
          <h4>Connect with me!</h4>
          <div className="contact-info">
            <FontAwesomeIcon icon={faEnvelope} />
            <p className="contact-info-text">contactme@shaiza.tech</p>
          </div>
          <div className="contact-info">
            <FontAwesomeIcon icon={faPhone} />
            <p className="contact-info-text">416-912-8654</p>
          </div>

        </div>
        <div className="contact-image">
          <img src={fieldBench} alt="" />
          <div className="icon-bar">
            <img className="icon" src={instaIcon} alt="" />
            <img className="icon" src={twitterIcon} alt="" />
            <img className="icon" src={githubIcon} alt="" />
            <img className="icon" src={linkedinIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDiv;