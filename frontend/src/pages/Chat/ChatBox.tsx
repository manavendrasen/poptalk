import { Container } from "@mui/material";
import { PubNubProvider } from "pubnub-react";
import React, { useState } from "react";
import MessageClient from "../../MessageClient";
import { Chat, MessageList, MessageInput } from "@pubnub/react-chat-components";

interface ChatBoxProps {}

export const ChatBox: React.FC<ChatBoxProps> = ({}) => {
  const [msgClient, setMsgClient] = useState<MessageClient>(() => {
    return new MessageClient(Date.now().toString());
  });

  return (
    <Container>
      <PubNubProvider client={msgClient.pubnub}>
        <Chat currentChannel={"Default"}>
        {/* Chat is an obligatory state provider. It allows you to configure some common component
          options, like the current channel and the general theme for the app. */}
          <MessageList />
          <MessageInput />
        </Chat>
      </PubNubProvider>
    </Container>
  );
};
