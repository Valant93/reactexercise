import { useState, useEffect } from "react";

export default function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function getCurrentLocation() {
    if (!navigator.geolocation) {
      setError(new Error("Geolocation is not supported by your browser"));
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );
  }

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return { location, loading, error, getCurrentLocation };
}
