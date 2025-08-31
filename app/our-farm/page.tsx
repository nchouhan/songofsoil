import { FarmMap } from "@/components/FarmMap";
import { SeasonalCalendar } from "@/components/SeasonalCalendar";
import Image from "next/image";

export default function OurFarm() {
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="h1">Our Farm</div>
          <p className="text-lg text-slate-600 mt-2">Nature’s rhythm, grown with care.</p>
          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <div>
              <p>Nestled in the heart of the countryside, Song Of Soil farm is a testament to our commitment to sustainable and ethical farming. We believe in working with nature, not against it, to produce healthy, delicious food while nurturing the land for generations to come.</p>
              <p className="mt-4">Our farm is a diverse ecosystem of vegetables, fruits, herbs, and flowers. We also raise a small number of animals, who play an important role in our farm’s fertility and overall health.</p>
            </div>
            <div className="relative h-64">
              <Image src="/images/farm.jpg" alt="Our Farm" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="section bg-slate-50">
        <div className="container">
          <div className="h2">Our Location</div>
          <div className="mt-4 rounded-lg overflow-hidden">
            <FarmMap />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="h2">Seasonal Calendar</div>
          <p className="text-slate-600 mt-2">A glimpse into what’s growing on our farm throughout the year.</p>
          <div className="mt-6">
            <SeasonalCalendar />
          </div>
        </div>
      </div>
    </div>
  )
}