export default function Market() {
  return (
    <div className="section">
      <div className="container">
        <div className="h1">Market</div>
        <p className="text-lg text-slate-600 mt-2">Find our fresh produce at a market near you.</p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <div className="font-semibold">Saturday Farmer’s Market</div>
            <div className="text-sm text-slate-600">8am - 12pm</div>
            <div className="text-sm text-slate-600">123 Main St, Anytown</div>
          </div>
          <div>
            <div className="font-semibold">Sunday Farmer’s Market</div>
            <div className="text-sm text-slate-600">10am - 2pm</div>
            <div className="text-sm text-slate-600">456 Oak Ave, Anytown</div>
          </div>
        </div>
      </div>
    </div>
  )
}