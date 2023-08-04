import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./BodyComponent.jsx";
import Header from "./Header.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lesson from "./Lesson";
import Lesson1Content from "./lesson-1.mdx";
import Lesson2Content from "./lesson-2.mdx";
import Lesson3Content from "./lesson-3.mdx";
import Lesson4Content from "./lesson-4.mdx";
import Lesson5Content from "./lesson-5.mdx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header></Header>
    <BrowserRouter>
      <Routes>
        <Route
          path="/computational-thinking-vite"
          element={<BodyComponent />}
        ></Route>
        <Route
          path="/computational-thinking-vite/lesson-1"
          element={
            <Lesson children={<Lesson1Content></Lesson1Content>}></Lesson>
          }
        ></Route>
        <Route
          path="/computational-thinking-vite/lesson-2"
          element={
            <Lesson children={<Lesson2Content></Lesson2Content>}></Lesson>
          }
        ></Route>
        <Route
          path="/computational-thinking-vite/lesson-3"
          element={
            <Lesson children={<Lesson3Content></Lesson3Content>}></Lesson>
          }
        ></Route>
        <Route
          path="/computational-thinking-vite/lesson-4"
          element={
            <Lesson children={<Lesson4Content></Lesson4Content>}></Lesson>
          }
        ></Route>
        <Route
          path="/computational-thinking-vite/lesson-5"
          element={
            <Lesson children={<Lesson5Content></Lesson5Content>}></Lesson>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
