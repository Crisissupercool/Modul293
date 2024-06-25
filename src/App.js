import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TripList from './components/TripList';
import AddTrip from './components/AddTrip';

const App = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/businessTrips')
      .then(response => response.json())
      .then(data => setTrips(data));
  }, []);

  const handleAddTrip = (newTrip) => {
    setTrips([...trips, newTrip]);
  };

  const handleDeleteTrip = (id) => {
    fetch(`http://localhost:3001/businessTrips/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setTrips(trips.filter(trip => trip.id !== id));
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Business Trips and Flights</h1>
        <AddTrip onAdd={handleAddTrip} />
        <TripList trips={trips} onDelete={handleDeleteTrip} />
      </div>
    </div>
  );
};

export default App;
