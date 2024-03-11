import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const defaultStep = 1;
  const defaultCount = 0;
  const [count, setCount] = useState(defaultCount);
  const [step, setStep] = useState(defaultStep);
  const date = new Date();

  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => {
            e.preventDefault();
            setStep(Number(e.target.value));
          }}
        />
        <span>Steps: {step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => {
            e.preventDefault();
            setCount(Number(e.target.value));
          }}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days to today is `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {!(step === defaultStep && count === defaultCount) && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setCount(defaultCount);
            setStep(defaultStep);
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
