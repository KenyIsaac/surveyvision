import React from 'react';

const Result = ({ name, results }) => {
  const totalQuestions = results.length;
  const positiveAnswers = results.filter((answer) => answer === 'positivo')
    .length;

  return (
    <div>
      <h2>Resultados de la Encuesta</h2>
      <p>Nombre: {name}</p>
      <p>Total de preguntas: {totalQuestions}</p>
      <p>Respuestas positivas: {positiveAnswers}</p>
      <p>
        Resultado:{' '}
        {positiveAnswers >= totalQuestions / 2 ? 'Positivo' : 'Negativo'}
      </p>
    </div>
  );
};

export default Result;
