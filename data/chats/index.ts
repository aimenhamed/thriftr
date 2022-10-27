import { v4 as uuid } from "uuid";
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
          messageId: uuid(),
          sentBy: matchedId,
          type: "MESSAGE",
          content: {
            text: "Hey, I'm interested in your hoodie!",
          },
          timestamp: 1620000000000,
        },
        {
          messageId: uuid(),
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
