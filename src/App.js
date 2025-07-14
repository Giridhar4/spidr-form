// src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    guess: "",
    spidrPin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle PIN formatting
    if (name === "spidrPin") {
      const cleaned = value.replace(/\D/g, "").slice(0, 16);
      const formatted = cleaned.replace(/(.{4})/g, "$1-").slice(0, 19);
      setFormData((prev) => ({ ...prev, [name]: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="container">
      <h1>Spidr Secret Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>

        <label>
          Last Name
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>

        <label>
          Phone Number
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>

        <label>
          Email Address
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Guess the Air Fryer’s Cost ($)
          <input type="number" name="guess" value={formData.guess} onChange={handleChange} required />
        </label>

        <label>
          Very, Very Secret 16-digit Spidr PIN
          <input
            type="text"
            name="spidrPin"
            value={formData.spidrPin}
            onChange={handleChange}
            placeholder="####-####-####-####"
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
