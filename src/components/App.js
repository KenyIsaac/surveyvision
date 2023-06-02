import React, { useState, useEffect } from 'react';
import SurveyForm from './SurveyForm';
import Result from './Result';
import '../styles/App.css';
import Spinner from './Spinner';

function App() {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [showSurvey, setShowSurvey] = useState(false);

  useEffect(() => {
    // Simulamos un retardo de carga de 5 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Limpieza del timer cuando el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (name.trim() !== '') {
      setShowSurvey(true);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (!showSurvey) {
    return (
      <div className="app">
        <h1>Bienvenido a la encuesta para saber si tienes problema de visión</h1>
        <p>Por favor ingresa tu nombre y apellido:</p>
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={name} onChange={handleNameChange} placeholder="Nombre y apellido" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Encuesta de Problemas de Visión</h1>
      <SurveyForm />
      <Result />
    </div>
  );
}

export default App;
