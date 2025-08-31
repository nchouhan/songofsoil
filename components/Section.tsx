export function Section({ title, subtitle, children }: {
  title: React.ReactNode
  subtitle?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="section">
      <div className="container">
        <div className="md:flex items-baseline justify-between">
          <div className="max-w-2xl">
            <h2 className="h2">{title}</h2>
            {subtitle && <p className="lead mt-2">{subtitle}</p>}
          </div>
        </div>
        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  )
}