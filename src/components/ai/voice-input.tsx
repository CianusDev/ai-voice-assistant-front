"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Mic, Square } from 'lucide-react'

export function VoiceInput() {
  const [isListening, setIsListening] = useState(false)

  function handleVoiceInput() {
    setIsListening(!isListening)
  }
  return (
    <div className='flex items-center mt-auto  bottom-0 sticky h-16  justify-center w-full'>
        <Button
        onClick={handleVoiceInput}
        variant="outline" className='size-14 bg-muted-foreground/20 cursor-pointer rounded-full' >
            {isListening ? 
            <Square className='size-6 text-destructive fill-destructive animate-pulse'/> : 
            <Mic className='size-6'/>
            }
        </Button>
    </div>
  )
}
