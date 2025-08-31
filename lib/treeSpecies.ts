export interface TreeSpecies {
  name: string
  scientificName: string
  description: string
  characteristics: string[]
  growthTime: string
  uses: string[]
  image: string
  category: 'timber' | 'multipurpose' | 'fast-growing' | 'high-value'
}

export const treeSpecies: TreeSpecies[] = [
  {
    name: "Australian Teak (Flindersia australis)",
    scientificName: "Flindersia australis",
    description: "A fast-growing hardwood species native to Australia, prized for its durability and beautiful grain patterns. Perfect for furniture, decking, and outdoor applications.",
    characteristics: ["Fast growth rate", "High-quality timber", "Drought resistant", "Excellent for furniture"],
    growthTime: "15-20 years",
    uses: ["Furniture", "Decking", "Outdoor structures", "Flooring"],
    image: "/images/australian-teak.jpg",
    category: 'timber'
  },
  {
    name: "Sandalwood (Santalum album)",
    scientificName: "Santalum album",
    description: "A precious, slow-growing species valued for its aromatic heartwood and essential oils. One of the most valuable timber species in the world.",
    characteristics: ["Slow growth", "High value", "Aromatic wood", "Strict regulations"],
    growthTime: "25-30 years",
    uses: ["Essential oils", "Carving", "Incense", "Medicinal"],
    image: "/images/sandalwood.jpg",
    category: 'high-value'
  },
  {
    name: "Bamboo (Bambusa spp.)",
    scientificName: "Bambusa vulgaris",
    description: "A versatile, fast-growing grass that provides multiple benefits including soil stabilization, quick biomass production, and sustainable building material.",
    characteristics: ["Very fast growth", "Sustainable", "Multiple uses", "Soil improvement"],
    growthTime: "3-5 years",
    uses: ["Construction", "Furniture", "Paper", "Soil stabilization"],
    image: "/images/bamboo.jpg",
    category: 'fast-growing'
  },
  {
    name: "African Mahogany (Khaya senegalensis)",
    scientificName: "Khaya senegalensis",
    description: "A beautiful hardwood species with excellent workability and stunning reddish-brown color. Ideal for high-end furniture and interior applications.",
    characteristics: ["Medium growth rate", "Beautiful grain", "Workable wood", "Stable timber"],
    growthTime: "20-25 years",
    uses: ["Furniture", "Cabinetry", "Musical instruments", "Interior trim"],
    image: "/images/african-mahogany.jpg",
    category: 'timber'
  },
  {
    name: "Neem (Azadirachta indica)",
    scientificName: "Azadirachta indica",
    description: "A multipurpose tree native to India, valued for its medicinal properties, pest control benefits, and quality timber for rural construction.",
    characteristics: ["Medicinal properties", "Pest control", "Drought resistant", "Rural construction"],
    growthTime: "10-15 years",
    uses: ["Medicine", "Pest control", "Construction", "Furniture"],
    image: "/images/neem.jpg",
    category: 'multipurpose'
  },
  {
    name: "Teak (Tectona grandis)",
    scientificName: "Tectona grandis",
    description: "The gold standard of tropical hardwoods, known for its exceptional durability, resistance to decay, and beautiful golden-brown color.",
    characteristics: ["Exceptional durability", "Decay resistant", "Beautiful color", "High value"],
    growthTime: "25-30 years",
    uses: ["Shipbuilding", "Outdoor furniture", "Decking", "Luxury items"],
    image: "/images/teak.jpg",
    category: 'high-value'
  },
  {
    name: "Moringa (Moringa oleifera)",
    scientificName: "Moringa oleifera",
    description: "A fast-growing, drought-resistant tree known as the 'miracle tree' for its nutritional and medicinal properties. Provides edible leaves, pods, and seeds.",
    characteristics: ["Very fast growth", "Highly nutritious", "Drought resistant", "Multiple uses"],
    growthTime: "2-3 years",
    uses: ["Food", "Medicine", "Water purification", "Animal feed"],
    image: "/images/moringa.jpg",
    category: 'multipurpose'
  },
  {
    name: "Acacia (Acacia nilotica)",
    scientificName: "Acacia nilotica",
    description: "A hardy, multipurpose tree native to Africa and Asia, valued for its nitrogen-fixing properties, gum production, and quality timber.",
    characteristics: ["Nitrogen fixing", "Drought resistant", "Gum production", "Quality timber"],
    growthTime: "12-18 years",
    uses: ["Gum arabic", "Timber", "Fodder", "Soil improvement"],
    image: "/images/acacia.jpg",
    category: 'multipurpose'
  }
]

export const getTreeSpeciesByCategory = (category: TreeSpecies['category']) => {
  return treeSpecies.filter(tree => tree.category === category)
}

export const getTreeSpeciesByGrowthTime = (maxYears: number) => {
  return treeSpecies.filter(tree => {
    const years = parseInt(tree.growthTime.split('-')[0])
    return years <= maxYears
  })
}
