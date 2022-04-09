import { atom } from "recoil";

const postState = atom({
  key: "postState",
  default: {
    id: "",
  },
});

export default postState;
