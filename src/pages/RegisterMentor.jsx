import React from 'react';
import MentorRegistrationForm from '../component/MentorRegistration';

function RegisterMentor() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-green-600 text-2xl font-bold mb-4">Register as a Mentor</h2>
      <p className='text-sm font-bold mb-4'>Register to become a mentor and help guide new learners through their journey.</p>
   <MentorRegistrationForm/>
    </div>
  );
}

export default RegisterMentor;
