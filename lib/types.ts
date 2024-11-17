export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatResponse {
  response: string;
  error?: string;
}

export interface DocumentFile extends File {
  path?: string;
}