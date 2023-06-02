import React, { useState } from 'react';
import InputField from './InputField';

const SurveyForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState([]);
  const questions = [
    // Aquí puedes agregar tus 20 preguntas
  ];

  const handleAnswerChange = (questionIndex, answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = answer;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Encuesta</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question}</h3>
          <InputField
            onChange={(answer) => handleAnswerChange(index, answer)}
          />
        </div>
      ))}
      <button type="submit">Finalizar Encuesta</button>
    </form>
  );
};

export default SurveyForm;
