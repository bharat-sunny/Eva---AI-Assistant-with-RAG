"use client";

import { FileText, History, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ChatHistory } from "@/components/chat-history";
import { DocumentUpload } from "@/components/document-upload";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";

export function Sidebar() {
  const [showUpload, setShowUpload] = useState(false);

  return (
    <div className="flex h-full w-[300px] flex-col border-r bg-muted/10">
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Eva</h1>
          <ThemeToggle />
        </div>
        <Button 
          variant="outline" 
          className="w-full justify-start space-x-2"
          onClick={() => setShowUpload(true)}
        >
          <Upload className="h-4 w-4" />
          <span>Upload Documents</span>
        </Button>
      </div>
      
      <Separator />
      
      <div className="flex-1 overflow-hidden">
        <div className="p-4">
          <h2 className="text-sm font-semibold flex items-center gap-2">
            <History className="h-4 w-4" />
            Chat History
          </h2>
        </div>
        <ScrollArea className="h-[calc(100vh-12rem)]">
          <ChatHistory />
        </ScrollArea>
      </div>

      <DocumentUpload open={showUpload} onOpenChange={setShowUpload} />
    </div>
  );
}