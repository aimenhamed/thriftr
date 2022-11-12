import { Chat } from "../../types/chat";

export const getChats = (
  userId: string,
  matchedId: string,
  yourItems: string[],
  theirItems: string[]
): Chat[] => {
  const chatId = "ef466674-51c6-4fe1-aee0-80360fd9f73a";

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
          sentBy: userId,
          type: "COUNTER_OFFER",
          content: {
            offer: {
              yourItems,
              theirItems,
            },
            status: "PENDING",
          },
          timestamp: 1630000000000,
        },
      ],
    },
  ];
};
