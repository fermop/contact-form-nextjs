import React, { useState } from 'react'
import { validateFirstName, validateLastName, validateEmail, validateQueryType, validateMessage, validateCheckBox } from "@/utils/validations"

interface FormProps {
  setSuccess: (value: boolean) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  consent: boolean;
}

interface TextField {
  label: string,
  name: keyof FormData,
  type?: string,
  value: string,
  error?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextField = ({ label, name, type = "text", value, error, onChange }: TextField) => (
  <label htmlFor={name} className='grid gap-2 cursor-pointer'>
    <span>{label} <span className='text-primary-green-600'>*</span></span>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className={`border ${!error ? 'border-neutral-grey-500 focus:border-primary-green-600 hover:border-primary-green-600' : 'animate-shake border-red-400 focus:border-red-400 hover:border-red-400'} outline-0 rounded-lg px-6 py-3 cursor-pointer duration-300`}
      aria-invalid={!!error}
    />
    {error && <p role="alert" className='animate-shake text-red-400'>{error}</p>}
  </label>
)

export default function Form({ setSuccess }: FormProps) {
  const [ formData, setFormData ] = useState<FormData>({firstName: '', lastName: '', email: '', queryType: '', message: '', consent: false})
  const [ errors, setErrors ] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const fieldValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value

    setFormData(prev => ({ ...prev, [name]: fieldValue }))
    
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!validateFirstName(formData.firstName)) newErrors.firstName = 'This field is required'
    if (!validateLastName(formData.lastName)) newErrors.lastName = 'This field is required'
    if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email address'
    if (!validateQueryType(formData.queryType)) newErrors.queryType = 'Please select a query type'
    if (!validateMessage(formData.message)) newErrors.message = 'This field is required'
    if (!validateCheckBox(formData.consent)) newErrors.consent = 'This field is required'

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

      <form className='grid gap-4' onSubmit={handleSubmit} noValidate>
        <div className='grid gap-4 sm:grid-cols-2'>
          <TextField 
            label='First Name'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />

          <TextField 
            label='Last Name'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </div>

        <TextField 
          label='Email Address'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <div className='grid gap-2'>
          <p className='cursor-pointer'>Query Type <span className='text-primary-green-600'>*</span></p>
          <div className='grid gap-4 sm:grid-cols-2'>            
            {['option1', 'option2'].map((opt, idx) => (
               <label key={opt} htmlFor={opt} className={`flex gap-4 items-center ${formData.queryType === opt && 'bg-primary-green-200 border-primary-green-600'} border border-neutral-grey-500 focus:border-primary-green-600 hover:border-primary-green-600 outline-0 rounded-lg px-6 py-3 cursor-pointer duration-300`}>
                <input 
                  type="radio" 
                  id={opt} 
                  name='queryType' 
                  value={opt}
                  checked={formData.queryType === opt}
                  onChange={handleChange}
                  className='accent-primary-green-600 sm:w-5 sm:h-5' 
                />
                <span>{idx === 0 ? 'General Enquiry' : 'Support Request'}</span>
              </label>
            ))}
          </div>
          {errors.queryType && <p role="alert" className='animate-shake text-red-400'>{errors.queryType}</p>}
        </div>
        
        <label htmlFor="message-area" className='grid gap-2 cursor-pointer'>
          <span>Message <span className='text-primary-green-600'>*</span></span>
          <textarea 
            id="message-area" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`resize-none w-full h-64 sm:h-32 border ${!errors.message ? 'border-neutral-grey-500 focus:border-primary-green-600 hover:border-primary-green-600' : 'animate-shake border-red-400 focus:border-red-400 hover:border-red-400'} outline-0 rounded-lg px-6 py-3 cursor-pointer duration-300`}
          />
          {errors.message && <p role="alert" className='animate-shake text-red-400'>{errors.message}</p>}
        </label>
        
        <div className='my-6 space-y-2'>
          <label htmlFor="consent-checkbox" className='flex gap-6 items-center cursor-pointer'>
            <input 
              id="consent-checkbox" 
              name="consent"
              type='checkbox'
              checked={formData.consent}
              onChange={handleChange}
              className='accent-primary-green-600 cursor-pointer duration-300'
            />
            <span>I consent to being contacted by the team <span className='text-primary-green-600'>*</span></span>
          </label>
          {errors.consent && <p role="alert" className='animate-shake text-red-400'>{errors.consent}</p>}
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
