import { Container } from "@mui/material";
import { PubNubProvider } from "pubnub-react";
import React, { useState } from "react";
import MessageClient from "../../MessageClient";
import { Chat, MessageList, MessageInput, TypingIndicator } from "@pubnub/react-chat-components";
import { supabase } from "../../supabaseClient";

interface ChatBoxProps {}

export const ChatBox: React.FC<ChatBoxProps> = () => {
  const [msgClient] = useState<MessageClient>(() => {
    return new MessageClient(
      supabase.auth.user()?.user_metadata.full_name
    );
  });

  return (
    <Container>
      <PubNubProvider client={msgClient.pubnub}>
        <Chat currentChannel={"Default"} >
          <MessageList enableReactions>
            <TypingIndicator />
          </MessageList>
          <MessageInput typingIndicator />
        </Chat>
      </PubNubProvider>
    </Container>
  );
};
