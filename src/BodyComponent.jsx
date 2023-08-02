import "./BodyComponent.css";
import { Outlet, Link } from "react-router-dom";

export default function BodyComponent() {
  const lessons = [
    {
      id: "lesson-1",
      title: "Lesson 1",
      subtitle: "Introduction",
      explanation: "Here we introduce the basics.",
    },
    {
      id: "lesson-2",
      title: "Lesson 2",
      subtitle: "Chapter 1",
      explanation: "We dive deeper into the topic.",
    },
    {
      id: "lesson-3",
      title: "Lesson 3",
      subtitle: "Chapter 2",
      explanation: "Advanced topics are introduced here.",
    },
    {
      id: "lesson-4",
      title: "Lesson 4",
      subtitle: "Chapter 3",
      explanation: "Let's apply what we've learned.",
    },
    {
      id: "lesson-5",
      title: "Lesson 5",
      subtitle: "Conclusion",
      explanation: "Recap and next steps.",
    },
  ];

  const handleClick = () => {
    return <Link to="/computational-thinking-vite/lesson-1">Home</Link>;
  };

  return (
    <div className="BodyGrid">
      {lessons.map((lesson, index) => {
        return (
          <div
            className="card"
            key={lesson.title}
            onClick={() => handleClick(lesson)}
          >
            <h2 className="title">{lesson.title}</h2>
            <h3 className="subtitle">{lesson.subtitle}</h3>
            <p className="explanation">{lesson.explanation}</p>
            <Link to="/computational-thinking-vite/lesson-1">{`View Lesson ${
              index + 1
            }`}</Link>
          </div>
        );
      })}
    </div>
  );
}
