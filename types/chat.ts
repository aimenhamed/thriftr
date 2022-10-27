export interface Message {
  messageId: string;
  sentBy: string;
  type: "MESSAGE" | "COUNTER_OFFER";
  content: {
    offer?: {
      yourItems: string[];
      theirItems: string[];
    };
    status?: "ACCEPTED" | "REJECTED" | "PENDING";
    text?: string;
  };
  timestamp: number;
}

export interface Chat {
  chatId: string;
  messages: Message[];
}
