import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const levelToEmoji = {
  0: "👶",
  1: "💪",
  2: "🏆",
};
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="prosciutto.jpg" alt="Profile picture" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Guillaume Smith</h1>I would prefer not to talk too much about myself.
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="Python" level={2} color="red" />
      <Skill name="React" level={0} color="blue" />
      <Skill name="HTML+CSS" level={1} color="yellow" />
      <Skill name="Git and Github" level={2} color="green" />
    </div>
  );
}

function Skill(props) {
  const style = {
    backgroundColor: props.color,
  };
  return (
    <div className="skill" style={style}>
      <span>{props.name}</span>
      <span>{levelToEmoji[props.level]}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
