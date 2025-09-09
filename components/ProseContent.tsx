'use client'
import { useEffect, useRef } from 'react'

export function ProseContent({ html, className }: { html: string; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const anchors = root.querySelectorAll('a[href]')
    anchors.forEach((a) => {
      const href = (a as HTMLAnchorElement).getAttribute('href') || ''
      const isExternal = /^https?:\/\//i.test(href)
      if (isExternal) {
        (a as HTMLAnchorElement).setAttribute('target', '_blank')
        ;(a as HTMLAnchorElement).setAttribute('rel', 'noopener noreferrer')
      }
    })
  }, [html])

  return (
    <div
      ref={ref}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}


