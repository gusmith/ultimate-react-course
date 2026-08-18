import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* What it would look like without the compund component pattern */}
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> */}

      {/* In this case, we can easily decide how to show it from this component. If it was with props, we would need a large number of them. */}
      <Counter>
        <Counter.Label>My super flexible counter</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Increase icon="+" />
        <Counter.Count />
      </Counter>
      <div>
        <Counter>
          <Counter.Decrease icon="<-" />
          <div>
            <Counter.Count />
          </div>
          <Counter.Increase icon="->" />
        </Counter>
      </div>
    </div>
  );
}
