import { chats as chatData } from "../data/chats";
import { profiles as profileData } from "../data/profiles";
import { Chat, Message } from "../types/chat";
import { Profile } from "../types/profile";
import uuid from "react-native-uuid";
import { Item } from "../types/item";

class BackendMock {
  private profiles: Profile[];
  private chats: Chat[];
  private currentUserId: string ;
  private currentItemId: string | undefined;

  constructor() {
    this.profiles = profileData;
    this.chats = chatData;
    this.currentUserId = "49b6a8f8-ca20-4e71-a4ec-73b705f476b3";
    this.currentItemId = "";
  }

  public getProfile = (userId: string): Profile | undefined => {
    return this.profiles.find((profile) => profile.userId === userId);
  };

  public getProfileByName = (userName: string): Profile | undefined => {
    return this.profiles.find((profile) => profile.name === userName);
  };
  public getChat = (chatId: string): Chat | undefined => {
    return this.chats.find((chat) => chat.chatId === chatId);
  };

  public updateProfile = (newProfile: Profile): void => {
    const i = this.profiles.findIndex((profile) => profile.userId === newProfile.userId);
    this.profiles[i] = newProfile;
  };

  public deleteProfile = (userId: string): void => {
    this.profiles = this.profiles.filter((profile) => profile.userId !== userId);
  }

  public setCurrentUserId = (userId: string): void => {
    this.currentUserId = userId;
  };

  public getCurrentUserId = (): string => {
    return this.currentUserId;
  }

  public setCurrentItemId = (itemId: string | undefined): void => {
    this.currentItemId = itemId;
  }

  public getCurrentItemId = (): string | undefined => {
    return this.currentItemId;
  }

  public addProfile = (newProfile: Profile): void => {
    this.profiles.push(newProfile);
  }

  public getItem = (userId: string, itemId: string): Item | undefined => {
    return this.profiles.find((profile) => profile.userId === userId)?.items.find((item) => item.itemId === itemId);
  }

  public deleteItem = (userId: string, itemId: string): void => {
    const profileIndex = this.profiles.findIndex((profile) => profile.userId === userId);
    if (profileIndex === -1) {
      return
    } else {
      this.profiles[profileIndex].items = this.profiles[profileIndex].items.filter((item) => item.itemId !== itemId);
    }
  }

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
