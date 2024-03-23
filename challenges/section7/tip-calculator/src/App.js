import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [myPercentage, setMyPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage
        text="How did you like the service?"
        percentage={myPercentage}
        onSetPercentage={setMyPercentage}
      />
      <SelectPercentage
        text="How did your friend like the service?"
        percentage={friendPercentage}
        onSetPercentage={setFriendPercentage}
      />

      {bill > 0 && (
        <>
          <Output
            bill={bill}
            percentage1={myPercentage}
            percentage2={friendPercentage}
          />
          <Reset
            onReset={() => {
              setBill(0);
              setMyPercentage(0);
              setFriendPercentage(0);
            }}
          />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      How much was the bill?
      <input
        value={bill}
        type="number"
        min="0"
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function SelectPercentage({ text, percentage, onSetPercentage }) {
  return (
    <div>
      {text}
      <select
        value={percentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was OK (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, percentage1, percentage2 }) {
  const tip = (bill * (percentage1 + percentage2)) / 200;
  return (
    <h3>
      You pay ${bill + tip} (${bill} + %{tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
