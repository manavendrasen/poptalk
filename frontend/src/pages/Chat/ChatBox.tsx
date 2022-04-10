import { CircularProgress, Container, Typography, Box } from "@mui/material";
import { PubNubProvider } from "pubnub-react";
import React, { useEffect, useState } from "react";
import MessageClient from "../../MessageClient";
import {
  Chat,
  MessageList,
  MessageInput,
  TypingIndicator,
} from "@pubnub/react-chat-components";
import { supabase } from "../../supabaseClient";
import { useParams } from "react-router-dom";
import { getPublicPostById } from "../../api/getPosts";
import { Post } from "../../constants/modals/Post";

interface ChatBoxProps {}

export const ChatBox: React.FC<ChatBoxProps> = () => {
  const { id } = useParams();
  const [activePost, setActivePost] = useState<Post | null>(null);
  const [msgClient] = useState<MessageClient>(() => {
    return new MessageClient(supabase.auth.user()?.user_metadata.full_name);
  });

  useEffect(() => {
    if (id) {
      (async () => {
        const data = await getPublicPostById(id);
        console.log("data", data);
        if (data && data.length > 0) {
          setActivePost(data[0]);
        }
      })();
    }
  }, [id]);

  return (
    <Container>
      <PubNubProvider client={msgClient.pubnub}>
        {activePost === null ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Typography variant='h6'>Chat</Typography>
            <Box
              sx={{
                padding: "0.5rem 1rem",
                borderRadius: "1rem",
                background: "#F1F2F6",
                marginTop: "0.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <Typography variant='body1'>
                {activePost.loc_name}
                {" (" + activePost.chat_id + ")"}
              </Typography>
            </Box>

            <Box
              sx={{
                flex: "1",
                height: "calc(72vh + 10px)",
                marginTop: "1rem",
                background: "background.paper",
                borderRadius: "8px",
              }}
            >
              <Chat theme='light' currentChannel={activePost.chat_id}>
                <MessageList enableReactions fetchMessages={10}>
                  <TypingIndicator />
                </MessageList>
                <MessageInput typingIndicator />
              </Chat>
            </Box>
          </>
        )}
      </PubNubProvider>
    </Container>
  );
};
