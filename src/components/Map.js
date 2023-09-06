import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import L from "leaflet";
// import markerIconPng from 'leaflet/dist/images/marker-icon.png'
import "leaflet-defaulticon-compatibility";

const Map = () => {
  useEffect(() => {
    //declearing and retriving the DOM element with id "map" using leaflet's utility function
    var container = L.DomUtil.get("map");

    //checking if the container element exisits
    if (container != null) {
      // setting id of container to null so it can detach from any existing map instances
      container._leaflet_id = null;
    }
    // initializing the map
    var map = L.map("map").setView([39.1031, -84.512], 13);
    // Adding a title to the map views
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Adding markers to each of attractions using L (leaflet JS liberary)
    L.marker([39.1427, -84.5089]).addTo(map).bindPopup("Cincinnati Zoo"); //cincinnati zoo
    L.marker([39.1304, -84.5149]).addTo(map).bindPopup("Museum"); // Cincinnati Museum
    L.marker([39.094, -84.5255]).addTo(map).bindPopup("Ohio Riverfront"); // Ohio Riverfront
    L.marker([39.1112, -84.5175]).addTo(map).bindPopup("Over-the-Rhine"); // Over-the-Rhine
    L.marker([39.0986, -84.5079]).addTo(map).bindPopup("Aquarium"); // Aquarium
    L.marker([39.1046, -84.5122]).addTo(map).bindPopup("View Tower"); // View Tower
    L.marker([39.1018, -84.5128]).addTo(map).bindPopup("Restaurants"); // Restaurants
    L.marker([39.1025, -84.5126]).addTo(map).bindPopup("Movie Theater"); // Movie Theater
    L.marker([39.104, -84.5123]).addTo(map).bindPopup("Shopping"); // Shopping
    L.marker([39.1055, -84.5127]).addTo(map).bindPopup("Hiking"); // Hiking
    L.marker([39.0925, -84.5087]).addTo(map).bindPopup("Fishing"); // Fishing
    L.marker([39.0971, -84.5082]).addTo(map).bindPopup("Baseball Stadium"); // Baseball Stadium
  }, []); //empty array run this effect only once

  return <div id="map" style={{ height: "100vh" }}></div>;
};

// export default Map;

