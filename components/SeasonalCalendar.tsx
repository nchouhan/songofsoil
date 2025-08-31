export function SeasonalCalendar(){
  const seasonalCrops = [
    {
      month: "Jan",
      crops: ["Chickpea (Chana)", "Lentil (Masoor)", "Peas (Matar)", "Mustard (Sarson)"]
    },
    {
      month: "Feb", 
      crops: ["Chickpea (Chana)", "Peas (Matar)", "Mustard (Sarson)", "Wheat (Gehu)"]
    },
    {
      month: "Mar",
      crops: ["Peas (Matar)", "Wheat (Gehu)", "Mustard (Sarson)", "Potato (Aloo)"]
    },
    {
      month: "Apr",
      crops: ["Wheat (Gehu)", "Potato (Aloo)", "Onion (Pyaaz)", "Garlic (Lehsun)"]
    },
    {
      month: "May",
      crops: ["Onion (Pyaaz)", "Garlic (Lehsun)", "Tomato (Tamatar)", "Brinjal (Baingan)"]
    },
    {
      month: "Jun",
      crops: ["Tomato (Tamatar)", "Brinjal (Baingan)", "Okra (Bhindi)", "Cucumber (Kheera)"]
    },
    {
      month: "Jul",
      crops: ["Okra (Bhindi)", "Cucumber (Kheera)", "Bottle Gourd (Lauki)", "Ridge Gourd (Tori)"]
    },
    {
      month: "Aug",
      crops: ["Bottle Gourd (Lauki)", "Ridge Gourd (Tori)", "Pumpkin (Kaddu)", "Bitter Gourd (Karela)"]
    },
    {
      month: "Sep",
      crops: ["Pumpkin (Kaddu)", "Bitter Gourd (Karela)", "Green Chilli (Hari Mirch)", "Coriander (Dhaniya)"]
    },
    {
      month: "Oct",
      crops: ["Green Chilli (Hari Mirch)", "Coriander (Dhaniya)", "Spinach (Palak)", "Fenugreek (Methi)"]
    },
    {
      month: "Nov",
      crops: ["Spinach (Palak)", "Fenugreek (Methi)", "Radish (Mooli)", "Carrot (Gajar)"]
    },
    {
      month: "Dec",
      crops: ["Radish (Mooli)", "Carrot (Gajar)", "Cauliflower (Gobhi)", "Cabbage (Patta Gobhi)"]
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
      {seasonalCrops.map(({ month, crops }) => (
        <div key={month} className="p-3 border border-monsoon rounded-lg bg-white hover:bg-millet transition-colors">
          <div className="font-semibold text-kanhaGreen">{month}</div>
          <div className="mt-2 space-y-1">
            {crops.map((crop, index) => (
              <div key={index} className="text-xs text-soil leading-tight">
                {crop}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}