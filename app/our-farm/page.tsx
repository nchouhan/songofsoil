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
              <h2 className="text-2xl font-semibold">A Family Legacy</h2>
              <p className="mt-4">Song Of Soil farm is a multi-generational family farm, rooted in a deep respect for the land. Our story began over a century ago, when our great-grandparents first tilled this soil. We are proud to continue their legacy, using sustainable and regenerative practices to grow healthy, flavorful food for our community.</p>
              <p className="mt-4">Our philosophy is simple: work in harmony with nature. We believe that a healthy farm is a diverse and resilient ecosystem. We use a combination of traditional wisdom and modern science to build soil health, conserve water, and promote biodiversity. We are committed to leaving the land better than we found it, ensuring that future generations can continue to enjoy its bounty.</p>
            </div>
            <div className="relative h-64">
              <Image src="/images/farm.jpg" alt="Our Farm" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="section bg-slate-50">
        <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-semibold">Our Mission</h2>
              <p className="text-xl text-slate-600 mt-4 max-w-3xl mx-auto">To cultivate a vibrant and resilient farm ecosystem that produces healthy, delicious food for our community, while inspiring a deeper connection to the natural world.</p>
            </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="h2">Our Location</div>
          <div className="mt-4 rounded-lg overflow-hidden">
            <FarmMap />
          </div>
        </div>
      </div>
      <div className="section bg-slate-50">
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