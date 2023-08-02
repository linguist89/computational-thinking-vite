import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lesson from "./Lesson";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/computational-thinking-vite" element={<App />}></Route>
        <Route
          path="/computational-thinking-vite/lesson-1"
          element={<Lesson></Lesson>}
        ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
