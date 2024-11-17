"use client";

import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChatHistory() {
  return (
    <div className="space-y-2 p-4">
      <p className="text-sm text-muted-foreground text-center p-4">
        Chat history is not available in the demo version
      </p>
      <Button
        variant="ghost"
        className="w-full justify-start text-left space-x-2"
        disabled
      >
        <FileText className="h-4 w-4" />
        <div className="flex-1 truncate">
          <span className="block text-sm">Example Chat</span>
          <span className="block text-xs text-muted-foreground">
            Demo Version
          </span>
        </div>
      </Button>
    </div>
  );
}