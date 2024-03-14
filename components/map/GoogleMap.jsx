import React from "react";
import { GoogleMap, LoadScript, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 46.8625,
  lng: 103.8467,
};

const markers = [
  { id: 1, position: { lat: 46.8625, lng: 103.8467 } },
  { id: 2, position: { lat: 46.85, lng: 103.85 } },
  // Add more marker objects as needed
];

const GoogleMaps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDEWd2Ms7g24w4n47TSIclfY8e26LNlDzk",
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position} />
      ))}
    </GoogleMap>
  );
};

export default GoogleMaps;
