import React from 'react'

export default function Form() {
  return (
    <section className='animate-fade-in-up w-full max-w-185 p-6 sm:p-10 bg-white text-neutral-grey-900 rounded-md m-auto shadow-xl'>
      <h2 className='text-3xl font-bold mb-8'>Contact Us</h2>

      <form className='grid gap-4'>
        <div className='grid gap-4 sm:grid-cols-2'>
          <label htmlFor="firstname-input" className='grid gap-2 cursor-pointer'>
            <span>First Name <span className='text-primary-green-600'>*</span></span>
            <input
              id="firstname-input"
              type="text"
              className='border border-neutral-grey-500 focus:border-primary-green-600 hover:border-primary-green-600 outline-0 rounded-lg px-6 py-3 cursor-pointer duration-300'
            />
          </label>

          <label htmlFor="lastname-input" className='grid gap-2 cursor-pointer'>
            <span>Last Name <span className='text-primary-green-600'>*</span></span>
            <input
              id="lastname-input"
              type="text"
              className='border border-neutral-grey-500 focus:border-primary-green-600 hover:border-primary-green-600 outline-0 rounded-lg px-6 py-3 cursor-pointer duration-300'
            />
          </label>
        </div>

        <label htmlFor="email-input" className='grid gap-2 cursor-pointer'>
          <span>Email Address <span className='text-primary-green-600'>*</span></span>
          <input
            id="email-input"
            type="email"
            className='border border-neutral-grey-500 focus:border-primary-green-600 hover:border-primary-green-600 outline-0 rounded-lg px-6 py-3 cursor-pointer duration-300'
          />
        </label>

        <div className='grid gap-2'>
          <p className='cursor-pointer'>Query Type <span className='text-primary-green-600'>*</span></p>
          
          <div className='grid gap-4 sm:grid-cols-2'>            
            <label htmlFor="general" className='flex gap-4 items-center border border-neutral-grey-500 focus:border-primary-green-600 hover:border-primary-green-600 outline-0 rounded-lg px-6 py-3 cursor-pointer duration-300'>
              <input type="radio" id='general' name='queryType' className='accent-primary-green-600 sm:w-5 sm:h-5'/>
              <span>General Enquiry</span>
            </label>

            <label htmlFor="support" className='flex gap-4 items-center border border-neutral-grey-500 focus:border-primary-green-600 hover:border-primary-green-600 outline-0 rounded-lg px-6 py-3 cursor-pointer duration-300'>
              <input type="radio" id='support' name='queryType' className='accent-primary-green-600 sm:w-5 sm:h-5'/>
              <span>Support Request</span>
            </label>
          </div>
        </div>
        
        <label htmlFor="message-area" className='grid gap-2 cursor-pointer'>
          <span>Message <span className='text-primary-green-600'>*</span></span>
          <textarea 
            id="message-area" 
            name="message"
            className='w-full h-64 sm:h-32 border border-neutral-grey-500 focus:border-primary-green-600 hover:border-primary-green-600 outline-0 rounded-lg px-6 py-3 cursor-pointer duration-300'
          />
        </label>
        
        <label htmlFor="consent-checkbox" className='flex gap-6 my-6 items-center cursor-pointer'>
          <input 
            id="consent-checkbox" 
            name="message"
            type='checkbox'
            className='accent-primary-green-600 cursor-pointer duration-300'
          />
          <span>I consent to being contacted by the team <span className='text-primary-green-600'>*</span></span>
        </label>

        <button
          type='submit'
          className='bg-primary-green-600 hover:bg-primary-green-800 text-white font-bold rounded-md p-4 cursor-pointer duration-300'
        >
          Submit
        </button>
      </form>
    </section>
  )
}
