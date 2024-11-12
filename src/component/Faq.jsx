import React, { useState } from 'react';

const faqData = [
  {
    question: "How can I download my LinkedIn certificate?",
    answer: " Answer: [Provide download steps or a link to LinkedIn’s certificate download instructions.]",
    audioUrl: "path/to/audio1.mp3",
    videoUrl: "https://youtu.be/video1",
  },
  {
    question: "Do I need to pay for my English Level 1 and Level 2 certificates?",
    answer: "MAnswer: No, there is no cost for obtaining your English Level 1 and Level 2 certificates.",
    audioUrl: "path/to/audio2.mp3",
    videoUrl: "https://youtu.be/video2",
  },
  {
    question: "How can I download my achievement badge?",
    answer: "Answer: [Provide download steps or a link to LinkedIn’s badge download instructions.]",
    audioUrl: "path/to/audio3.mp3",
    videoUrl: "https://youtu.be/video3",
  },
  {
    question: "What happens if I fail my foundational LinkedIn exam three times?",
    answer: "Answer: [Explain LinkedIn’s policy for retaking exams, including any waiting periods or limitations after multiple failed attempts.]",
    audioUrl: "path/to/audio4.mp3",
    videoUrl: "https://youtu.be/video4",
  },
  {
    question: "How do I join a peer group?",
    answer: "You can join a peer group based on your skill level to receive additional support and guidance from other learners.",
    audioUrl: "path/to/audio5.mp3",
    videoUrl: "https://youtu.be/video5",
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-8">Frequently Asked Questions</h2>
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
                <div className="flex space-x-4">
                  <a
                    href={faq.audioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  >
                    Listen to Audio
                  </a>
                  <a
                    href={faq.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
