import { z } from 'zod';

export const chatSchema = z.object({
  id: z.string(),
  title: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const messageSchema = z.object({
  id: z.string(),
  chatId: z.string(),
  role: z.enum(['user', 'assistant']),
  content: z.string(),
  createdAt: z.date(),
});

export type Chat = z.infer<typeof chatSchema>;
export type Message = z.infer<typeof messageSchema>;