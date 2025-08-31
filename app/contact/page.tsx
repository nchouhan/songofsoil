import { ContactForm } from '@/components/ContactForm'

export default function Contact() {
  return (
    <div className="section">
      <div className="container">
        <div className="h1">Contact Us</div>
        <p className="text-lg text-slate-600 mt-2">We’d love to hear from you. Here’s how you can reach us.</p>
        <ContactForm />
      </div>
    </div>
  )
}
