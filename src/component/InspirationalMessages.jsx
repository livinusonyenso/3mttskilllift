import React, { useState, useEffect } from 'react';

const messages = [
  "Pursue your dreams with passion and determination.",
  "Overcome every challenge that stands in your way.",
  "Believe in your potential to make a difference.",
  "Take the first step, and keep moving forward.",
  "You have the power to shape your future.",
  "Success is within reach—stay focused and resilient.",
];

function Typewriter() {
  const [displayedText, setDisplayedText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < messages[messageIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + messages[messageIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Typing speed

      return () => clearTimeout(timeout);
    } else {
      const pauseTimeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }, 2000); // Pause between messages

      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, messageIndex]);

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl md:text-5xl font-bold text-green-600 mb-4">
        <span>{displayedText}</span>
        <span className="blinking-cursor">|</span>
      </h1>
      <style jsx>{`
        .blinking-cursor {
          opacity: 1;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
      
    </div>
  );
}

export default Typewriter;
