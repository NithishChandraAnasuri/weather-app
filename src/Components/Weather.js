import React, { useEffect, useState } from "react";
import axios from "axios";

function Weather({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!city || city.trim() === "") {
      setError("");
      return;
    }

    const fetchWeather = async () => {
      setLoading(true);
      setWeatherData(null);
      setError("");

      try {
        const API_KEY = "e036075e4b1928effd2e9575583db6b5";
        const trimmedCity = city.trim();

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${trimmedCity}&units=metric&appid=${API_KEY}`
        );

        console.log("Weather API Response:", response.data);
        setWeatherData(response.data);
      } catch (err) {
        console.error("Weather API Error:", err.response?.data || err);
        setError(`❌ ${err.response?.data?.message || "City not found!"}`);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div>
      {/* Error message */}
      {error && <p className="text-danger">{error}</p>}

      {/* Loading state */}
      {loading && <p>⏳ Fetching weather data...</p>}

      {/* Display weather data */}
      {weatherData && !loading && (
        <div className="card p-4 mt-3 shadow">
          <h3>
            📍 {weatherData.name}, {weatherData.sys.country}
          </h3>
          <h4>
            🌥️ {weatherData.weather[0].main} (
            {weatherData.weather[0].description})
          </h4>
          <p>
            🌡️ Temperature: {weatherData.main.temp}°C /{" "}
            {((weatherData.main.temp * 9) / 5 + 32).toFixed(2)}°F
          </p>
          <p>💨 Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>☁️ Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
