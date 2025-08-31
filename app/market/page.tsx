import { NewsletterForm } from "@/components/NewsletterForm";

export default function Market() {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Market</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">Find our fresh, seasonal produce at a farmers&apos; market near you or pick it up directly from the farm.</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 px-8 py-10">
              <h3 className="text-base font-semibold leading-7 text-gray-900">Saturday Farmer’s Market</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">8am - 12pm</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">123 Main St, Anytown</p>
            </div>
            <div className="rounded-2xl bg-gray-50 px-8 py-10">
              <h3 className="text-base font-semibold leading-7 text-gray-900">Sunday Farmer’s Market</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">10am - 2pm</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">456 Oak Ave, Anytown</p>
            </div>
            <div className="rounded-2xl bg-gray-50 px-8 py-10">
              <h3 className="text-base font-semibold leading-7 text-gray-900">On-Farm Pickups</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">By appointment only</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">Please contact us to schedule a pickup.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section bg-slate-50">
        <div className="container">
            <div className="text-center">
                <h2 className="text-3xl font-semibold">Stay in the Loop</h2>
                <p className="text-xl text-slate-600 mt-4 max-w-3xl mx-auto">Sign up for our newsletter to get the latest updates on what’s in season and where to find us.</p>
                <div className="mt-6">
                    <NewsletterForm />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}