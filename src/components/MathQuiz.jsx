import React, { useState } from 'react';
import Answer from './components/Answer';

const MathQuiz = () => {
  const [a, setA] = useState(Math.floor(Math.random() * 10));
  const [b, setB] = useState(Math.floor(Math.random() * 10));
  const [points, setPoints] = useState(0);

  const updatePoints = (isCorrect) => {
    setPoints(points + (isCorrect ? 1 : -1));
    setA(Math.floor(Math.random() * 10));
    setB(Math.floor(Math.random() * 10));
  };

  return (
    <div>
    
    
      <Answer a={a} b={b} updatePoints={updatePoints} />
    </div>
  );
};

export default MathQuiz;