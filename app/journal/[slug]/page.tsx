import { allPosts } from "contentlayer/generated"
    import { notFound } from "next/navigation"
    import { Mdx } from "@/components/mdx"
    export async function generateStaticParams() {
      return allPosts.map((p) => ({ slug: p._raw.flattenedPath.replace("journal/", "") }))
    }
    export default function PostPage({ params }: { params: { slug: string }}){
      const post = allPosts.find(p => p._raw.flattenedPath.replace("journal/", "") === params.slug)
      if (!post) return notFound()
      return (
        <div className="section">
          <div className="container prose max-w-none">
            <h1 className="h2">{post.title}</h1>
            <div className="text-xs text-slate-500 mt-1">{new Date(post.date).toLocaleDateString()}</div>
            <article className="mt-6">
              <Mdx code={post.body.code} />
            </article>
          </div>
        </div>
      )
    }