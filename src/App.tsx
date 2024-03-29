import "devextreme/dist/css/dx.light.css";
import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import SignupPage from "./components/signupPage/SignupPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/loginPage/LoginPage";
import HomePage from "./components/HomePage";
import FileManagement from "./components/fileManagement/FileManagement";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      
        <Route path="/home" element={  <FileManagement/>} />

      
      </Routes>
    </div>
  );
}

export default App;
