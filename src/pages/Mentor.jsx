import React, { useContext, useEffect } from 'react';
import MentorSlider from '../component/MentorSlider';
import CommunityManagerSlider from '../component/CMSlider';
import Testimonials from '../component/Testimonials'
import { logginContext } from '../App';

function Mentor() {
  const login = useContext(logginContext)

  useEffect(()=>{
    console.log(login)

  })
  return (
    <div className="page-content">
      <h2>Mentor Page</h2>
      <p>Welcome to the Mentor page! Here, you can find resources and connect with mentors.</p>
  <MentorSlider/>
  <CommunityManagerSlider/>
  <Testimonials />
    </div>
  );
}

export default Mentor;
