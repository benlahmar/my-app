import React, { useState, useEffect } from 'react';

const QuizTimer = ({ duration, children }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return children(timeLeft);
};

export default QuizTimer;