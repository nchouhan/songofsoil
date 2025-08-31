import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { FarmMap } from "@/components/FarmMap";
import { SeasonalCalendar } from "@/components/SeasonalCalendar";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { getSortedJournalsData } from "@/lib/journals";
import { JournalCard } from "@/components/JournalCard";

export default async function HomePage() {
  const latestJournals = (await getSortedJournalsData()).slice(0, 3);

  return (
    <>
      <Hero />
      <Section title="Our purpose" subtitle="Food • Flowers • Animals • Trees • Community">
        <div className="grid md:grid-cols-5 gap-4">
          {[
            {
              title: "Food",
              description:
                "Fresh, seasonal produce grown with soil-first practices.",
            },
            {
              title: "Flowers",
              description: "Field-grown blooms for homes and ceremonies.",
            },
            {
              title: "Animals",
              description:
                "Happy, free-range flocks & herds that complete the farm loop.",
            },
            {
              title: "Trees",
              description:
                "A living forest plan—shade today, ethical wood tomorrow.",
            },
            {
              title: "Community",
              description:
                "Local hands, local pride—skills and livelihoods rooted here.",
            },
          ].map((x) => (
            <div key={x.title} className="rounded-2xl bg-gray-50 px-8 py-10">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                {x.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {x.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
      <Section
        title="What’s growing this month"
        subtitle="Seasonal calendar (initial SKUs coming soon)"
      >
        <SeasonalCalendar />
      </Section>
      <Section title="Find us" subtitle="Two farms near the Kanha landscape">
        <div className="grid lg:grid-cols-2 gap-6">
          <FarmMap />
          <div className="rounded-2xl bg-gray-50 px-8 py-10 text-sm space-y-2">
            <p>
              Nagjhola Farm (~35 acres):{" "}
              <a
                className="text-blue-600 underline"
                href="https://maps.app.goo.gl/E8q4LwbiyeeHvKYBA"
                target="_blank"
              >
                Google Maps
              </a>
            </p>
            <p>
              Charegaon Farm (~10 acres):{" "}
              <a
                className="text-blue-600 underline"
                href="https://maps.app.goo.gl/Mk6qBshv18DEFAX38"
                target="_blank"
              >
                Google Maps
              </a>
            </p>
          </div>
        </div>
      </Section>
      <Section title="From the journal" subtitle="Notes from the field">
        <div className="grid md:grid-cols-3 gap-8">
          {latestJournals.map((journal) => (
            <JournalCard key={journal.id} journal={journal} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/journal" className="btn btn-primary">
            Read more
          </Link>
        </div>
      </Section>
      <div className="bg-slate-50">
        <Section title="Stay in touch">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Stay in the Loop</h2>
            <p className="text-xl text-slate-600 mt-4 max-w-3xl mx-auto">
              Sign up for our newsletter to get the latest updates on what’s in
              season and where to find us.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
