"use client"
import React  from 'react'
import { Button } from '../ui/button'
import { Mic, Square } from 'lucide-react'
import { Status } from '@11labs/react'

export function VoiceInput(
  { status,
    handleStartConversation,
    handleEndConversation
  }:{
    status:Status,
    handleStartConversation:()=>void,
    handleEndConversation:()=>void
  }
) {
  return (
    <div className='flex items-center  fixed bottom-0 h-20  justify-center w-full'>
        {status === "connected"?
        <Button
          onClick={handleEndConversation}
          variant="outline" className='size-14 cursor-pointer rounded-full'>
            <Square className='size-6 text-destructive fill-destructive animate-pulse'/> 
        </Button>
        :
        <Button
          onClick={handleStartConversation}
          variant="outline" className='size-14 cursor-pointer rounded-full'>
          <Mic className='size-6'/>
        </Button>
      }
    </div>
  )
}
