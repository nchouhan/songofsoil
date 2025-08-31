import { allPosts } from "contentlayer/generated"
import { getMDXComponent } from "next-contentlayer/hooks"
import Image from "next/image"

export default function PostPage({ params }: { params: { slug: string[] }}){
  const post = allPosts.find(p => p._raw.flattenedPath === `journal/${params.slug.join("/")}`)

  if(!post) return <div>Post not found</div>

  const MDXContent = getMDXComponent(post.body.code)

  return (
    <div className="section">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <h1 className="h1">{post.title}</h1>
          <div className="text-sm text-slate-500 mt-2">{new Date(post.date).toLocaleDateString()}</div>
          {post.image && (
            <Image 
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="rounded-lg mt-4"
            />
          )}
          <article className="prose lg:prose-xl mt-6">
            <MDXContent />
          </article>
        </div>
      </div>
    </div>
  )
}