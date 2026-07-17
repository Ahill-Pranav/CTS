import { useState } from "react";

function CurrencyConverter() {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState("");

  function handleSubmit() {
    const conversionRate = 90; // 1 Euro = 90 INR
    const result = (rupees / conversionRate).toFixed(2);
    setEuros(result);
  }

  return (
    <div>
      <h2>Currency Converter</h2>

      <label>Indian Rupees: </label>

      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />

      <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
        Convert
      </button>

      <h3>Euro: € {euros}</h3>
    </div>
  );
}

export default CurrencyConverter;