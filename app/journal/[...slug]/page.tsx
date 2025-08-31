import { getJournalData } from "../../../lib/journals";

export default async function PostPage({ params }: { params: { slug: string[] } }) {
  const id = params.slug.join("/");
  
  try {
    const post = await getJournalData(id);

    return (
      <div className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h1 className="h1">{post.title}</h1>
            <div className="text-sm text-slate-500 mt-2">
              {new Date(post.date).toLocaleDateString()}
            </div>
            <article 
              className="prose lg:prose-xl mt-6"
              dangerouslySetInnerHTML={{ __html: post.contentHtml! }}
            />
          </div>
        </div>
      </div>
    );
  } catch {
    return <div>Post not found</div>;
  }
}
