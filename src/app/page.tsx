"use client";
import { AiBot } from "@/components/ai/ai-bot";
import { VoiceInput } from "@/components/ai/voice-input";
import { Role, useConversation } from "@11labs/react";
import { useEffect, useState } from "react";
import { MessageContainer } from "./_components/message-container";

export default function HomePage() {
  const [messages, setMessages] = useState<{message: string, source: Role}[]>([])
  const [errorMessage, setErrorMessage] = useState('')
  const [hasPermission, setHasPermission] = useState(false)
  // const [isActive, setIsActive] = useState(false)
  // const [showChat, setShowChat] = useState(false)
  // const [connectionStatus, setConnectionStatus] = useState('disconnected')
  const conversation = useConversation({
    onConnect: () => {
      console.log("Connected to ElevenLabs");
    },
    onDisconnect: () => {
      console.log("Disconnected from ElevenLabs");
    },
    onMessage: (message) => {
      setMessages(prevMessages => [...prevMessages, message])
      console.log({message})
    },
    onError: (error: string | Error) => {
      setErrorMessage(typeof error === "string" ? error : error.message);
      console.error("Error:", error);
    },
  });

  const { status, isSpeaking } = conversation;

  useEffect(() => {
    // Request microphone permission on component mount
    const requestMicPermission = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        setHasPermission(true);
      } catch (error) {
        setErrorMessage("Microphone access denied");
        console.error("Error accessing microphone:", error);
      }
    };

    requestMicPermission();
  }, []);


  const handleStartConversation = async () => {
    try {
      const conversationId = await conversation.startSession({
        agentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID!,
      });
      console.log("Started conversation:", conversationId);
    } catch (error) {
      setErrorMessage("Failed to start conversation");
      console.error("Error starting conversation:", error);
    }
  };


  const handleEndConversation = async () => {
    try {
      await conversation.endSession();
    } catch (error) {
      setErrorMessage("Failed to end conversation");
      console.error("Error ending conversation:", error);
    }
  };



  return (
    <div className="flex flex-col  justify-center items-center h-full">
      {/* {(isLoading || messages.length === 0) && */}
       <AiBot 
      //  isLoading={isSpeaking}
        />
       {/* } */}
      {(messages.length > 0 && !isSpeaking) &&  
        <main className="flex h-[calc(100vh-144px)] px-4  py-8 flex-col items-center justify-center w-full">
          {<MessageContainer messages={messages} isLoading={isSpeaking} />}
          {errorMessage && <p className="text-destructive">{errorMessage}</p>}
          {isSpeaking && <p className="text-muted-foreground">en train de parler ...</p>}
          {!hasPermission && (
              <p className="text-yellow-600">
                Veuillez premettre l&apos;utilisation du microphone
              </p>
            )}
        </main>
      }
      <VoiceInput 
        status={status}
        handleEndConversation={handleEndConversation}
        handleStartConversation={handleStartConversation}/>
    </div>
  );
}
