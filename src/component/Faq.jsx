import React, { useState } from 'react';

const faqData = [
  {
    question: "What is SkillLift?",
    answer: "SkillLift is an online learning platform that provides courses, projects, and community resources tailored for secondary school students. It empowers them to develop skills, compete effectively on a global scale, and contributes to reducing unemployment in Nigeria for the next generation.",
 
  },
  {
    question: "How do I access courses?",
    answer: "Browse our course catalog, select a course, and enroll to access its content.",

  },
  {
    question: "What is the offline feature?",
    answer: "Download courses for offline access, and sync progress when connected.",
  
  },
  {
    question: "What languages are available?",
    answer: "Our platform supports Igbo, Yoruba, and Hausa.",
    
  },
  {
    question: "Can I access all courses offline?",
    answer: "Yes, SkillLift allows you to access courses offline by downloading them directly on the platform. The platform syncs your progress and updates any new content automatically during the weekend when connected to the internet.",
   
  },
  {
    question: "How do I report technical issues?",
    answer: "Contact our support team.",
   
  },
  {
    question: "Can I interact with instructors?",
    answer: "Yes, through discussion forums.",
    
  },
  {
    question: "How do I contact support?",
    answer: "Email [support email], phone [support number], or live chat.",

  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-8">SkillLift FAQs</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left text-lg font-semibold text-gray-700 flex justify-between items-center py-4"
            >
              {faq.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="pl-4 pr-2 pb-4 transition-all duration-500 ease-in-out text-gray-600">
                <p className="mb-2">{faq.answer}</p>
                
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
