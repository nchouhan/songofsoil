import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import Link from "next/link"
import Image from "next/image"

export default function Journal() {
  const posts = allPosts.sort((a, b) => 
    compareDesc(new Date(a.date), new Date(b.date))
  )
  return (
    <div className="section">
      <div className="container">
        <div className="h1">Journal</div>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(p => (
            <Link key={p.url} href={p.url} className="p-4 border rounded-lg hover:bg-slate-50">
              {p.image && (
                <Image 
                  src={p.image}
                  alt={p.title}
                  width={400}
                  height={250}
                  className="rounded-md"
                />
              )}
              <div className="font-semibold mt-4">{p.title}</div>
              <div className="text-xs text-slate-500 mt-1">{new Date(p.date).toLocaleDateString()}</div>
              <p className="text-sm text-slate-600 mt-2">{p.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}