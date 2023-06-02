import React, { useState } from 'react';
import InputField from './InputField';
import LoadingScreen from './LoadingScreen';
import Result from './Result';

const SurveyForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulación de una llamada asincrónica
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      onSubmit({ name, age, occupation });
    }, 3000);
  };

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : isSubmitted ? (
        <Result name={name} age={age} occupation={occupation} />
      ) : (
        <form onSubmit={handleSubmit}>
          <InputField label="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
          <InputField label="Edad" value={age} onChange={(e) => setAge(e.target.value)} />
          <InputField label="Ocupación" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default SurveyForm;
