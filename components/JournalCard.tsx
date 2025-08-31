import Link from "next/link";

export function JournalCard({ journal }: { journal: { id: string, title: string, date: string } }) {
  return (
    <Link href={`/journal/${journal.id}`}>
      <div className="rounded-lg border p-6 hover:bg-slate-50 h-full">
        <div className="text-lg font-semibold">{journal.title}</div>
        <div className="text-sm text-slate-600 mt-2">
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
