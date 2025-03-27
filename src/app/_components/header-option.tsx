import React from 'react'
import { Button } from '@/components/ui/button'
import { Settings2, UserIcon } from 'lucide-react'

export function HeaderOption() {
  return (
    <div className='flex items-center gap-2'>
        <Button 
        className='rounded-full'
        variant='outline' size='icon'>
            <UserIcon className='w-4 h-4' />
        </Button>
        <Button 
        className='rounded-full'
        variant='outline' size='icon'>
            <Settings2 className='w-4 h-4' />
        </Button>
    </div>
  )
}
