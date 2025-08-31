import Image from "next/image";

export default function Methods() {
  return (
    <div className="section">
      <div className="container">
        <div className="h1">Our Methods</div>
        <p className="text-lg text-slate-600 mt-2">We are committed to regenerative agriculture, a holistic approach to farming that focuses on building healthy soil and a thriving ecosystem.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="p-6 border rounded-lg">
            <div className="font-semibold text-lg">Soil Health</div>
            <p className="text-sm text-slate-600 mt-2">We use a variety of techniques to build healthy soil, including composting, cover cropping, and no-till farming.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <div className="font-semibold text-lg">Water Conservation</div>
            <p className="text-sm text-slate-600 mt-2">We use drip irrigation and other water-saving techniques to minimize our water use.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <div className="font-semibold text-lg">Biodiversity</div>
            <p className="text-sm text-slate-600 mt-2">We plant a variety of crops and flowers to attract beneficial insects and create a resilient ecosystem.</p>
          </div>
        </div>
      </div>
    </div>
  )
}