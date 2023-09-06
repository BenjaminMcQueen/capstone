// import React, { useEffect } from "react";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// const Map = () => {
//   useEffect(() => {
//     // initializing the map
//     const map = L.map("map").setView([39.1031, -84.512], 13);

//     // Adding a title to the map views
//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(map);

//     // Adding markers to each of attractions using L (leaflet JS liberary)
//     L.marker([39.1427, -84.5089]).addTo(map).bindPopup("Cincinnati Zoo"); //cincinnati zoo
//     L.marker([39.1304, -84.5149]).addTo(map).bindPopup("Museum"); // Cincinnati Museum
//     L.marker([39.0971, -84.5082]).addTo(map).bindPopup("Baseball Game Stadium"); // Baseball Game Stadium
//     L.marker([39.094, -84.5255]).addTo(map).bindPopup("Ohio Riverfront"); // Ohio Riverfront
//     L.marker([39.1112, -84.5175]).addTo(map).bindPopup("Over-the-Rhine"); // Over-the-Rhine
//     L.marker([39.0986, -84.5079]).addTo(map).bindPopup("Aquarium"); // Aquarium
//     L.marker([39.1046, -84.5122]).addTo(map).bindPopup("View Tower"); // View Tower
//     L.marker([39.1018, -84.5128]).addTo(map).bindPopup("Restaurants"); // Restaurants
//     L.marker([39.1025, -84.5126]).addTo(map).bindPopup("Movie Theater"); // Movie Theater
//     L.marker([39.104, -84.5123]).addTo(map).bindPopup("Shopping"); // Shopping
//     L.marker([39.1055, -84.5127]).addTo(map).bindPopup("Hiking"); // Hiking
//     L.marker([39.0925, -84.5087]).addTo(map).bindPopup("Fishing"); // Fishing
//   }, []); //empty array run this effect only once

//   // Cleanup: remove the map instance when the component unmounts
//   // return () => {
//   //   map.remove();
//   // };

//   return <div id="map" style={{ height: "100vh" }}></div>;
// };

// export default Map;
