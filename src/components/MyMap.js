import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';

const MyMap = () => {
  useEffect(() => {
    // Initialize the map and center it between Ludhiana and Kashmir
    const map = L.map('map').setView([32.5, 75.5], 7);

    // Add the OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add the routing machine to calculate the route without instructions
    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(30.900965, 75.857277), // Ludhiana
        L.latLng(34.083656, 74.797371)  // Kashmir (Srinagar)
      ],
      routeWhileDragging: false,  // Disable route dragging
      showAlternatives: false,    // No alternative routes
      lineOptions: {
        styles: [{ color: 'blue', weight: 4 }] // Customize the route line color and width
      },
      createMarker: () => null,  // Disable start/end markers
      addWaypoints: false,       // Disable draggable waypoints
      fitSelectedRoutes: true,   // Automatically fit the map to the route
      router: L.Routing.osrmv1({
        serviceUrl: `https://router.project-osrm.org/route/v1`
      }),
      // Suppress the UI for instructions
      itinerary: { container: null }, // No itinerary container for directions
    }).addTo(map);

  }, []);

  return <div id="map" style={{ height: "20rem", width: "100%" }} />;
};

export default MyMap;
