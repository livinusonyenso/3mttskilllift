import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1><Link to='/'>SkillLift</Link></h1>
        
      </div>
      <ul className="navbar-links">
        <li><Link to="/mentor">Mentor</Link></li>
        <li><Link to="/peergroup">Peer Group</Link></li>
        <li><Link to="/register-mentor">Register as Mentor</Link></li>
        <li><Link to="/register-mentee">Register as Mentee</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
