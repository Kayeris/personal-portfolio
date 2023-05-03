import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';

import "../styles/projects.css"

import {faPaintbrush} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'


function ProjectDiv() {

  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);
  const [flip4, setFlip4] = useState(false);
  const [flip5, setFlip5] = useState(false);
  const [flip6, setFlip6] = useState(false);
  // const [flip, setFlip] = useState(false);


  return (
    <div className="project-cards">
      <div className="projects">
        <h2 className="proj-header">Projects</h2>
        {/* const element = <FontAwesomeIcon icon={faAlternateGithub} /> */}

        <div className="card-grid">
          <ReactCardFlip isFlipped={flip1} flipDirection="vertical">
            <div className="card-box card1-front" onClick={() => setFlip1(!flip1)}></div>
            <div className="card-box card1-back" onClick={() => setFlip1(!flip1)}>
              <h4 className="card-title">Project Pomodoro</h4>
              <p>A browser extension that enables students to improve their study 
                habits by incorporating the Pomodoro technique without having to rely on external apps or tools</p>
                <div className="link-icons">
                  <FontAwesomeIcon icon={faCode} style={{color: "#ffffff",}} />
                  <FontAwesomeIcon icon={faPaintbrush} style={{color: "#ffffff",}} />
                </div>
            </div>
          </ReactCardFlip>
          <ReactCardFlip isFlipped={flip2} flipDirection="vertical">
            <div className="card-box card2-front" onClick={() => setFlip2(!flip2)}></div>
            <div className="card-box card1-back" onClick={() => setFlip2(!flip2)}>
            <h4 className="card-title">TrackFolio</h4>
              <p>A real-time mobile application designed to help freelancers and business owners 
                effectively manage their projects, clients, tasks, and team members for better company growth. </p>
                <div className="link-icons">
                  <FontAwesomeIcon icon={faCode} style={{color: "#ffffff",}} />
                  <FontAwesomeIcon icon={faPaintbrush} style={{color: "#ffffff",}} />
                </div>
            </div>
          </ReactCardFlip>
          <ReactCardFlip isFlipped={flip3} flipDirection="vertical">
            <div className="card-box card3-front" onClick={() => setFlip3(!flip3)}></div>
            <div className="card-box card1-back" onClick={() => setFlip3(!flip3)}>
            <h4 className="card-title">Personal Portfolio</h4>
              <p>My portfolio of my past, present and future work. Integrated particle.js and dynamic animation styles into the design, 
                resulting in a sleek and clean visual aesthetic for the project.</p>
                <div className="link-icons">
                  <FontAwesomeIcon icon={faCode} style={{color: "#ffffff",}} />
                  <FontAwesomeIcon icon={faPaintbrush} style={{color: "#ffffff",}} />
                </div>
            </div>
          </ReactCardFlip>
        </div>
        <div className="card-grid">
          <ReactCardFlip isFlipped={flip4} flipDirection="vertical">
            <div className="card-box card4-front" onClick={() => setFlip4(!flip4)}></div>
            <div className="card-box card1-back" onClick={() => setFlip4(!flip4)}>
            <h4 className="card-title">Design Revamping</h4>
            <p>For the sake of learning and exploration, I take pre-existing designs and remake them in my own vision!</p>
            <div className="link-icons">
              <FontAwesomeIcon icon={faCode} style={{color: "#ffffff",}} />
              <FontAwesomeIcon icon={faPaintbrush} style={{color: "#ffffff",}} />
            </div>
            </div>
          </ReactCardFlip>
          <ReactCardFlip isFlipped={flip5} flipDirection="vertical">
            <div className="card-box card5-front" onClick={() => setFlip5(!flip5)}></div>
            <div className="card-box card1-back" onClick={() => setFlip5(!flip5)}>
            <h4 className="card-title">Project Lowkation</h4>
            <p>A progressive web application that enables users to sign up and contribute to 
              a growing collection of hidden locations around the world</p>
            <div className="link-icons">
              <FontAwesomeIcon icon={faCode} style={{color: "#ffffff",}} />
              <FontAwesomeIcon icon={faPaintbrush} style={{color: "#ffffff",}} />
            </div>
            </div>
          </ReactCardFlip>
          <ReactCardFlip isFlipped={flip6} flipDirection="vertical">
            <div className="card-box card6-front" onClick={() => setFlip6(!flip6)}></div>
            <div className="card-box card1-back" onClick={() => setFlip6(!flip6)}>
            <h4 className="card-title">PACS</h4>
            <p>A unique storage solution involving facilities that have lockers of all shapes and sizes. 
              Receive all your purchases in one convenient location, for your ease!</p>
            <div className="link-icons">
              <FontAwesomeIcon icon={faCode} style={{color: "#ffffff",}} />
              <FontAwesomeIcon icon={faPaintbrush} style={{color: "#ffffff",}} />
            </div>
            </div>
          </ReactCardFlip>
        </div>

      </div>

    </div>

  );
}

export default ProjectDiv;