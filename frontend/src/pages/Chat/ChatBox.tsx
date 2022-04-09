import { Container } from "@mui/material";
import { PubNubProvider } from "pubnub-react";
import React, { useState } from "react";
import MessageClient from "../../MessageClient";
import { Chat, MessageList, MessageInput, TypingIndicator } from "@pubnub/react-chat-components";

interface ChatBoxProps {}

export const ChatBox: React.FC<ChatBoxProps> = ({}) => {
  const [msgClient, setMsgClient] = useState<MessageClient>(() => {
    return new MessageClient(Date.now().toString());
  });

  return (
    <Container>
      <PubNubProvider client={msgClient.pubnub}>
        <Chat currentChannel={"Default"}>
          <MessageList enableReactions>
            <TypingIndicator />
          </MessageList>
          <MessageInput typingIndicator />
        </Chat>
      </PubNubProvider>
    </Container>
  );
};
