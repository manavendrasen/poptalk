import { CircularProgress, Container } from "@mui/material";
import { PubNubProvider } from "pubnub-react";
import React, { useEffect, useState } from "react";
import MessageClient from "../../MessageClient";
import { Chat, MessageList, MessageInput, TypingIndicator } from "@pubnub/react-chat-components";
import { supabase } from "../../supabaseClient";
import { useParams } from "react-router-dom";

interface ChatBoxProps {}

export const ChatBox: React.FC<ChatBoxProps> = () => {
  const { id } = useParams();
  const [channel, setChannel] = useState(null);
  const [msgClient] = useState<MessageClient>(() => {
    return new MessageClient(
      supabase.auth.user()?.user_metadata.full_name
    );
  });

  useEffect(() => {
    if (id) {
      supabase.from("posts").select().eq("id", parseInt(id)).then(({ data }) => {
        if (data && data.length > 0) {
          setChannel(data[0].chat_id);
        }
      })
    }
  })

  return (
    <Container>
      <PubNubProvider client={msgClient.pubnub}>
        {channel === null ? (
          <CircularProgress />
        ) : (
          <Chat currentChannel={channel} >
            <MessageList enableReactions>
              <TypingIndicator />
            </MessageList>
            <MessageInput typingIndicator />
          </Chat>
        )}
      </PubNubProvider>
    </Container>
  );
};
