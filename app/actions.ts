'use server'

import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
})

export async function subscribeToNewsletter(prevState: { errors?: { email?: string[] }; message?: string } | null, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // TODO: Save email to database or newsletter service

  return { message: 'Thank you for subscribing!' }
}
