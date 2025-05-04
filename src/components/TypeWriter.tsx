
import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  texts: string[];
  delay?: number;
  className?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ 
  texts, 
  delay = 2000,
  className = "" 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Current full text
      const fullText = texts[currentTextIndex];
      
      // If deleting
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50); // Faster when deleting
      } else {
        // If typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150); // Normal typing speed
      }
      
      // If completed typing the full word
      if (!isDeleting && currentText === fullText) {
        // Wait before starting to delete
        setTimeout(() => setIsDeleting(true), delay);
        setTypingSpeed(delay);
      }
      
      // If finished deleting
      if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        setTypingSpeed(500); // Pause before typing next text
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, delay, typingSpeed]);

  return (
    <span className={`${className} inline-block`}>
      {currentText}<span className="border-r-4 border-techy-green animate-cursor-blink">&nbsp;</span>
    </span>
  );
};

export default TypeWriter;
