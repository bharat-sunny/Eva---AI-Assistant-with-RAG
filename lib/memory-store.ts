// Simple in-memory store for demo purposes
interface Chat {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Message {
  id: string;
  chatId: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: Date;
}

class MemoryStore {
  private chats: Chat[] = [];
  private messages: Message[] = [];

  createChat(title: string): Chat {
    const chat = {
      id: Math.random().toString(36).substring(7),
      title,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.chats.push(chat);
    return chat;
  }

  getChat(id: string): Chat | undefined {
    return this.chats.find(chat => chat.id === id);
  }

  getRecentChats(limit: number = 10): Chat[] {
    return this.chats
      .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
      .slice(0, limit);
  }

  addMessage(chatId: string, role: 'user' | 'assistant', content: string): Message {
    const message = {
      id: Math.random().toString(36).substring(7),
      chatId,
      role,
      content,
      createdAt: new Date()
    };
    this.messages.push(message);
    return message;
  }

  getChatMessages(chatId: string): Message[] {
    return this.messages
      .filter(message => message.chatId === chatId)
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }
}

export const store = new MemoryStore();