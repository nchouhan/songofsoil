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
          className="block w-full rounded-md border-0 py-1.5 text-soil shadow-sm ring-1 ring-inset ring-monsoon placeholder:text-monsoon focus:ring-2 focus:ring-inset focus:ring-terracotta sm:text-sm sm:leading-6 bg-white"
          placeholder="you@example.com"
        />
        {state?.errors?.email && (
          <p className="text-sm text-terracotta mt-2">{state.errors.email.join(', ')}</p>
        )}
      </div>
      <button
        type="submit"
        className="mt-4 rounded-md bg-kanhaGreen px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta transition-colors"
      >
        Subscribe
      </button>
      {state?.message && (
        <p className="text-sm text-millet mt-2">{state.message}</p>
      )}
    </form>
  )
}