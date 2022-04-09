export interface Post {
  id: string;
  created_at: Date;
  loc_lat: number;
  loc_lon: number;
  user_id: string;
  post_id: string;
  post_url: string;
  chat_id: string;
  loc_name: string;
  bucket_id: string;
  // public: boolean;
}
