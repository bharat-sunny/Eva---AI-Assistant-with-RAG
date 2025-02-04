# Eva - AI Assistant Demo

Eva is a modern AI assistant web application that demonstrates RAG (Retrieval Augmented Generation) capabilities, allowing users to upload documents and interact with an AI that can reference this knowledge base.

[Eva AI Assistant](https://www.bharattankala.com/)

## 🚀 Tech Stack

### Frontend
- **Next.js 13** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Reusable component system
- **Lucide React** - Beautiful icons
- **next-themes** - Dark mode support

### Backend & AI
- **OpenAI GPT-4** - Large Language Model
- **Pinecone** - Vector database for document embeddings
- **LangChain** - AI/LLM framework
- **better-sqlite3** - SQLite database for chat history

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## ✨ Features

- 💬 Real-time chat interface
- 📁 Document upload and processing
- 🤖 AI-powered responses
- 🌙 Dark/Light mode
- 📱 Responsive design
- 📚 Chat history
- 🔍 RAG-based document search
- ⚡ Real-time message streaming

## 🛠️ Components

- **Chat Interface** - Real-time messaging UI
- **Document Upload** - File upload with progress
- **Sidebar** - Navigation and chat history
- **Theme Toggle** - Dark/Light mode switch

## 🏗️ Architecture

The application follows a modern React architecture with:
- Server Components (Next.js 13 App Router)
- Client Components (with "use client" directive)
- TypeScript for type safety
- Modular component design
- Clean project structure

## 📂 Project Structure

```
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── ui/             # UI components
│   └── layout/         # Layout components
├── lib/                # Utilities and types
│   ├── chat.ts        # Chat functionality
│   ├── db/            # Database utilities
│   └── types.ts       # TypeScript types
└── public/            # Static assets
```

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```env
   OPENAI_API_KEY=your_openai_key
   PINECONE_API_KEY=your_pinecone_key
   PINECONE_ENVIRONMENT=your_environment
   PINECONE_INDEX=your_index_name
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

## 🔒 Environment Variables

Required environment variables:
- `OPENAI_API_KEY` - OpenAI API key
- `PINECONE_API_KEY` - Pinecone API key
- `PINECONE_ENVIRONMENT` - Pinecone environment
- `PINECONE_INDEX` - Pinecone index name

## 📝 License

MIT License - feel free to use this demo as a starting point for your own projects!

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component system
- [Lucide](https://lucide.dev/) for the icons
- [Tailwind CSS](https://tailwindcss.com/) for the styling system
- [Next.js](https://nextjs.org/) for the framework
- [OpenAI](https://openai.com/) for the AI capabilities
- [Pinecone](https://www.pinecone.io/) for vector search
- [LangChain](https://js.langchain.com/) for the AI framework
