import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function splitTextNumWords(text, numWords) {
  const arrayWords = text.split(" ");
  const keptWords = arrayWords.slice(0, Math.min(arrayWords.length, numWords));
  return keptWords.join(" ");
}

function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  className = "",
  buttonColor = "blue",
  expanded = false,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const text = isExpanded
    ? children
    : splitTextNumWords(children, collapsedNumWords) + "...";
  const buttonText = isExpanded ? collapseButtonText : expandButtonText;

  function handleClick() {
    setIsExpanded((exp) => !exp);
  }

  const buttonStyle = {
    color: buttonColor,
    border: "none",
    background: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
  };

  return (
    <div className={className}>
      <span>{text}</span>

      <button style={buttonStyle} onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}
