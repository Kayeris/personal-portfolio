import "./styles/navbar.css";
import Logo from "../components/pages/assets/logo512.png"
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { faBars } from '@fortawesome/free-solid-svg-icons';
// import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Navbar() {

  const [showNav, setShowNav] = useState(false)

  const toggleNavItems = () => {
    setShowNav(!showNav)
  }

  return (
    <div className="navbar">
      <FontAwesomeIcon className='menu' size='2x' icon={faBars} />
      <div className="navlinks">
        <div className="link-div">
          <NavLink className="navlink-style" to="/" style={({ isActive }) => ({
            color: isActive ? '#51C8C0' : 'white'
          })}>
            <img className="nav-icon" src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div className="link-div">
          <NavLink className="navlink-style" to="/blog" style={({ isActive }) => ({
            color: isActive ? '#51C8C0' : 'white'
          })}>
            Blog
          </NavLink>
        </div>
        <div className="link-div">
          <NavLink className="navlink-style" to="/zworld" style={({ isActive }) => ({
            color: isActive ? '#4B3394' : 'white'
          })}>
            Z-World
          </NavLink>
        </div>
        <div className="link-div">
          <NavLink className="navlink-style" to="/#contact" style={({ isActive }) => ({
            color: isActive ? '#79D8AB' : 'white'
          })}>
            Contact
          </NavLink>
        </div>

      </div>
    </div>


  );
}

export default Navbar;