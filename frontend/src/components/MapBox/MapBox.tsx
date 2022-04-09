import React, { useRef, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useRecoilState } from "recoil";
import {
  MapContainer,
  TileLayer,
  useMap,
  useMapEvent,
  SVGOverlay,
  Circle,
} from "react-leaflet";
import L from "leaflet";
import locationState from "../../recoil/atoms/location";
import { Marker } from "./Marker";
import "leaflet/dist/leaflet.css";

interface ChangeMapViewProps {
  lat: number;
  lng: number;
}

interface MapBoxProps {}

interface MapBoxProps {}

interface SetViewOnClickProps {
  animateRef: any;
  lat: number;
  lng: number;
}

const ChangeMapView: React.FC<ChangeMapViewProps> = ({ lat, lng }) => {
  const map = useMap();
  map.setView([lat, lng], map.getZoom());
  return null;
};

const SetViewOnClick: React.FC<SetViewOnClickProps> = ({
  animateRef,
  lat,
  lng,
}) => {
  const map = useMapEvent("click", (e) => {
    map.setView([lat, lng], 15, {
      animate: animateRef.current || false,
    });
  });

  return null;
};

export const MapBox: React.FC<MapBoxProps> = () => {
  const [location, setLocation] = useRecoilState(locationState);
  const animateRef = useRef(false);
  const onClick = () => {
    console.log("hello");
  };
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        background: "background.paper",
        height: "92vh",
        position: "sticky",
        top: "64px",
        zIndex: "1",
        right: "0",
      }}
    >
      {/* <p>
        <label>
          <input
            type='checkbox'
            onChange={() => {
              animateRef.current = !animateRef.current;
            }}
          />
          Animate panning
        </label>
      </p> */}

      <MapContainer center={[location.lat, location.lng]} zoom={14}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker lat={location.lat} lng={location.lng} onClick={onClick} />
        <ChangeMapView lat={location.lat} lng={location.lng} />
        <SetViewOnClick
          animateRef={animateRef}
          lat={location.lat}
          lng={location.lng}
        />
        <Circle
          center={[location.lat, location.lng]}
          radius={1000}
          fillColor='#FF7761'
          fillOpacity={0.3}
          stroke={false}
          interactive
        />
      </MapContainer>
    </Box>
  );
};
