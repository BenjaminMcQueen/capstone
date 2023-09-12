import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/partials/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Map from "./components/Map";
import Contact from "./components/Contact";
import "./App.css";
import Footer from "./components/partials/Footer";
import AttractionRouter from "./components/AttractionRouter";


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Routes className='Routes'>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route path="/attractions/*" element={<AttractionRouter />} />
          <Route exact path="/Map" element={<Map />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
