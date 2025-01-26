import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Navber from "./components/Navbar/Navber";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";

const About = () => <h2>About Us</h2>;
const Services = () => <h2>Our Services</h2>;
const Contact = () => <h2>Contact Us</h2>;

const App = () => {
  return (
    <Router>
      <div>
        <Navber/>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/auth/login" element={<Signin/>} />
            <Route path="/auth/signup" element={<Signup/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
