import { z } from 'zod';

const envSchema = z.object({
  OPENAI_API_KEY: z.string().min(1),
  PINECONE_API_KEY: z.string().min(1),
  PINECONE_ENVIRONMENT: z.string().min(1),
  PINECONE_INDEX: z.string().min(1),
});

export const env = envSchema.parse({
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  PINECONE_API_KEY: process.env.PINECONE_API_KEY,
  PINECONE_ENVIRONMENT: process.env.PINECONE_ENVIRONMENT,
  PINECONE_INDEX: process.env.PINECONE_INDEX,
});