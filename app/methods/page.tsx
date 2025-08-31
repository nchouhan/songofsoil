import Image from "next/image";

export default function Methods() {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Methods</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">We are committed to regenerative agriculture, a holistic approach to farming that focuses on building healthy soil and a thriving ecosystem.</p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold">Soil Health</h2>
              <p className="mt-4">Healthy soil is the foundation of a healthy farm. We use a variety of techniques to build and maintain healthy soil, including composting, cover cropping, and no-till farming. These practices help to increase soil organic matter, improve water retention, and promote a thriving community of soil microorganisms.</p>
            </div>
            <div className="relative h-64">
              <Image src="/images/soil.jpg" alt="Soil" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="section bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64">
              <Image src="/images/water.jpg" alt="Water" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Water Conservation</h2>
              <p className="mt-4">Water is a precious resource, and we are committed to using it wisely. We use drip irrigation to deliver water directly to the roots of our plants, minimizing evaporation and runoff. We also use mulch to retain soil moisture and reduce the need for irrigation.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold">Biodiversity</h2>
              <p className="mt-4">A diverse farm is a resilient farm. We plant a variety of crops and flowers to attract beneficial insects, birds, and other wildlife. This biodiversity helps to control pests, pollinate our crops, and create a more stable and productive ecosystem.</p>
            </div>
            <div className="relative h-64">
              <Image src="/images/biodiversity.jpg" alt="Biodiversity" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}