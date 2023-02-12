import './App.css';
import React, { Component } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
//import 'mapbox-gl-directions/dist/mapbox-gl-directions.css';
//import Directions from 'mapbox-gl-directions/dist/mapbox-gl-directions';
import Geojson from './Komponen/layer';
//import mapboxgl from 'mapbox-gl';
import Nav from './Komponen/navbar';
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState, useRef } from "react";

function App() {
  const [lng, setLng] = useState(109.65179163931884);
  const [lat, setLat] = useState(-7.668773095240437);

  const MAPBOX_TOKEN = "pk.eyJ1IjoibHV0Zml3aXJhd2FuIiwiYSI6ImNsZHk4OXNlcjBtMXIzb29henBsZHg1czAifQ.6K3x_lXHWf3dwrZbprTBnA";

  return (
    <div className="App">
      <Nav />
      <Map
      mapboxAccessToken={MAPBOX_TOKEN}
      style={{
        width: "100",
        height: "600px",
      }}
      initialViewState={{
        longitude: lng,
        latitude: lat,
        zoom: 14,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v10" //satellite
      >
        <Geojson />
        <Marker longitude={lng} latitude={lat} />
        <NavigationControl position="bottom-right" />
        <FullscreenControl />
        <GeolocateControl />
      </Map>
    </div>
  );
}
export default App;