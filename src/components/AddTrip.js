import React, { useState } from 'react';
import './AddTrip.css';

const AddTrip = ({ onAdd }) => {
  const [destination, setDestination] = useState('');
  const [flight, setFlight] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!destination || !flight || !description) {
      setError('All fields are required');
      return;
    }
    const newTrip = { destination, flight, description };
    fetch('http://localhost:3001/businessTrips', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTrip)
    })
    .then(response => response.json())
    .then(data => {
      onAdd(data);
      setDestination('');
      setFlight('');
      setDescription('');
      setError('');
    });
  };

  return (
    <form className="add-trip-form" onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Flight"
        value={flight}
        onChange={(e) => setFlight(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add Trip</button>
    </form>
  );
};

export default AddTrip;
