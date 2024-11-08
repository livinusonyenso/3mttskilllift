import React from "react";

const mentors = [
  { name: "John Doe", expertise: "React" },
  { name: "Jane Smith", expertise: "JavaScript" },
];

function Mentorship() {
  return (
    <div>
      <h2>Mentorship Area</h2>
      <ul>
        {mentors.map((mentor, index) => (
          <li key={index}>
            <h3>{mentor.name}</h3>
            <p>Expertise: {mentor.expertise}</p>
            <button>Contact</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Mentorship;
