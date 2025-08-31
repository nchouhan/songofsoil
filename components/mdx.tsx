'use client'
import { useMDXComponent } from "next-contentlayer/hooks"
const components = {}
export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}