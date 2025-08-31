import { Section } from "@/components/Section"
    export const metadata = { title: "Trees & Wood — SongOfSoil" }
    export default function TreesWood(){
      return (
        <>
          <Section title="Agroforestry plan">
            <p className="text-sm text-slate-700">Windbreaks, intercropping, shade for animals, and long-term woodlots.</p>
          </Section>
          <Section title="Species shortlist">
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Australian Teak</li>
              <li>Sandalwood</li>
              <li>Bamboo</li>
              <li>African Mahogany</li>
            </ul>
          </Section>
          <Section title="Compliance & ethics">
            <p className="text-sm text-slate-700">Our timber plan follows state regulations and permits for planting, felling, and transit. Sandalwood is a long-horizon species with strict compliance and traceability. Exotics are managed responsibly alongside Bamboo for soil and livelihood benefits.</p>
          </Section>
        </>
      )
    }