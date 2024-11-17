import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-green-600 font-bold text-2xl"><Link to='/'>SkillLift</Link></div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden text-green-600 text-2xl cursor-pointer z-30" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links (hidden on mobile, visible on md screens and up) */}
        <ul
          className={`md:flex md:items-center md:space-x-8 text-green-600 font-semibold transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          } absolute md:relative top-0 left-0 md:top-auto md:left-auto bg-white md:bg-transparent w-full md:w-auto p-6 md:p-0 z-20`}
        >
          <li className="py-2 md:py-0 hover:text-green-800">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="py-2 md:py-0 hover:text-green-800">
            <Link to="/dashbaord">Dashbaord</Link>
          </li> */}
          <li className="py-2 md:py-0 hover:text-green-800">
            <Link to="/mentor">Mentor</Link>
          </li>
          <li className="py-2 md:py-0 hover:text-green-800">
            <Link to="/peergroup">Peer Group</Link>
          </li>
          <li className="py-2 md:py-0 hover:text-green-800">
            <Link to="/courses">Courses</Link>
          </li>
          <li className="py-2 md:py-0 hover:text-green-800">
            <Link to="/register">Register</Link>
          </li>
          <li className="py-2 md:py-0 hover:text-green-800">
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
