import Image from "next/image"
import { TreeSpecies } from "@/lib/treeSpecies"

interface TreeSpeciesCardProps {
  tree: TreeSpecies
}

export function TreeSpeciesCard({ tree }: TreeSpeciesCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-monsoon overflow-hidden hover:shadow-soft transition-all duration-300 hover:border-terracotta group">
      <div className="relative h-48 bg-millet overflow-hidden">
        <Image
          src={tree.image}
          alt={tree.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-kanhaGreen mb-2 group-hover:text-terracotta transition-colors">
          {tree.name}
        </h3>
        <p className="text-sm text-monsoon italic mb-3">{tree.scientificName}</p>
        
        <p className="text-sm text-soil mb-4 leading-relaxed">{tree.description}</p>
        
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium text-kanhaGreen mb-1">Growth Time</h4>
            <p className="text-xs text-soil bg-millet px-2 py-1 rounded-full inline-block">
              {tree.growthTime}
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-kanhaGreen mb-1">Key Characteristics</h4>
            <ul className="text-xs text-soil space-y-1">
              {tree.characteristics.map((char, charIndex) => (
                <li key={charIndex} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-terracotta rounded-full mr-2 flex-shrink-0"></span>
                  {char}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-kanhaGreen mb-1">Primary Uses</h4>
            <div className="flex flex-wrap gap-1">
              {tree.uses.map((use, useIndex) => (
                <span key={useIndex} className="px-2 py-1 bg-millet text-xs text-soil rounded-full border border-monsoon hover:border-terracotta transition-colors">
                  {use}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
