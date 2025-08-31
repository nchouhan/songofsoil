import { Section } from "@/components/Section"
import { TreeSpeciesCard } from "@/components/TreeSpeciesCard"
import { treeSpecies } from "@/lib/treeSpecies"
import Link from "next/link"

export const metadata = { title: "Trees & Wood — SongOfSoil" }

export default function TreesWood(){
  return (
    <>
      <Section title="Agroforestry Plan">
        <div className="max-w-4xl">
          <p className="text-lg text-soil mb-6">
            Our comprehensive agroforestry strategy integrates trees with agricultural practices to create a sustainable, productive ecosystem that benefits both the environment and our community.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-millet p-6 rounded-2xl border border-monsoon">
              <h3 className="text-xl font-semibold text-kanhaGreen mb-3">Windbreaks & Shelter</h3>
              <p className="text-soil text-sm">
                Strategic tree planting to protect crops and livestock from wind damage, reduce soil erosion, and create microclimates that improve agricultural productivity.
              </p>
            </div>
            
            <div className="bg-millet p-6 rounded-2xl border border-monsoon">
              <h3 className="text-xl font-semibold text-kanhaGreen mb-3">Intercropping Systems</h3>
              <p className="text-soil text-sm">
                Trees integrated with annual crops to maximize land use, improve soil fertility through nitrogen fixation, and provide additional income streams.
              </p>
            </div>
            
            <div className="bg-millet p-6 rounded-2xl border border-monsoon">
              <h3 className="text-xl font-semibold text-kanhaGreen mb-3">Shade & Livestock</h3>
              <p className="text-soil text-sm">
                Tree canopies providing natural shade for animals, reducing heat stress and improving animal welfare while creating comfortable grazing environments.
              </p>
            </div>
            
            <div className="bg-millet p-6 rounded-2xl border border-monsoon">
              <h3 className="text-xl font-semibold text-kanhaGreen mb-3">Long-term Woodlots</h3>
              <p className="text-soil text-sm">
                Dedicated areas for high-value timber species, ensuring sustainable wood production for future generations while maintaining biodiversity.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Species Shortlist" subtitle="Carefully selected trees for our agroforestry system">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treeSpecies.map((tree, index) => (
            <TreeSpeciesCard key={index} tree={tree} />
          ))}
        </div>
      </Section>

      <Section title="Planting & Management">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-millet p-6 rounded-2xl border border-monsoon">
            <h3 className="text-xl font-semibold text-kanhaGreen mb-4">Planting Schedule</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-soil">Monsoon Season (June-September)</span>
                <span className="text-sm bg-terracotta text-white px-3 py-1 rounded-full">Primary Planting</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-soil">Winter (November-February)</span>
                <span className="text-sm bg-monsoon text-white px-3 py-1 rounded-full">Maintenance</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-soil">Summer (March-May)</span>
                <span className="text-sm bg-kanhaGreen text-white px-3 py-1 rounded-full">Irrigation</span>
              </div>
            </div>
          </div>
          
          <div className="bg-millet p-6 rounded-2xl border border-monsoon">
            <h3 className="text-xl font-semibold text-kanhaGreen mb-4">Care Practices</h3>
            <ul className="space-y-2 text-sm text-soil">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-terracotta rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Regular watering during establishment phase (first 2-3 years)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-terracotta rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Pruning for optimal growth and timber quality
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-terracotta rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Organic pest management and disease prevention
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-terracotta rounded-full mr-3 mt-2 flex-shrink-0"></span>
                Soil health monitoring and nutrient management
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Compliance & Ethics">
        <div className="max-w-4xl">
          <div className="bg-white p-8 rounded-2xl border border-monsoon">
            <h3 className="text-xl font-semibold text-kanhaGreen mb-4">Regulatory Compliance</h3>
            <p className="text-soil mb-6 leading-relaxed">
              Our timber plan strictly follows state regulations and permits for planting, felling, and transit. We maintain complete traceability and documentation for all operations, ensuring sustainable practices that meet legal requirements.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-kanhaGreen mb-2">Sandalwood Management</h4>
                <p className="text-sm text-soil">
                  Sandalwood is a long-horizon species with strict compliance requirements. We maintain detailed records of planting, growth monitoring, and harvest planning to ensure full regulatory compliance.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-kanhaGreen mb-2">Exotic Species</h4>
                <p className="text-sm text-soil">
                  Exotic species are managed responsibly alongside native Bamboo, providing soil improvement and livelihood benefits while maintaining ecological balance and preventing invasive spread.
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-millet rounded-xl border border-monsoon">
              <h4 className="font-medium text-kanhaGreen mb-2">Our Commitment</h4>
              <p className="text-sm text-soil">
                We are committed to sustainable forestry practices that benefit both the environment and local communities. Our approach ensures that future generations can enjoy the same natural resources while maintaining biodiversity and ecological health.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <div className="bg-terracotta">
        <Section title="Get Involved">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">Join Our Tree Planting Initiative</h2>
            <p className="text-xl text-millet mb-6 max-w-3xl mx-auto">
              Support our agroforestry mission and contribute to a greener future. Learn about sponsorship opportunities and community planting events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-kanhaGreen text-white hover:bg-white hover:text-kanhaGreen border-2 border-white transition-colors">
                Contact Us
              </Link>
              <Link href="/journal" className="btn bg-white text-terracotta hover:bg-millet transition-colors">
                Read Our Journal
              </Link>
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}