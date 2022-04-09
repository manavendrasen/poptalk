import React from "react";
import { Box } from "@mui/material";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "./Marker";
import "leaflet/dist/leaflet.css";

interface MapBoxProps {
  lat: number;
  lng: number;
}

export const MapBox: React.FC<MapBoxProps> = ({ lat, lng }) => {
  const onClick = () => {
    console.log("test");
  };
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        background: "background.paper",
        height: "92vh",
      }}
    >
      <MapContainer center={[lat, lng]} zoom={13}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker lat={lat} lng={lng} onClick={onClick} />
      </MapContainer>
    </Box>
  );
};
