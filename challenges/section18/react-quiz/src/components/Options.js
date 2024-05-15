import { useQuiz } from "../contexts/QuizContext";

export default function Options() {
  const { answer, question, newAnswer } = useQuiz();
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={answer !== null}
          onClick={() => {
            newAnswer(index);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
