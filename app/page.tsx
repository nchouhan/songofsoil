// A small change to trigger a re-compile
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { FarmMap } from "@/components/FarmMap";
import { SeasonalCalendar } from "@/components/SeasonalCalendar";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { getSortedJournalsData } from "@/lib/journals";
import { JournalCard } from "@/components/JournalCard";
import { Sprout, Flower2, Heart, TreePine, Users } from "lucide-react";

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
              icon: Sprout,
              iconColor: "text-green-600"
            },
            {
              title: "Flowers",
              description:
                "Field-grown blooms for homes and ceremonies.",
              icon: Flower2,
              iconColor: "text-pink-500"
            },
            {
              title: "Animals",
              description:
                "Happy, free-range flocks & herds that complete the farm loop.",
              icon: Heart,
              iconColor: "text-red-500"
            },
            {
              title: "Trees",
              description:
                "A living forest plan—shade today, ethical wood tomorrow.",
              icon: TreePine,
              iconColor: "text-green-700"
            },
            {
              title: "Community",
              description:
                "Local hands, local pride—skills and livelihoods rooted here.",
              icon: Users,
              iconColor: "text-blue-600"
            },
          ].map((x) => {
            const IconComponent = x.icon;
            return (
              <div key={x.title} className="rounded-2xl bg-millet px-8 py-10 border border-monsoon hover:border-terracotta transition-colors group">
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className={`w-8 h-8 ${x.iconColor}`} />
                </div>
                <h3 className="text-base font-semibold leading-7 text-kanhaGreen text-center">
                  {x.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-soil text-center">
                  {x.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>
      <Section
        title="What's growing this month"
        subtitle="Seasonal calendar (initial SKUs coming soon)"
      >
        <SeasonalCalendar />
      </Section>
      <Section title="Find us" subtitle="Two farms near the Kanha landscape">
        <div className="grid lg:grid-cols-2 gap-6">
          <FarmMap />
          <div className="rounded-2xl bg-millet px-8 py-10 text-sm space-y-2 border border-monsoon">
            <p>
              Nagjhola Farm (~35 acres):{" "}
              <a
                className="text-terracotta underline hover:text-kanhaGreen transition-colors"
                href="https://maps.app.goo.gl/GP4dNrfvT1sVxxwj6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
            </p>
            <p>
              Charegaon Farm (~10 acres):{" "}
              <a
                className="text-terracotta underline hover:text-kanhaGreen transition-colors"
                href="https://maps.app.goo.gl/LfbKnvguRWsP64Lm6"
                target="_blank"
                rel="noopener noreferrer"
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
      <div className="bg-terracotta">
        <Section title="Stay in touch">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white">Stay in the Loop</h2>
            <p className="text-xl text-millet mt-4 max-w-3xl mx-auto">
              Sign up for our newsletter to get the latest updates on what's in
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
