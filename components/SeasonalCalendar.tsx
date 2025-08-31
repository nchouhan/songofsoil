import { CloudRain, Sun, Cloud, Snowflake, Leaf, Droplets, Wind, CloudLightning } from "lucide-react"

export function SeasonalCalendar(){
  const seasonalCrops = [
    {
      month: "Jan",
      crops: ["Chickpea (Chana)", "Lentil (Masoor)", "Peas (Matar)", "Mustard (Sarson)"],
      season: "Winter",
      weather: "Cold & Dry",
      weatherIcon: Snowflake,
      bgColor: "from-blue-50 to-indigo-100",
      borderColor: "border-blue-200",
      weatherColor: "text-blue-600",
      seasonColor: "text-blue-700"
    },
    {
      month: "Feb", 
      crops: ["Chickpea (Chana)", "Peas (Matar)", "Mustard (Sarson)", "Wheat (Gehu)"],
      season: "Late Winter",
      weather: "Cool & Dry",
      weatherIcon: Cloud,
      bgColor: "from-blue-50 to-slate-100",
      borderColor: "border-slate-200",
      weatherColor: "text-slate-600",
      seasonColor: "text-slate-700"
    },
    {
      month: "Mar",
      crops: ["Peas (Matar)", "Wheat (Gehu)", "Mustard (Sarson)", "Potato (Aloo)"],
      season: "Spring",
      weather: "Warm & Pleasant",
      weatherIcon: Sun,
      bgColor: "from-green-50 to-emerald-100",
      borderColor: "border-green-200",
      weatherColor: "text-green-600",
      seasonColor: "text-green-700"
    },
    {
      month: "Apr",
      crops: ["Wheat (Gehu)", "Potato (Aloo)", "Onion (Pyaaz)", "Garlic (Lehsun)"],
      season: "Spring",
      weather: "Hot & Dry",
      weatherIcon: Sun,
      bgColor: "from-yellow-50 to-orange-100",
      borderColor: "border-orange-200",
      weatherColor: "text-orange-600",
      seasonColor: "text-orange-700"
    },
    {
      month: "May",
      crops: ["Onion (Pyaaz)", "Garlic (Lehsun)", "Tomato (Tamatar)", "Brinjal (Baingan)"],
      season: "Summer",
      weather: "Very Hot",
      weatherIcon: Sun,
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      weatherColor: "text-red-600",
      seasonColor: "text-red-700"
    },
    {
      month: "Jun",
      crops: ["Tomato (Tamatar)", "Brinjal (Baingan)", "Okra (Bhindi)", "Cucumber (Kheera)"],
      season: "Monsoon",
      weather: "Hot & Humid",
      weatherIcon: CloudRain,
      bgColor: "from-cyan-50 to-blue-100",
      borderColor: "border-cyan-200",
      weatherColor: "text-cyan-600",
      seasonColor: "text-cyan-700"
    },
    {
      month: "Jul",
      crops: ["Okra (Bhindi)", "Cucumber (Kheera)", "Bottle Gourd (Lauki)", "Ridge Gourd (Tori)"],
      season: "Monsoon",
      weather: "Rainy & Cool",
      weatherIcon: CloudRain,
      bgColor: "from-blue-50 to-indigo-100",
      borderColor: "border-blue-200",
      weatherColor: "text-blue-600",
      seasonColor: "text-blue-700"
    },
    {
      month: "Aug",
      crops: ["Bottle Gourd (Lauki)", "Ridge Gourd (Tori)", "Pumpkin (Kaddu)", "Bitter Gourd (Karela)"],
      season: "Monsoon",
      weather: "Rainy & Humid",
      weatherIcon: Droplets,
      bgColor: "from-blue-50 to-teal-100",
      borderColor: "border-teal-200",
      weatherColor: "text-teal-600",
      seasonColor: "text-teal-700"
    },
    {
      month: "Sep",
      crops: ["Pumpkin (Kaddu)", "Bitter Gourd (Karela)", "Green Chilli (Hari Mirch)", "Coriander (Dhaniya)"],
      season: "Post-Monsoon",
      weather: "Warm & Humid",
      weatherIcon: Wind,
      bgColor: "from-emerald-50 to-green-100",
      borderColor: "border-emerald-200",
      weatherColor: "text-emerald-600",
      seasonColor: "text-emerald-700"
    },
    {
      month: "Oct",
      crops: ["Green Chilli (Hari Mirch)", "Coriander (Dhaniya)", "Spinach (Palak)", "Fenugreek (Methi)"],
      season: "Autumn",
      weather: "Pleasant & Dry",
      weatherIcon: Leaf,
      bgColor: "from-amber-50 to-yellow-100",
      borderColor: "border-amber-200",
      weatherColor: "text-amber-600",
      seasonColor: "text-amber-700"
    },
    {
      month: "Nov",
      crops: ["Spinach (Palak)", "Fenugreek (Methi)", "Radish (Mooli)", "Carrot (Gajar)"],
      season: "Autumn",
      weather: "Cool & Dry",
      weatherIcon: Cloud,
      bgColor: "from-orange-50 to-amber-100",
      borderColor: "border-orange-200",
      weatherColor: "text-orange-600",
      seasonColor: "text-orange-700"
    },
    {
      month: "Dec",
      crops: ["Radish (Mooli)", "Carrot (Gajar)", "Cauliflower (Gobhi)", "Cabbage (Patta Gobhi)"],
      season: "Winter",
      weather: "Cold & Dry",
      weatherIcon: Snowflake,
      bgColor: "from-slate-50 to-gray-100",
      borderColor: "border-gray-200",
      weatherColor: "text-gray-600",
      seasonColor: "text-gray-700"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
      {seasonalCrops.map(({ month, crops, season, weather, weatherIcon, bgColor, borderColor, weatherColor, seasonColor }) => {
        const WeatherIconComponent = weatherIcon;
        return (
          <div key={month} className={`p-4 border ${borderColor} rounded-xl bg-gradient-to-br ${bgColor} hover:shadow-md transition-all duration-300 group relative overflow-hidden`}>
            {/* Seasonal background pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
              {season === "Monsoon" && (
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full transform rotate-45 scale-150"></div>
              )}
              {season === "Summer" && (
                <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full transform -rotate-45 scale-150"></div>
              )}
              {season === "Winter" && (
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full transform rotate-12 scale-150"></div>
              )}
              {season === "Spring" && (
                <div className="w-full h-full bg-gradient-to-br from-green-200 to-emerald-200 rounded-full transform -rotate-12 scale-150"></div>
              )}
              {season === "Autumn" && (
                <div className="w-full h-full bg-gradient-to-br from-orange-200 to-amber-200 rounded-full transform rotate-90 scale-150"></div>
              )}
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Month and Weather */}
              <div className="flex items-center justify-between mb-3">
                <div className="font-bold text-lg text-soil">{month}</div>
                <div className="flex items-center gap-1">
                  <WeatherIconComponent className={`w-4 h-4 ${weatherColor}`} />
                </div>
              </div>
              
              {/* Season and Weather Description */}
              <div className="mb-3">
                <div className={`text-xs font-medium ${seasonColor} mb-1`}>{season}</div>
                <div className={`text-xs ${weatherColor}`}>{weather}</div>
              </div>
              
              {/* Crops */}
              <div className="space-y-1">
                {crops.map((crop, index) => (
                  <div key={index} className="text-xs text-soil leading-tight bg-white/70 px-2 py-1 rounded-md backdrop-blur-sm">
                    {crop}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}