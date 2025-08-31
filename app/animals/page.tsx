import { Section } from "@/components/Section"
    export const metadata = { title: "Animals — SongOfSoil" }
    export default function Animals(){
      return (
        <>
          <Section title="Chickens, goats, cows">
            <p className="text-sm text-slate-700">Breed bios, free-range feed & foraging, and housing details — Coming Soon.</p>
          </Section>
          <Section title="Farm loop">
            <p className="text-sm text-slate-700">Eggs and dairy (if/when introduced), manure-to-compost loop, pasture rotation.</p>
          </Section>
        </>
      )
    }