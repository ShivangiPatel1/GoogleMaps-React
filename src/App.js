import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import MapStyles from "./MapStyles";
// import "@reach/combobox/style.css";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
function App() {
  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };
  const center = {
    lat: 49.291328,
    lng: -123.142273,
  };
  const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };
  const [markers, setMarkers] = useState([]);
  return (
    <div>
      <Search></Search>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
          options={options}
          onClick={(e) =>
            setMarkers((current) => [
              ...current,
              {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                time: new Date(),
              },
            ])
          }
        >
          {markers.map((marker) => (
            <Marker
              key={marker.time.toISOString}
              position={{ lat: marker.lat, lng: marker.lng }}
            ></Marker>
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
function Search() {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 49.291328, lng: () => -123.142273 },
      radius: 200000,
    },
  });
  return (
    <Combobox onSelect={(address) => console.log(address)}>
      <ComboboxInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={"Enter the location"}
      ></ComboboxInput>
      <ComboboxPopover>
        {status === "OK" &&
          data.map(({ id, description }) => (
            <ComboboxOption key={id} value={description}></ComboboxOption>
          ))}
      </ComboboxPopover>
    </Combobox>
  );
}
export default App;
