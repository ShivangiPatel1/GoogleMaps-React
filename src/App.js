import React, { useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import MapStyles from "./MapStyles";
import PlacesAutoComplete from "./PlacesAutoComplete";
import PinCode from "./PinCode";

function App() {
  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };
  // const center = {
  //   lat: 49.291328,
  //   lng: -123.142273,
  // };
  const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };
  const [markers, setMarkers] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lat: 49.291328,
    lng: -123.142273,
  });

  return (
    <div>
      <PlacesAutoComplete
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={coordinates}
        options={options}
      >
        <Marker
          position={{ lat: coordinates.lat, lng: coordinates.lng }}
        ></Marker>
      </GoogleMap>
    </div>
  );
}

export default App;
