import { Chat } from "../../types/chat";
import uuid from "react-native-uuid";

export const getChats = (userId: string, matchedId: string): Chat[] => {
  const chatId = uuid.v4() as string;
  return [
    {
      chatId,
      messages: [
        {
          messageId: "f12fa5de-435e-4926-b9d0-7090810bd317",
          sentBy: matchedId,
          type: "MESSAGE",
          content: {
            text: "Hey, I'm interested in your hoodie!",
          },
          timestamp: 1620000000000,
        },
        {
          messageId: "10213fb6-07f1-40df-b1f2-d1ec6d4f7a9c",
          sentBy: matchedId,
          type: "COUNTER_OFFER",
          content: {
            offer: {
              yourItems: ["220daba3-4260-4764-92f6-97d82b013a57"],
              theirItems: ["4ed21f2a-dcb5-49be-a398-335704328fa1"],
            },
            status: "PENDING",
          },
          timestamp: 1630000000000,
        },
      ],
    },
  ];
};

export const chats: Chat[] = [
  ...getChats(
    "a1b2c3d4-e5f6-7g8h-9i0j-1k2l3m4n5o6p",
    "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p"
  ),
  {
    ...getChats(
      "74aa9a46-aff3-4ecc-a817-f6697b18eb74",
      "49b6a8f8-ca20-4e71-a4ec-73b705f476b3"
    )[0],
    chatId: "ef466674-51c6-4fe1-aee0-80360fd9f73a",
  },
];
