"use client"
import { Role } from "@11labs/react";
import Markdown from 'react-markdown'
import { motion } from "motion/react";
import { AiBot } from "@/components/ai/ai-bot";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
export function MessageContainer({
  messages,
  isLoading,
}: {
  messages: {message: string, source: Role}[];
  isLoading: boolean;
}) {



  useEffect(() => {
    console.log(messages);
    async function Init() {
      await navigator.mediaDevices.getUserMedia({ audio: true });
    }
    Init();
  }, [messages]);
  
  return (
    <div className=" p-8 relative z-10  rounded-2xl  overflow-y-auto max-w-4xl h-full w-full gap-4">
      {messages
        .filter((message) => message.source !== "user")
        .slice(-1)
        .map((message,index) => (
          <div key={message.message} className=" space-y-4 w-full">
            {!isLoading &&
                      <div
                        key={`text-${index}`}
                        className={cn("flex items-center  gap-2")}
                      >
                        <AiBot isLoading={isLoading} className='size-4 shrink-0' />
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className="text-md bg-muted-foreground/20 p-4 rounded-2xl"
                        >
                          <Markdown>{message.message}</Markdown>
                        </motion.div>
                    </div>
                  
              }
          </div>
        ))}
    </div>
  );
}
