import PubNub from "pubnub";

export default class MessageClient {
  pubnub: PubNub
  selectedChannel: string | undefined

  constructor (username: string) {
    this.pubnub = new PubNub({
      publishKey: process.env.PUBNUB_PUBLISH_KEY || "",
      subscribeKey: process.env.PUBNUB_SUSCRIBE_KEY || "",
      uuid: username,
    });
  }

  joinChannel(channelName: string) {
    this.selectedChannel = channelName;
  }

} 