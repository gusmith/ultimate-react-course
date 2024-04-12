import { useEffect, useState } from "react";

export default function App() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleFromChange(e) {
    const f = e.target.value;
    setFrom(f);
  }

  function handleToChange(e) {
    const t = e.target.value;
    setTo(t);
  }

  function handleInputChange(e) {
    const i = Number(e.target.value);
    setInput(i);
  }

  useEffect(
    function () {
      const abort = new AbortController();
      async function fecthing() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${input}&from=${from}&to=${to}`,
            { signal: abort.signal }
          );
          const data = await res.json();
          setOutput(data?.rates ? data.rates[to] : null);
        } catch (err) {
          console.log(err.message);
          setOutput(null);
        } finally {
          setIsLoading(false);
        }
      }
      if (!input || from === to) {
        setOutput(null);
        return;
      }
      fecthing();
      return () => {
        abort.abort();
      };
    },
    [input, from, to]
  );

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
      <p>{isLoading ? "Loading" : output}</p>
    </div>
  );
}
