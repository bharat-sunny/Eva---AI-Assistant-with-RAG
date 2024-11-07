import { ChatInterface } from "@/components/chat-interface";
import { Sidebar } from "@/components/layout/sidebar";

export default function Home() {
  return (
    <main className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 p-4">
        <ChatInterface />
      </div>
    </main>
  );
}