import React from 'react'
import { HeaderOption } from './header-option'
export function Header() {
  return (
    <header className='flex p-4 h-16 fixed border-border top-0 z-50  w-full items-center justify-between'>
        <h1 className='text-2xl font-bold'>AI</h1>
        <div className='ml-auto'>
            <HeaderOption />
        </div>
    </header>
  )
}
