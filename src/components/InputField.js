import React from 'react';

const InputField = ({ onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Ingrese su nombre"
      onChange={handleInputChange}
    />
  );
};

export default InputField;
