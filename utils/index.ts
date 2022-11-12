import { Chat, Message } from "../types/chat";

export const getLastMessage = (chat: Chat): Message => {
  const writtenMessages = chat.messages.filter(
    (message) => message.type === "MESSAGE"
  );

  return writtenMessages.reduce((prev, current) =>
    prev.timestamp > current.timestamp ? prev : current
  );
};
