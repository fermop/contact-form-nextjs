import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Toast({ onClose }: { onClose: () => void }) {
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onClose() 
      }, 600)
      
      return () => clearTimeout(timer)
    }
  }, [isClosing, onClose])

  return (
    <div className={`absolute top-4 bg-primary-green-800 text-white p-6 space-y-2 rounded-xl ${isClosing ? 'animate-fade-out-down' : 'animate-fade-in-up'}`}>
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