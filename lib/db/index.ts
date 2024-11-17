import Database from 'better-sqlite3';
import { nanoid } from 'nanoid';
import { Chat, Message } from './schema';

const db = new Database('chat.db');

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Create tables if they don't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS chats (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS messages (
    id TEXT PRIMARY KEY,
    chat_id TEXT NOT NULL,
    role TEXT NOT NULL CHECK(role IN ('user', 'assistant')),
    content TEXT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (chat_id) REFERENCES chats(id) ON DELETE CASCADE
  );
`);

// Prepare statements
const createChat = db.prepare(`
  INSERT INTO chats (id, title, created_at, updated_at)
  VALUES (?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
`);

const updateChatTitle = db.prepare(`
  UPDATE chats
  SET title = ?, updated_at = CURRENT_TIMESTAMP
  WHERE id = ?
`);

const createMessage = db.prepare(`
  INSERT INTO messages (id, chat_id, role, content)
  VALUES (?, ?, ?, ?)
`);

const getChat = db.prepare(`
  SELECT 
    id,
    title,
    created_at as createdAt,
    updated_at as updatedAt
  FROM chats
  WHERE id = ?
`);

const getChatMessages = db.prepare(`
  SELECT 
    id,
    chat_id as chatId,
    role,
    content,
    created_at as createdAt
  FROM messages
  WHERE chat_id = ?
  ORDER BY created_at ASC
`);

const getRecentChats = db.prepare(`
  SELECT 
    id,
    title,
    created_at as createdAt,
    updated_at as updatedAt
  FROM chats
  ORDER BY updated_at DESC
  LIMIT ?
`);

export const db_utils = {
  createNewChat: (title: string): Chat => {
    const id = nanoid();
    createChat.run(id, title);
    return getChat.get(id);
  },

  updateChatTitle: (id: string, title: string): void => {
    updateChatTitle.run(title, id);
  },

  addMessage: (chatId: string, role: 'user' | 'assistant', content: string): Message => {
    const id = nanoid();
    createMessage.run(id, chatId, role, content);
    return {
      id,
      chatId,
      role,
      content,
      createdAt: new Date(),
    };
  },

  getChat: (id: string): Chat | undefined => {
    return getChat.get(id);
  },

  getChatMessages: (chatId: string): Message[] => {
    return getChatMessages.all(chatId);
  },

  getRecentChats: (limit: number = 10): Chat[] => {
    return getRecentChats.all(limit);
  },
};