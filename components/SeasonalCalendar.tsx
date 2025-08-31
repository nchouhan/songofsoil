export function SeasonalCalendar(){
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
          ].map(m => (
            <div key={m} className="p-3 border rounded-lg">
              <div className="font-semibold">{m}</div>
              <div className="text-xs text-slate-500 mt-1">-</div>
            </div>
          ))}
        </div>
      )
    }