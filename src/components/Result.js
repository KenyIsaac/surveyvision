import React from 'react';

const Result = ({ name, age, occupation }) => {
  return (
    <div className="result">
      <h2>¡Gracias por completar la encuesta!</h2>
      <p>Nombre: {name}</p>
      <p>Edad: {age}</p>
      <p>Ocupación: {occupation}</p>
    </div>
  );
};

export default Result;
