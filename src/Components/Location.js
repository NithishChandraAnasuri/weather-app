import React from "react";

function Location({ setCity }) {
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setCity(event.target.value);
    }
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter city name"
        onKeyDown={handleSearch}
      />
    </div>
  );
}

export default Location;
