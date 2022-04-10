import React, { useRef } from "react";
import { Box } from "@mui/material";
import { useRecoilState } from "recoil";
import {
  MapContainer,
  TileLayer,
  useMap,
  useMapEvent,
  Circle,
} from "react-leaflet";
import locationState from "../../recoil/atoms/location";
import { Marker } from "./Marker";
import "leaflet/dist/leaflet.css";
import postState from "../../recoil/atoms/post";
import { useNavigate } from "react-router-dom";
import { Post } from "../../constants/modals/Post";

interface ChangeMapViewProps {
  lat: number;
  lng: number;
}

interface MapBoxProps {
  publicPosts: Post[];
}

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

export const MapBox: React.FC<MapBoxProps> = ({ publicPosts }) => {
  console.log(publicPosts);
  const navigate = useNavigate();
  const [location, setLocation] = useRecoilState(locationState);
  const [post, setPost] = useRecoilState(postState);
  const animateRef = useRef(false);
  const onClick = (publicPost: Post) => {
    setLocation({
      lat: publicPost.loc_lat,
      lng: publicPost.loc_lon,
    });

    setPost({
      id: publicPost.chat_id,
    });

    navigate(`/app/chat/${publicPost.id}`);
  };
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        background: "background.paper",
        height: "calc(95vh - 2rem)",
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
        {publicPosts.map((publicPost) => (
          <>
            <Marker
              lat={publicPost.loc_lat}
              lng={publicPost.loc_lon}
              onClick={() => onClick(publicPost)}
            />
            <Circle
              center={[publicPost.loc_lat, publicPost.loc_lon]}
              radius={1000}
              fillColor='#FF7761'
              fillOpacity={0.3}
              stroke={false}
              interactive
            />
          </>
        ))}
        <ChangeMapView lat={location.lat} lng={location.lng} />
        <SetViewOnClick
          animateRef={animateRef}
          lat={location.lat}
          lng={location.lng}
        />
      </MapContainer>
    </Box>
  );
};
