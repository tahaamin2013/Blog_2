'use client'

import { SafeUser } from '@/types/index'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

interface UserMenuProps {
    currentUser: SafeUser | null
  }


export default function Navbar({currentUser}:UserMenuProps) {


  return (
    <header>
         <nav className='bg-gray-100 flex justify-between px-20 py-4 shadow-xl'>
         <div className='font-semibold font-sans text-[25px]'>
          {currentUser ? (
            <span>Hello, <span className='text-emerald-500'>{currentUser?.name}</span></span>
          ) : (
            <span>Hello, Welcome!!!!</span>
          )}
        </div>
            <div className='flex gap-4 items-center'>
            <Link href='/'>Home</Link>
            <Link href='/create'>Create</Link>
            {currentUser ? <button onClick={() => signOut()} className='border-red-400 border-2 px-3 py-1 rounded'>Sign out</button> : <Link href='/register'>Register</Link>}
            </div>
        </nav>
    </header>
  )
}