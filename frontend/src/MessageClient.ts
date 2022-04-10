import PubNub from "pubnub";

export default class MessageClient {
  pubnub: PubNub
  selectedChannel: string | undefined

  constructor (username: string) {
    this.pubnub = new PubNub({
      publishKey: process.env.REACT_APP_PUBNUB_PUBLISH_KEY || "",
      subscribeKey: process.env.REACT_APP_PUBNUB_SUSBCRIBE_KEY || "",
      uuid: username,
    });
  }
}
