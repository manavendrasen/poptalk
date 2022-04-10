import { POSTS_ROUTE } from "../constants/routes"
import API from "./api"

export const getAllPosts=async (postId:string)=>{
    try{
        const res=await API.get(`${POSTS_ROUTE}`)
        return res.data.data;
    }catch(err){
        console.log(err)
    }
}