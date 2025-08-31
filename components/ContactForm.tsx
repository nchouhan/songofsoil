'use client'

import { useFormState } from 'react-dom'
import { submitContactForm } from '@/app/actions'
import { SubmitButton } from '@/components/SubmitButton'

const initialState = {
  message: null,
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState)

  return (
    <form action={formAction} className="mt-8 max-w-lg">
      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-slate-700">First name</label>
          <div className="mt-1">
            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="py-3 px-4 block w-full shadow-sm focus:ring-slate-500 focus:border-slate-500 border-slate-300 rounded-md" />
          </div>
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium text-slate-700">Last name</label>
          <div className="mt-1">
            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="py-3 px-4 block w-full shadow-sm focus:ring-slate-500 focus:border-slate-500 border-slate-300 rounded-md" />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
          <div className="mt-1">
            <input id="email" name="email" type="email" autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-slate-500 focus:border-slate-500 border-slate-300 rounded-md" />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
          <div className="mt-1">
            <textarea id="message" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-slate-500 focus:border-slate-500 border border-slate-300 rounded-md" />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <SubmitButton />
      </div>
      {state.message && <p className="mt-4 text-green-600">{state.message}</p>}
    </form>
  )
}
