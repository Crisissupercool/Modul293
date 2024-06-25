import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TripList from './components/TripList';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Business Trips and Flights</h1>
        <TripList />
      </div>
    </div>
  );
};

export default App;