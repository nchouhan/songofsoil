import { getSortedJournalsData } from "@/lib/journals";
import { JournalCard } from "@/components/JournalCard";
import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Journal — Stories from Nagjhola & Kanha | SongOfSoil",
  description: "Travel notes, farm life, and nature trails around Nagjhola & Kanha. Read first-hand experiences, tips, and cultural insights.",
  openGraph: {
    title: "Journal — Stories from Nagjhola & Kanha | SongOfSoil",
    description: "Travel notes, farm life, and nature trails around Nagjhola & Kanha.",
    type: "article",
    url: "/journal",
  },
};

export default async function JournalPage() {
  const journals = await getSortedJournalsData();
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.songofsoil.com';
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'SongOfSoil Journal',
    itemListElement: journals.map((j, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: `${base}/journal/${j.id}`,
      name: j.title,
    })),
  };

  return (
    <div className="section">
      <div className="container">
        <div className="h1">Journal</div>
        <div className="mt-8 grid gap-8">
          {journals.map((journal) => (
            <JournalCard key={journal.id} journal={journal} />
          ))}
        </div>
        <JsonLd data={itemList} />
      </div>
    </div>
  );
}
