import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./pages/Home";
import Navber from "./components/Navbar/Navber";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import PrescriptionForm from "./components/PrescriptionForm/PrescriptionForm";
import DrugInfo from "./pages/DrugInfo";
import Report from "./pages/Report";


const App = () => {
  return (
    <Router>
      <div>
        <Navber/>
        <div className="container mt-4">
          <Routes>
            <Route path="*" element={<Home/>} />
            <Route path="/report" element={<Report/>} />
            <Route path="/drug-info" element={<DrugInfo />} />
            <Route path="/auth/login" element={<Signin/>} />
            <Route path="/auth/signup" element={<Signup/>} />
            <Route path="/prescription" element={<PrescriptionForm/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
