import { Hero } from "@/components/Hero"
    import { Section } from "@/components/Section"
    import { FarmMap } from "@/components/FarmMap"
    import { SeasonalCalendar } from "@/components/SeasonalCalendar"
    import Link from "next/link"
    export default function HomePage(){
      return (
        <>
          <Hero />
          <Section title="Our purpose" subtitle="Food • Flowers • Animals • Trees • Community">
            <div className="grid md:grid-cols-5 gap-4">
              {["Food","Flowers","Animals","Trees","Community"].map(x => (
                <div key={x} className="card p-5">
                  <div className="font-semibold">{x}</div>
                  <p className="mt-2 text-sm text-slate-600">
                    {x==="Food" && "Fresh, seasonal produce grown with soil-first practices."}
                    {x==="Flowers" && "Field-grown blooms for homes and ceremonies."}
                    {x==="Animals" && "Happy, free-range flocks & herds that complete the farm loop."}
                    {x==="Trees" && "A living forest plan—shade today, ethical wood tomorrow."}
                    {x==="Community" && "Local hands, local pride—skills and livelihoods rooted here."}
                  </p>
                </div>
              ))}
            </div>
          </Section>
          <Section title="What’s growing this month" subtitle="Seasonal calendar (initial SKUs coming soon)">
            <SeasonalCalendar />
          </Section>
          <Section title="Find us" subtitle="Two farms near the Kanha landscape">
            <div className="grid lg:grid-cols-2 gap-6">
              <FarmMap />
              <div className="card p-5 text-sm space-y-2">
                <p>Nagjhola Farm (~35 acres): <a className="text-blue-600 underline" href="https://maps.app.goo.gl/E8q4LwbiyeeHvKYBA" target="_blank">Google Maps</a></p>
                <p>Charegaon Farm (~10 acres): <a className="text-blue-600 underline" href="https://maps.app.goo.gl/Mk6qBshv18DEFAX38" target="_blank">Google Maps</a></p>
                <p className="text-slate-600">Set Mapbox token in <code>.env.local</code> to enable interactive markers.</p>
              </div>
            </div>
          </Section>
          <Section title="From the journal" subtitle="Notes from the field">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { href: "/journal/why-soil-matters", title: "Why soil matters near Kanha", summary: "Healthy soil is our first crop." },
                { href: "/journal/monsoon-diary", title: "Monsoon diary", summary: "The season of abundance and repair." },
                { href: "/journal/pollinators-we-love", title: "Pollinators we love", summary: "Bees, butterflies, and wildflower hedgerows." },
              ].map(p => (
                <a key={p.href} href={p.href} className="card p-5 hover:shadow-lg transition-shadow">
                  <div className="font-semibold">{p.title}</div>
                  <p className="mt-1 text-sm text-slate-600">{p.summary}</p>
                </a>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/journal" className="btn btn-primary">Read more</Link>
            </div>
          </Section>
          <Section title="Stay in touch">
            <div className="card p-6">
              <p className="text-sm text-slate-700">Walk the seasons with us—notes from the field, once or twice a month.</p>
              <form className="mt-4 flex gap-2">
                <input type="email" required placeholder="you@example.com" className="flex-1 border rounded-xl px-3 py-2"/>
                <button className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </Section>
        </>
      )
    }