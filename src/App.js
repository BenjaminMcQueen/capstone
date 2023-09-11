import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Attractions from "./components/Attractions";
import Map from "./components/Map";
import Contact from "./components/Contact";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/attractions" element={<Attractions />} />
          <Route exact path="/Map" element={<Map />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
