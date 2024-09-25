import React, { useState } from 'react';
import Answer from './components/Answer';

const App = () => {
  const [score, setScore] = useState(0);
  const [a, setA] = useState(generateRandomNumber());
  const [b, setB] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10); 
  }

  const updatePoints = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setScore(score - 1); 
    }
 
    setA(generateRandomNumber());
    setB(generateRandomNumber());
  };

  return (
    <div className="container"> {}
    <h2>Ваши очки: {score}</h2>
    <h3> {a} + {b} = ?</h3>
    <Answer a={a} b={b} updatePoints={updatePoints} />
  </div>
  );
};

export default App;

