import Post from "./post.mdx";
import Lesson from "./Lesson";
import "./BodyComponent.css";

export default function BodyComponent() {
  const lessons = [
    {
      title: "Lesson 1",
      subtitle: "Introduction",
      explanation: "Here we introduce the basics.",
    },
    {
      title: "Lesson 2",
      subtitle: "Chapter 1",
      explanation: "We dive deeper into the topic.",
    },
    {
      title: "Lesson 3",
      subtitle: "Chapter 2",
      explanation: "Advanced topics are introduced here.",
    },
    {
      title: "Lesson 4",
      subtitle: "Chapter 3",
      explanation: "Let's apply what we've learned.",
    },
    {
      title: "Lesson 5",
      subtitle: "Conclusion",
      explanation: "Recap and next steps.",
    },
  ];

  return (
    <div className="BodyGrid">
      {lessons.map((lesson) => {
        return (
          <div className="card" key={lesson.title}>
            <h2 className="title">{lesson.title}</h2>
            <h3 className="subtitle">{lesson.subtitle}</h3>
            <p className="explanation">{lesson.explanation}</p>
          </div>
        );
      })}
    </div>
  );
}
