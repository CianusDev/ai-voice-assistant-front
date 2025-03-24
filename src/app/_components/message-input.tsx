import { Input } from '@/components/ui/input'
import { LoaderCircleIcon, MicIcon } from 'lucide-react'
import React from 'react'

export function MessageInput({handleSubmit, input, handleInputChange, isLoading}: {handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void, input: string, handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void, isLoading: boolean}) {
  return (
    <form onSubmit={handleSubmit} className="w-full fixed bottom-0 flex h-20  justify-center items-center">
    <div className="relative max-w-sm w-full">
      <Input
        className="peer bg-muted-foreground/20 h-12  pe-9 rounded-full"
        placeholder="Poser une question..."
        value={input}
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Press to speak"
        type="submit"
      >
        {isLoading ? (
          <LoaderCircleIcon
            className="animate-spin"
            size={16}
            role="status"
            aria-label="Loading..."
          />
        ) : (
          <MicIcon size={16} aria-hidden="true" />
        )}
      </button>
    </div>
  </form>
  )
}
