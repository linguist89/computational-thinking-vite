import Post from "./post.mdx";
import "./App.css";
import Lesson from "./Lesson";

function App() {
  const lessons = ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4", "Lesson 5"];

  return (
    <div className="App">
      <Lesson children={<Post></Post>} />
    </div>
  );
}

export default App;
