import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Attractions from "./components/Attractions";
import Map from "./components/Map";
import Contact from "./components/Contact";
import CreateAttraction from "./components/CreateAttraction";
import EditAttractionWrapper from "./components/EditAttractionWrapper";
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
          <Route path="/editAttractionWrapper/:id" element={<EditAttractionWrapper />} />
          <Route exact path="/attractionNotFound" element={<Attractions message="We couldn't find your attraction."/>} />
          <Route exact path="/Map" element={<Map />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/createAttraction" element={<CreateAttraction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
