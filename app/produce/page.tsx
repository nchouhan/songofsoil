import { Section } from "@/components/Section"
    import { SeasonalCalendar } from "@/components/SeasonalCalendar"
    export const metadata = { title: "Produce — SongOfSoil" }
    export default function Produce(){
      return (
        <>
          <Section title="Seasonal calendar" subtitle="Initial SKUs & weekly drop days — Coming Soon">
            <SeasonalCalendar />
          </Section>
          <Section title="How to buy">
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Farm-gate sales (select days) — Coming Soon</li>
              <li>Weekly drops & partner stores/resorts — Coming Soon</li>
              <li>WhatsApp ordering — Coming Soon</li>
            </ul>
          </Section>
        </>
      )
    }