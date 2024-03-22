import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [myPercentage, setMyPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);
  return (
    <div>
      <BillInput bill={bill} handleBill={setBill} />
      <SelectPercentage
        text="How did you like the service?"
        percentage={myPercentage}
        setPercentage={setMyPercentage}
      />
      <SelectPercentage
        text="How did your friend like the service?"
        percentage={friendPercentage}
        setPercentage={setFriendPercentage}
      />
      <Output
        bill={bill}
        percentage1={myPercentage}
        percentage2={friendPercentage}
      />
      <Reset
        handleReset={() => {
          setBill(0);
          setMyPercentage(0);
          setFriendPercentage(0);
        }}
      />
    </div>
  );
}

function BillInput({ bill, handleBill }) {
  return (
    <div>
      How much was the bill?
      <input
        value={bill}
        type="number"
        min="0"
        onChange={(e) => handleBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function SelectPercentage({ text, percentage, setPercentage }) {
  return (
    <div>
      {text}
      <select
        value={percentage}
        onChange={(e) => setPercentage(Number(e.target.value))}
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
    <div>
      <b>
        You pay ${bill + tip} (${bill} + %{tip} tip)
      </b>
    </div>
  );
}

function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}
