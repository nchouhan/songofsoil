import { Section } from "@/components/Section";
import Image from "next/image";

export const metadata = { title: "Animals — SongOfSoil" };

export default function Animals() {
  return (
    <>
      <Section title="Our Animal Partners">
        <p className="text-lg text-slate-600 mt-2">Meet the feathered and furry friends who play a vital role in our farm’s ecosystem.</p>
      </Section>
      <div className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold">Happy Hens</h2>
              <p className="mt-4">Our free-range chickens are more than just egg-layers; they are our partners in pest control and soil fertilization. They spend their days foraging for insects and weeds, and their nights in a safe and comfortable coop. We believe that happy, healthy chickens lay the most delicious and nutritious eggs.</p>
            </div>
            <div className="relative h-64">
              <Image src="/images/chickens.jpg" alt="Chickens" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="section bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64">
              <Image src="/images/goats.jpg" alt="Goats" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Gentle Goats</h2>
              <p className="mt-4">Our herd of goats are the natural weed managers of our farm. They have a hearty appetite for invasive species, helping us to maintain a healthy and balanced pasture. They are also a source of rich, delicious milk, which we use to make a variety of artisanal cheeses.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold">Contented Cows</h2>
              <p className="mt-4">Our small herd of cows are the gentle giants of our farm. They graze on our lush pastures, converting grass into rich, nutritious milk. We practice rotational grazing, which helps to build soil health and sequester carbon. Our cows are a vital part of our farm’s closed-loop system, providing manure for our compost and milk for our community.</p>
            </div>
            <div className="relative h-64">
              <Image src="/images/cows.jpg" alt="Cows" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="section bg-slate-50">
        <div className="container text-center">
          <h2 className="text-3xl font-semibold">Animal Welfare</h2>
          <p className="text-xl text-slate-600 mt-4 max-w-3xl mx-auto">We are committed to providing our animals with a life that is as close to their natural state as possible. They have access to fresh air, sunshine, and plenty of space to roam and forage. We believe that treating our animals with respect and compassion is not only the right thing to do, but it also results in healthier, happier animals and higher quality products.</p>
        </div>
      </div>
    </>
  );
}
