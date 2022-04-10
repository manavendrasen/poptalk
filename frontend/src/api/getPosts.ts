import { supabase } from "../supabaseClient";
import API, { POST_ENDPOINT, USER_ENDPOINT } from "./api"

export const getAllPostForBucket = async (bucketId: string) => {
  try {
    const user = supabase.auth.user();
    if (user === null) return [];

    const res = await API.get(`${USER_ENDPOINT}/${user.id}/bucket/${bucketId}/post`);
    return res.data.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export const getAllPublicPosts = async () => {
  try {
    const user = supabase.auth.user();
    if (user === null) return [];

    const res = await API.get(`${POST_ENDPOINT}/public`);
    return res.data.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}


export const getPublicPostById = async (postId: string) => {
  try {
    const user = supabase.auth.user();
    if (user === null) return [];

    const res = await API.get(`${POST_ENDPOINT}/public/${postId}`);
    return res.data.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}


export const getPostById = async (bucketId: string, postId: string) => {
  try {
    const user = supabase.auth.user();
    if (user === null) return [];

    const res = await API.get(`${USER_ENDPOINT}/${user.id}/bucket/${bucketId}/post/${postId}`);
    return res.data.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}
