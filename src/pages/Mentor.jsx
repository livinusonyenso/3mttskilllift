import React, { useContext, useEffect } from 'react';
import MentorSlider from '../component/MentorSlider';
import CommunityManagerSlider from '../component/CMSlider';
import Testimonials from '../component/Testimonials';
import { AuthContext } from '../context/AuthContext'; // Updated import

function Mentor() {
  const login = useContext(AuthContext); // Updated context usage

  useEffect(() => {
    if (login) {
      console.log('User login status:', login);
    }
  }, [login]); // Added login as dependency

  return (
    <div className="page-content">
      <h2>Mentor Page</h2>
      <p>Welcome to the Mentor page! Here, you can find resources and connect with mentors.</p>
      <MentorSlider />
      <CommunityManagerSlider />
      <Testimonials />
    </div>
  );
}

export default Mentor;
