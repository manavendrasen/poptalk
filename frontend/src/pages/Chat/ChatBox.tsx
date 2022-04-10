import { CircularProgress, Container, Typography } from "@mui/material";
import { PubNubProvider } from "pubnub-react";
import React, { useEffect, useState } from "react";
import MessageClient from "../../MessageClient";
import { Chat, MessageList, MessageInput, TypingIndicator } from "@pubnub/react-chat-components";
import { supabase } from "../../supabaseClient";
import { useParams } from "react-router-dom";
import { getPublicPostById } from "../../api/getPosts";
import { Post } from "../../constants/modals/Post";

interface ChatBoxProps {}

export const ChatBox: React.FC<ChatBoxProps> = () => {
  const { id } = useParams();
  const [activePost, setActivePost] = useState<Post | null>(null);
  const [msgClient] = useState<MessageClient>(() => {
    return new MessageClient(
      supabase.auth.user()?.user_metadata.full_name
    );
  });

  useEffect(() => {
    if (id) {
      (async() => {
        const data = await getPublicPostById(id);
        console.log('data', data);
        if (data && data.length > 0) {
          setActivePost(data[0]);
        }
      })() 
    }
  }, [])

  return (
    <Container>
      <PubNubProvider client={msgClient.pubnub}>
        {activePost === null ? (
          <CircularProgress />
        ) : (
          <>
          <Typography variant="h6">Chat - {activePost.loc_name}{" (" + activePost.chat_id + ")"}</Typography>
          <Chat currentChannel={activePost.chat_id} >
            <MessageList enableReactions>
              <TypingIndicator />
            </MessageList>
            <MessageInput typingIndicator />
          </Chat>
          </>
        )}
      </PubNubProvider>
    </Container>
  );
};
