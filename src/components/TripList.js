import React from 'react';
import './TripList.css';

const TripList = ({ trips, onDelete }) => {
  return (
    <div className="trip-list">
      {trips.map(trip => (
        <div key={trip.id} className="trip-card">
          <h3>{trip.destination}</h3>
          <p>Flight: {trip.flight}</p>
          <p>{trip.description}</p>
          <button className="delete-button" onClick={() => onDelete(trip.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default TripList;
