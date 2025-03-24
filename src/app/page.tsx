"use client";
import { AiBot } from "@/components/ai/ai-bot";
import { MessageContainer } from "./_components/message-container";
import { useChat } from "@ai-sdk/react";
import { MessageInput } from "./_components/message-input";
export default function HomePage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
    });
  return (
    <div className="flex flex-col  justify-center items-center h-full">
      {(isLoading || messages.length === 0) && <AiBot isLoading={isLoading} />}
      {(messages.length > 0 && !isLoading) && 
      <main className="flex h-[calc(100vh-144px)] px-4  py-8 flex-col items-center justify-center w-full">
        <MessageContainer messages={messages} isLoading={isLoading} />
      </main>}
      <MessageInput handleSubmit={handleSubmit} input={input} handleInputChange={handleInputChange} isLoading={isLoading} />
    </div>
  );
}
