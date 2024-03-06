import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const levelToEmoji = {
  beginner: "👶",
  intermediate: "💪",
  advanced: "🏆",
};

const skills = [
  { name: "Python", level: "advanced", color: "red" },
  { name: "React", level: "beginner", color: "blue" },
  { name: "HTML+CSS", level: "intermediate", color: "yellow" },
  { name: "Git and, Github", level: "advanced", color: "green" },
];

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
      {skills.map((skill) => (
        <Skill name={skill.name} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ name, level, color }) {
  const style = {
    backgroundColor: color,
  };
  return (
    <div className="skill" style={style}>
      <span>{name}</span>
      <span>{levelToEmoji[level]}</span>
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
