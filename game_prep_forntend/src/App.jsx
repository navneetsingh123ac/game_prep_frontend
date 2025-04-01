import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Games } from "./pages/index.js";

function App() {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Games" element={<Games />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;