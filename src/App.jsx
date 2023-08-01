import { MDXProvider } from "@mdx-js/react";
import Post from "./post.mdx";
import "./App.css";

const components = {
  em: (props) => <i {...props} />,
};

function App() {
  const lessons = ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4", "Lesson 5"];

  return (
    <div className="App">
      <MDXProvider components={components}>
        <Post />
      </MDXProvider>
      <p>THIS IS A TEST. Hello world!</p>
    </div>
  );
}

export default App;
