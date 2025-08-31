'use client'

import { useFormState } from 'react-dom'
import { subscribeToNewsletter } from '@/app/actions'

const initialState = null;

export function NewsletterForm() {
  const [state, formAction] = useFormState(subscribeToNewsletter, initialState)

  return (
    <form action={formAction} className="flex flex-col items-center max-w-sm mx-auto">
      <div className="w-full">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        />
        {state?.errors?.email && (
          <p className="text-sm text-red-500 mt-2">{state.errors.email.join(', ')}</p>
        )}
      </div>
      <button
        type="submit"
        className="mt-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Subscribe
      </button>
      {state?.message && (
        <p className="text-sm text-green-500 mt-2">{state.message}</p>
      )}
    </form>
  )
}