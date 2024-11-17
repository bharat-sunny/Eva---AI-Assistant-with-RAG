import { ChatMessage, ChatResponse } from './types';

export async function sendChatMessage(message: string, chatId?: string): Promise<ChatResponse & { chatId?: string }> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, chatId }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }

    return {
      response: data.response,
      chatId: data.chatId
    };
  } catch (error) {
    console.error('Chat error:', error);
    return {
      response: 'I apologize, but I encountered an error. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}