import { createClient } from "@supabase/supabase-js";

const REACT_APP_SUPABASE_URL: string = process.env.SUPABASE_URL || "";
const REACT_APP_SUPABASE_KEY: string = process.env.SUPABASE_KEY || "";

export const supabase = createClient(
    REACT_APP_SUPABASE_URL,
    REACT_APP_SUPABASE_KEY
);