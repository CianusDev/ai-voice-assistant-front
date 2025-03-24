"use client"
import { UIMessage } from "ai";
import Markdown from 'react-markdown'
import { motion } from "motion/react";
export function MessageContainer({
  messages,
  isLoading,
}: {
  messages: UIMessage[];
  isLoading: boolean;
}) {
  return (
    <div className="flex flex-col p-8  rounded-2xl bg-muted-foreground/20 overflow-y-auto max-w-4xl h-full w-full gap-4">
      {messages
        .filter((message) => message.role !== "user")
        .slice(-1)
        .map((message) => (
          <div key={message.id} className="whitespace-pre-wrap w-full">
            {!isLoading &&
              message.parts.map((part, index) => {
                switch (part.type) {
                  case "text":
                    return (
                      <motion.div
                        key={`text-${index}`}
                        className="flex flex-col gap-2"
                      >
                        <Markdown
                          components={{
                            a: ({ children, href }) => (
                            <a href={href} className="text-blue-500">
                              {children}
                            </a>
                          ),
                        }}
                      >
                        {part.text}
                      </Markdown>
                    </motion.div>
                    );
                }
              })}
          </div>
        ))}
    </div>
  );
}
