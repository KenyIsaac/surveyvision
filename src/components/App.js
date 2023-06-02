// App.js

import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const questions = [
    {
      question: 'Su hijo se salta palabras o sigue con el dedo las palabras cuando realiza una lectura?',
      options: ['Si', 'No', 'Ocasionalmente']
    },
    {
      question: 'Su hijo cambia palabras o confunde letras como P, D, B?',
      options: ['Si', 'No', 'No lo he notado']
    },
    {
      question: 'Su hijo presenta constantes dolores de cabeza cuando realiza esfuerzos visuales?',
      options: ['Si', 'No', 'No lo he notado']
    },
    {
      question: 'Ha evidenciado si su hijo después de realizar actividades físicas presenta picazón o enrojecimiento en los ojos?',
      options: ['No', 'Si', 'No lo he tenido en cuenta']
    },
    {
      question: '¿Cuántas horas está el niño conectado con dispositivos electrónicos como celular, tablet, PC?',
      options: ['1 hora', 'Más de 3 horas', 'Nunca se conecta']
    },
    {
      question: 'Su hijo tiende a entrecerrar los ojos para poder enfocar imágenes, lecturas u objetos?',
      options: ['Si', 'No', 'No lo he notado']
    },
    {
      question: 'En su familia hay antecedentes de enfermedades visuales?',
      options: ['Si', 'No']
    },
    {
      question: 'Su hijo escribe con mala letra u ortografía, no se mantiene sobre la línea de escritura y es desordenado?',
      options: ['Si', 'No', 'No lo he notado']
    },
    {
      question: 'Su hijo tiene baja comprensión lectora, dificultad de atención o concentración?',
      options: ['Si', 'No', 'No lo he notado', 'A veces']
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [noCount, setNoCount] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
      if (selectedOption === 'No') {
        setNoCount(noCount + 1);
      }
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const showResults = () => {
    return (
      <h2 className="results-message">
        {noCount > 5
          ? 'Le recomendamos acudir a un especialista'
          : 'Su hijo presenta buenos hábitos visuales'}
      </h2>
    );
  };

  return (
    <div className="container">
      <h1 className="title">Clínica Oftálmica</h1>
      {currentQuestion === questions.length - 1 ? (
        showResults()
      ) : (
        <>
          <h2 className="question">{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options && (
            <ul className="options-list">
              {questions[currentQuestion].options.map((option, index) => (
                <li className="option-item" key={index}>
                  <input
                    type="radio"
                    id={option}
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor={option}>{option}</label>
                </li>
              ))}
            </ul>
          )}
          <button className="next-button" onClick={handleNextQuestion}>
            Siguiente
          </button>
        </>
      )}
    </div>
  );
};

export default App;
