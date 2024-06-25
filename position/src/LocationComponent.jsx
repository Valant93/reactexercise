import React from 'react';
import useCurrentLocation from "./UseCurrentLocation";

export default function LocationComponent() {
  const { location, loading, error, getCurrentLocation } = useCurrentLocation();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Your Location</h1>
      {location ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Accuracy: {location.accuracy} meters</p>
        </div>
      ) : (
        <p>Location not available</p>
      )}
      <button onClick={getCurrentLocation}>Get Location</button>
    </div>
  );
}
