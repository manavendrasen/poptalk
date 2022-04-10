import { User } from "@supabase/supabase-js";
import { atom } from "recoil";

const authState = atom<User | null>({
  key: "authState",
  default: null
});

export default authState;
