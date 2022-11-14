import { chats as chatData } from "../data/chats";
import { profiles as profileData } from "../data/profiles";
import { Chat, Message } from "../types/chat";
import { Profile } from "../types/profile";
import uuid from "react-native-uuid";

class BackendMock {
  private profiles: Profile[];
  private chats: Chat[];

  constructor() {
    this.profiles = profileData;
    this.chats = chatData;
  }

  public getProfile = (userId: string): Profile | undefined => {
    return this.profiles.find((profile) => profile.userId === userId);
  };

  public getChat = (chatId: string): Chat | undefined => {
    return this.chats.find((chat) => chat.chatId === chatId);
  };

  public sendMessage = (chatId: string, message: Message): void => {
    message.messageId = uuid.v4() as string;
    this.chats = this.chats.map((chat) => {
      if (chat.chatId === chatId) {
        return {
          ...chat,
          messages: [...chat.messages, message],
        };
      }
      return chat;
    });
  };

  public replyToOffer = (
    chatId: string,
    messageId: string,
    status: "ACCEPTED" | "REJECTED"
  ): Chat | undefined => {
    const chatWithMessage = this.getChat(chatId)!;

    const updatedMessage = chatWithMessage.messages.find(
      (message) => messageId === message.messageId
    )!;
    updatedMessage.timestamp = new Date().getTime();
    updatedMessage.content.status = status;

    this.chats = this.chats.map((chat) => {
      if (chatWithMessage.chatId === chat.chatId) {
        return {
          ...chat,
          messages: [
            ...chat.messages.filter((m) => m.messageId !== messageId),
            updatedMessage,
          ],
        };
      }
      return chat;
    });
    return this.getChat(chatWithMessage.chatId);
  };
}

export const Backend = new BackendMock();
