import React, { useState } from 'react'
import { validateFirstName, validateLastName, validateEmail, validateQueryType, validateMessage, validateCheckBox } from "@/utils/validations"

export default function Form(props: any) {
  const { setSuccess } = props
   const [ formData, setFormData ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: false
   })
  const [ errors, setErrors ] = useState<{firstName?: string, lastName?: string, email?: string, queryType?: string, message?: string, consent?: string}>({});

  const handleChange = (field: 'firstName' | 'lastName' | 'email' | 'queryType' | 'message' | 'consent') => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))

    if (field == 'consent') {
      setFormData(prev => ({ ...prev, [field]: e.target.checked }))
    }

    setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newErrors: {firstName?: string, lastName?: string, email?: string, queryType?: string, message?: string, consent?: string} = {}

    if (!validateFirstName(formData.firstName)) {
      newErrors.firstName = 'This field is required'
    }

    if (!validateLastName(formData.lastName)) {
      newErrors.lastName = 'This field is required'
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!validateQueryType(formData.queryType)) {
      newErrors.queryType = 'Please select a query type'
    }

    if (!validateMessage(formData.message)) {
      newErrors.message = 'This field is required'
    }

    if (!validateCheckBox(formData.consent)) {
      newErrors.consent = 'This field is required'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    setSuccess(true)
    setFormData({firstName: '', lastName: '', email: '', queryType: '', message: '', consent: false})
  }

  return (
    <section className='animate-fade-in-up w-full max-w-185 p-6 sm:p-10 bg-white text-neutral-grey-900 rounded-md m-auto shadow-xl'>
      <h2 className='text-3xl font-bold mb-8'>Contact Us</h2>

      <form 
        className='grid gap-4'
        onSubmit={handleSubmit}
        noValidate
      >
        <div className='grid gap-4 sm:grid-cols-2'>
          <label htmlFor="firstname-input" className='grid gap-2 cursor-pointer'>
            <span>First Name <span className='text-primary-green-600'>*</span></span>
            <input
              value={formData.firstName}
              onChange={handleChange('firstName')}
              id="firstname-input"
              type="text"
              className={`border ${!errors.firstName ? 'border-neutral-grey-500 focus:border-primary-green-600 hover:border-primary-green-600' : 'animate-shake border-red-400 focus:border-red-400 hover:border-red-400'} outline-0 rounded-lg px-6 py-3 cursor-pointer duration-300`}
            />
            {errors.firstName && <p className='animate-shake text-red-400'>{errors.firstName}</p>}
          </label>

          <label htmlFor="lastname-input" className='grid gap-2 cursor-pointer'>
            <span>Last Name <span className='text-primary-green-600'>*</span></span>
            <input
              value={formData.lastName}
              onChange={handleChange('lastName')}
              id="lastname-input"
              type="text"
              className={`border ${!errors.lastName ? 'border-neutral-grey-500 focus:border-primary-green-600 hover:border-primary-green-600' : 'animate-shake border-red-400 focus:border-red-400 hover:border-red-400'} outline-0 rounded-lg px-6 py-3 cursor-pointer duration-300`}
            />
            {errors.lastName && <p className='animate-shake text-red-400'>{errors.lastName}</p>}
          </label>
        </div>

        <label htmlFor="email-input" className='grid gap-2 cursor-pointer'>
          <span>Email Address <span className='text-primary-green-600'>*</span></span>
          <input
            value={formData.email}
            onChange={handleChange('email')}
            id="email-input"
            type="email"
            className={`border ${!errors.email ? 'border-neutral-grey-500 focus:border-primary-green-600 hover:border-primary-green-600' : 'animate-shake border-red-400 focus:border-red-400 hover:border-red-400'} outline-0 rounded-lg px-6 py-3 cursor-pointer duration-300`}
          />
          {errors.email && <p className='animate-shake text-red-400'>{errors.email}</p>}
        </label>

        <div className='grid gap-2'>
          <p className='cursor-pointer'>Query Type <span className='text-primary-green-600'>*</span></p>
          
          <div className='grid gap-4 sm:grid-cols-2'>            
            <label htmlFor="general" className={`flex gap-4 items-center ${formData.queryType == 'option1' && 'bg-primary-green-200 border-primary-green-600'} border border-neutral-grey-500 focus:border-primary-green-600 hover:border-primary-green-600 outline-0 rounded-lg px-6 py-3 cursor-pointer duration-300`}>
              <input type="radio" id='general' name='queryType' className='accent-primary-green-600 sm:w-5 sm:h-5' onChange={handleChange('queryType')} value={'option1'} checked={formData.queryType === 'option1'} />
              <span>General Enquiry</span>
            </label>

            <label htmlFor="support" className={`flex gap-4 items-center ${formData.queryType == 'option2' && 'bg-primary-green-200 border-primary-green-600'} border border-neutral-grey-500 focus:border-primary-green-600 hover:border-primary-green-600 outline-0 rounded-lg px-6 py-3 cursor-pointer duration-300`}>
              <input type="radio" id='support' name='queryType' className='accent-primary-green-600 sm:w-5 sm:h-5' onChange={handleChange('queryType')} value={'option2'} checked={formData.queryType === 'option2'} />
              <span>Support Request</span>
            </label>
          </div>
          {errors.queryType && <p className='animate-shake text-red-400'>{errors.queryType}</p>}
        </div>
        
        <label htmlFor="message-area" className='grid gap-2 cursor-pointer'>
          <span>Message <span className='text-primary-green-600'>*</span></span>
          <textarea 
            value={formData.message}
            onChange={handleChange('message')}
            id="message-area" 
            name="message"
            className={`resize-none w-full h-64 sm:h-32 border ${!errors.message ? 'border-neutral-grey-500 focus:border-primary-green-600 hover:border-primary-green-600' : 'animate-shake border-red-400 focus:border-red-400 hover:border-red-400'} outline-0 rounded-lg px-6 py-3 cursor-pointer duration-300`}
          />
          {errors.message && <p className='animate-shake text-red-400'>{errors.message}</p>}
        </label>
        
        <div className='my-6 space-y-2'>
          <label htmlFor="consent-checkbox" className='flex gap-6 items-center cursor-pointer'>
            <input 
              id="consent-checkbox" 
              name="consent"
              type='checkbox'
              checked={formData.consent}
              onChange={handleChange('consent')}
              className='accent-primary-green-600 cursor-pointer duration-300'
            />
            <span>I consent to being contacted by the team <span className='text-primary-green-600'>*</span></span>
          </label>
          {errors.consent && <p className='animate-shake text-red-400'>{errors.consent}</p>}
        </div>

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
