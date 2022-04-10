import { atom } from "recoil";

const locationState = atom({
  key: "locationState",
  default: {
    lat: 26.8653466,
    lng: 75.5630456,
  },
});

export default locationState;
