import { getSortedJournalsData } from "@/lib/journals";
import { JournalCard } from "@/components/JournalCard";

export default async function JournalPage() {
  const journals = await getSortedJournalsData();

  return (
    <div className="section">
      <div className="container">
        <div className="h1">Journal</div>
        <div className="mt-8 grid gap-8">
          {journals.map((journal) => (
            <JournalCard key={journal.id} journal={journal} />
          ))}
        </div>
      </div>
    </div>
  );
}
