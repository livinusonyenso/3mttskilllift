import React from 'react';
import MenteeRegistrationForm from '../component/Mentee';

function RegisterMentee() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-green-600 text-2xl font-bold mb-4">Register as a Mentee</h2>
      <p className='text-sm font-bold mb-4'>Sign up as a mentee to receive guidance from experienced mentors in your tech journey.</p>
    <MenteeRegistrationForm />
    </div>
  );
}

export default RegisterMentee;
