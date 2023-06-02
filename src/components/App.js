import React, { useState } from 'react';
import SurveyForm from './SurveyForm';
import Result from './Result';
import '../styles/App.css';


function App() {
  const [name, setName] = useState('');
  const [showSurvey, setShowSurvey] = useState(true);
  const [surveyResults, setSurveyResults] = useState(null);

  const handleSurveySubmit = (results) => {
    setShowSurvey(false);
    setSurveyResults(results);
  };

  return (
    <div className={`app fade-in`}>
      <h1>Encuesta de Problemas de Visión</h1>
      {showSurvey ? (
        <SurveyForm onSubmit={handleSurveySubmit} />
      ) : (
        <Result name={name} results={surveyResults} />
      )}
    </div>
  );
}

export default App;
