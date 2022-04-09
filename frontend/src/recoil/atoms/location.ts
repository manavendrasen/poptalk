import { atom } from "recoil";

const locationState = atom({
  key: "locationState",
  default: {
    lat: 49.8419,
    lng: 24.0315,
  },
});

export default locationState;
