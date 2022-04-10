import React from "react";
import { Marker as LeafletMarker } from "react-leaflet";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

interface MarkerProps {
  lat: number;
  lng: number;
  onClick: () => void;
}

export const Marker: React.FC<MarkerProps> = ({ lat, lng, onClick }) => {
  const size = 56;
  return (
    <LeafletMarker
      riseOnHover
      icon={
        new Leaflet.Icon({
          className: "leaflet-div-icon",
          iconUrl: "https://picsum.photos/200",
          iconSize: [size, size], // size of the icon
          iconAnchor: [size / 2, size / 2], // point of the icon which will correspond to marker's location
          popupAnchor: [0, -size / 2], // point from which the popup should open relative to the iconAnchor
        })
      }
      position={[lat, lng]}
      eventHandlers={{
        click: onClick,
      }}
    />
  );
};
