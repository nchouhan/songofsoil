import Link from "next/link";

export function JournalCard({ journal }: { journal: { id: string, title: string, date: string } }) {
  return (
    <Link href={`/journal/${journal.id}`}>
      <div className="rounded-lg border border-monsoon p-6 hover:bg-millet transition-colors h-full bg-white">
        <div className="text-lg font-semibold text-kanhaGreen">{journal.title}</div>
        <div className="text-sm text-soil mt-2">
          {new Date(journal.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </Link>
  );
}
