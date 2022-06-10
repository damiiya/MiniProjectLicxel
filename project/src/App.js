import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import Main from "./pages/Main.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={Main} />
        <Route path="/Login" element={Login} />
        <Route path="/SignUp" element={SignUp} />
      </Routes>
    </div>
  );
}

export default App;
