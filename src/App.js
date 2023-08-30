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
<<<<<<< HEAD
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        Nothing yet.
=======
    <Router>
      <div className="App">
        <Header />
>>>>>>> 8fe4bf7d9edbf9afdaf7b655ea90dcf3432b47cd
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/map" element={<Map />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
<<<<<<< HEAD

        {/* <Footer /> */}
      </BrowserRouter>
    </div>
=======
      </div>
    </Router>
>>>>>>> 8fe4bf7d9edbf9afdaf7b655ea90dcf3432b47cd
  );
}

export default App;
