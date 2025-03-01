import React, { useState } from "react";
import Weather from "./Components/Weather"; // Check this path
import Location from "./Components/Location"; // Check this path
import "./style.css";

function App() {
  const [city, setCity] = useState("");

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Weather Application</h2>
      <Location setCity={setCity} />
      <Weather city={city} />
    </div>
  );
}

export default App;
