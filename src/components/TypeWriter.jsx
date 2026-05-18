import React, { useState, useEffect } from 'react';

const Typewriter = ({ 
  words = ["Frontend Developer", "Problem Solver", "Designer"], 
  typingSpeed = 150, 
  deletingSpeed = 75, 
  pauseDuration = 2000 
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullWord = words[currentWordIndex];

    if (!isDeleting) {
      // Typing effect
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
      }, typingSpeed);

      // If word is completely typed out, pause then start deleting
      if (currentText === fullWord) {
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      // Deleting effect
      timer = setTimeout(() => {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
      }, deletingSpeed);

      // If word is fully deleted, move to the next word
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#57bcffff', borderRight: '3px solid #010effff', paddingRight: '4px', animation: 'blink 0.75s step-end infinite' }}>
      {currentText}
      <style>{`
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: #646cff; }
        }
      `}</style>
    </span>
  );
};

export default Typewriter;