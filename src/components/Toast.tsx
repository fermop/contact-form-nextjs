import Image from 'next/image'
import React from 'react'

export default function Toast() {
  return (
    <div className='absolute animate-fade-in-up top-4 bg-primary-green-800 text-white p-6 space-y-2 rounded-xl'>
      <h2 className='flex items-center gap-2 font-bold'>
        <Image 
          src={'/images/icon-success-check.svg'}
          alt=''
          width={44}
          height={44}
          className='w-5 h-5'
        />

        Message Sent!
      </h2>

      <p>Thanks for completing the form. We'll be in touch soon!</p>
    </div>
  )
}
