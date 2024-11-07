import { NextResponse } from 'next/server';
import { PineconeClient } from '@pinecone-database/pinecone';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { OpenAI } from 'langchain/llms/openai';
import { VectorDBQAChain } from 'langchain/chains';
import { PineconeStore } from 'langchain/vectorstores/pinecone';

// Initialize Pinecone client
const pinecone = new PineconeClient();

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Initialize Pinecone (you'll need to set these environment variables)
    await pinecone.init({
      environment: process.env.PINECONE_ENVIRONMENT!,
      apiKey: process.env.PINECONE_API_KEY!,
    });

    const index = pinecone.Index(process.env.PINECONE_INDEX!);

    // Initialize OpenAI embeddings
    const embeddings = new OpenAIEmbeddings({
      openAIApiKey: process.env.OPENAI_API_KEY,
    });

    // Initialize vector store
    const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
      pineconeIndex: index,
      namespace: 'eva-docs',
    });

    // Initialize the model and chain
    const model = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      modelName: 'gpt-4-turbo-preview',
      temperature: 0.7,
    });

    const chain = VectorDBQAChain.fromLLM(model, vectorStore, {
      k: 5, // Number of relevant documents to retrieve
      returnSourceDocuments: true,
    });

    // Get response from the chain
    const response = await chain.call({
      query: message,
    });

    return NextResponse.json({ response: response.text });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}