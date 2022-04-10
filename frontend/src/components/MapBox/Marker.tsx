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
          iconUrl:
            "https://user-images.githubusercontent.com/26283488/162614312-4a678feb-1259-428a-bb47-882c856792b9.png",
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
