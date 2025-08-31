import { getJournalData, getAllJournalIds } from "@/lib/journals";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const paths = getAllJournalIds();
  return paths;
}

export default async function JournalPostPage({ params }: { params: { id: string } }) {
  const journal = await getJournalData(params.id);

  if (!journal) {
    notFound();
  }

  return (
    <div className="section">
      <div className="container">
        <div className="prose">
          <h1>{journal.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: journal.contentHtml || '' }} />
        </div>
        <div className="mt-8">
            <Link href="/journal">
                ← Back to Journal
            </Link>
        </div>
      </div>
    </div>
  );
}
