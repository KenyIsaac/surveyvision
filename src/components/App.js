import React from 'react';
import '../styles/App.css';
import SurveyForm from './SurveyForm';

function App() {
  const handleSubmit = (formData) => {
    // Lógica para manejar el envío de datos de la encuesta
    console.log(formData);
  };

  return (
    <div className="container">
      <h1 className="header">Encuesta</h1>
      <SurveyForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
