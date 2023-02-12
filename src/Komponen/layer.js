import React, { Component } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {
  Source, 
  Layer,
  Popup,
} from "react-map-gl";
import { useState, useRef } from "react";

//Import Geojson dari local "Untuk Sementara"
import Administrasi from '../dist/geojson/administrasi.geojson';
import Lokal from '../dist/geojson/Lokal_Primer.geojson';
import Arteri from '../dist/geojson/Arteri_Primer.geojson';
import Kolektor from '../dist/geojson/Kolektor_Primer.geojson';
import Gombong from '../dist/geojson/gombong.geojson';

function Geojson() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  //memunculkan popup pada layer
  const handleClick = (map, evt) => {
    const features = map.queryRenderedFeatures(evt.point);
    if (!features.length) {
      return;
    }

    const feature = features[0];
    setSelectedFeature(feature);
    setShowPopup(true);
  };

  return (
    <div className="Geojson">
        <Source
            id="administrasi"
            type="geojson"
            data={Administrasi}
          />
          <Layer
            id="administrasi"
            type="fill"
            source="administrasi"
            paint={{ "fill-color": "#228b22", "fill-opacity": 0.4 }}
            onClick={handleClick}
          />
          <Source
            id="gombong"
            type="geojson"
            data={Gombong}
          />
          <Layer
            id="gombong"
            type="fill"
            source="gombong"
            paint={{ "fill-color": "#fcba03", "fill-opacity": 0.4 }}
            onClick={handleClick}
          />
          <Source
            id="local"
            type="geojson"
            data={Lokal}
          />
          <Layer
            id="local"
            type="line"
            source="local"
            paint={{ "line-color": "#0f0f0f", "line-width": 2, "line-blur": 1, "line-opacity": 1 }}
            onClick={handleClick}
          />
          <Source
            id="kolektor"
            type="geojson"
            data={Kolektor}
          />
          <Layer
            id="kolektor"
            type="line"
            source="kolektor"
            paint={{ "line-color": "#e00404", "line-width": 4, "line-blur": 1, "line-opacity": 1 }}
            onClick={handleClick}
          />
          <Source
            id="arteri"
            type="geojson"
            data={Arteri}
          />
          <Layer
            id="arteri"
            type="line"
            source="arteri"
            paint={{ "line-color": "#e00404", "line-width": 6, "line-blur": 1, "line-opacity": 1 }}
            onClick={handleClick}
          />

  {showPopup && selectedFeature && (
        <Popup
          longitude={selectedFeature.geometry.coordinates[0][0]}
          latitude={selectedFeature.geometry.coordinates[0][1]}
          onClose={() => setShowPopup(false)}
        >
          You clicked on a line
        </Popup>
      )}
      
    </div>
  );
}
export default Geojson;