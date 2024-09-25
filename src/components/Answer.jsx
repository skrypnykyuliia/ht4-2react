import React, { useState } from 'react';

const Answer = ({ a, b, updatePoints }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrect = parseInt(answer) === a + b;
    updatePoints(isCorrect);
    setAnswer(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="number" 
        value={answer} 
        onChange={(e) => setAnswer(e.target.value)} 
        placeholder="Введите ответ" 
      />
      <button type="submit">Проверить</button>
    </form>
  );
};

export default Answer;
