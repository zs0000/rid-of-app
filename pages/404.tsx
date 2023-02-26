import Link from 'next/link'
import React from 'react'

export default function Error() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center absolute'>
        <div className='py-4 text-2xl tracking-tighter font-bold'>
        Oops. Lost?
        </div>
        <Link className='underline hover:cursor-pointer' href="/dashboard">
        Back to Dashboard
        </Link>
    </div>
  )
}
