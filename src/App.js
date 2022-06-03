import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Questions from "./Pages/Questions";
import FinalScreen from "./Pages/FinalScreen";
import "./App.css";

function App() {
  return (
    <div className='app__container'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/score" element={<FinalScreen />} />
      </Routes>
    </div>
  );
}

export default App;
