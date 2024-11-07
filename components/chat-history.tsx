"use client";

import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChatHistory() {
  const mockHistory = [
    { id: 1, title: "Product Documentation", date: "2024-03-20" },
    { id: 2, title: "User Manual", date: "2024-03-19" },
    { id: 3, title: "Technical Specs", date: "2024-03-18" },
  ];

  return (
    <div className="space-y-2 p-4">
      {mockHistory.map((chat) => (
        <Button
          key={chat.id}
          variant="ghost"
          className="w-full justify-start text-left space-x-2"
        >
          <FileText className="h-4 w-4" />
          <div className="flex-1 truncate">
            <span className="block text-sm">{chat.title}</span>
            <span className="block text-xs text-muted-foreground">{chat.date}</span>
          </div>
        </Button>
      ))}
    </div>
  );
}