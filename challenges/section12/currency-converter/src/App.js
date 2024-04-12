import { useState } from "react";

export default function App() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);

  async function fecthing(f, t, i) {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${i}&from=${f}&to=${t}`
    );
    const data = await res.json();
    setOutput(data?.rates ? data.rates[t] : null);
  }

  function handleFromChange(e) {
    const f = e.target.value;
    setFrom(f);
    fecthing(f, to, input);
  }

  function handleToChange(e) {
    const t = e.target.value;
    setTo(t);
    fecthing(from, t, input);
  }

  function handleInputChange(e) {
    const i = Number(e.target.value);
    setInput(i);
    fecthing(from, to, i);
  }

  return (
    <div>
      <input type="number" value={input} onChange={handleInputChange} />
      <select onChange={handleFromChange} value={from}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={handleToChange} value={to}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{output}</p>
    </div>
  );
}
