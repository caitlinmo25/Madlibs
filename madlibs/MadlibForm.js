// MadlibForm.js
import React, { useState } from 'react';

function MadlibForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    noun: '',
    noun2: '',
    adjective: '',
    color: ''
  });

  const isFormValid = () => {
    return Object.values(formData).every(value => value.trim() !== '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      onSubmit(formData);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="noun" placeholder="noun" value={formData.noun} onChange={handleChange} required />
      <input name="noun2" placeholder="noun2" value={formData.noun2} onChange={handleChange} required />
      <input name="adjective" placeholder="adjective" value={formData.adjective} onChange={handleChange} required />
      <input name="color" placeholder="color" value={formData.color} onChange={handleChange} required />
      <button type="submit">Get Story</button>
    </form>
  );
}

export default MadlibForm;
