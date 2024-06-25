import React from 'react';
import './TripList.css';

const trips = [
  {
    id: 1,
    destination: 'New York',
    flight: 'NY123',
    image: 'https://via.placeholder.com/150',
    description: 'Business meeting in downtown New York.'
  },
  {
    id: 2,
    destination: 'London',
    flight: 'LN456',
    image: 'https://via.placeholder.com/150',
    description: 'Conference in London.'
  },
  {
    id: 3,
    destination: 'Tokyo',
    flight: 'TK789',
    image: 'https://via.placeholder.com/150',
    description: 'Client visit in Tokyo.'
  }
];

const TripList = () => {
  return (
    <div className="trip-list">
      {trips.map(trip => (
        <div key={trip.id} className="trip-card">
          <img src={trip.image} alt={trip.destination} />
          <h3>{trip.destination}</h3>
          <p>Flight: {trip.flight}</p>
          <p>{trip.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TripList;