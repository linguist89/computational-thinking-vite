import "./BodyComponent.css";
import { Link } from "react-router-dom";

export default function BodyComponent() {
  const lessons = [
    {
      id: "lesson-1",
      title: "Lesson 1",
      explanation: "Here we introduce the basics.",
    },
    {
      id: "lesson-2",
      title: "Lesson 2",
      explanation: "We dive deeper into the topic.",
    },
    {
      id: "lesson-3",
      title: "Lesson 3",
      explanation: "Advanced topics are introduced here.",
    },
    {
      id: "lesson-4",
      title: "Lesson 4",
      explanation: "Let's apply what we've learned.",
    },
    {
      id: "lesson-5",
      title: "Lesson 5",
      explanation: "Recap and next steps.",
    },
  ];

  return (
    <div className="BodyGrid">
      {lessons.map((lesson, index) => {
        return (
          <div className="card" key={lesson.title}>
            <h2 className="title">{lesson.title}</h2>
            <p className="explanation">{lesson.explanation}</p>
            <Link
              className="cardLink"
              to={`/computational-thinking-vite/${lesson.id}`}
            >{`View Lesson ${index + 1}`}</Link>
          </div>
        );
      })}
    </div>
  );
}
