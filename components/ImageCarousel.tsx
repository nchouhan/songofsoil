'use client'
import { useEffect, useMemo, useState, useCallback, useRef } from 'react'
import Image from 'next/image'

interface ImageCarouselProps {
  images: string[]
  alt?: string
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const validImages = useMemo(() => (images || []).filter(Boolean), [images])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const touchDeltaX = useRef<number>(0)
  const AUTO_INTERVAL_MS = 4000

  const goTo = useCallback((index: number) => {
    if (validImages.length === 0) return
    const nextIndex = (index + validImages.length) % validImages.length
    setCurrentIndex(nextIndex)
  }, [validImages.length])

  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo])
  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!isOpen) return
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, next, prev])

  // Autoplay with pause on hover, modal open, or user interaction
  useEffect(() => {
    if (isOpen || isHovered || isInteracting || validImages.length < 2) return
    const id = window.setInterval(() => {
      next()
    }, AUTO_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [isOpen, isHovered, isInteracting, validImages.length, next])

  const onTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0]
    touchStartX.current = t.clientX
    touchStartY.current = t.clientY
    touchDeltaX.current = 0
    setIsInteracting(true)
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) return
    const t = e.touches[0]
    const dx = t.clientX - touchStartX.current
    const dy = t.clientY - touchStartY.current
    // Prevent vertical scroll lock only when horizontal intent is strong
    if (Math.abs(dx) > Math.abs(dy)) {
      e.preventDefault()
      touchDeltaX.current = dx
    }
  }, [])

  const onTouchEnd = useCallback(() => {
    const threshold = 50
    const dx = touchDeltaX.current
    touchStartX.current = null
    touchStartY.current = null
    touchDeltaX.current = 0
    if (dx > threshold) {
      prev()
    } else if (dx < -threshold) {
      next()
    }
    // small delay to avoid immediate autoplay after interaction
    setTimeout(() => setIsInteracting(false), 300)
  }, [next, prev])

  if (!validImages.length) return null

  return (
    <div 
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative rounded-2xl overflow-hidden border border-monsoon bg-white">
        <button
          aria-label="Previous image"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 hover:bg-white shadow p-2"
          onClick={prev}
        >
          ‹
        </button>
        <button
          aria-label="Next image"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 hover:bg-white shadow p-2"
          onClick={next}
        >
          ›
        </button>

        <div 
          className="aspect-[16/9] relative cursor-zoom-in"
          onClick={() => setIsOpen(true)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <Image
            src={validImages[currentIndex]}
            alt={alt || 'Journal image'}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover rounded-2xl"
            priority
          />
        </div>

        <div className="flex items-center justify-center gap-2 p-3 bg-millet border-t border-monsoon">
          {validImages.map((src, idx) => (
            <button
              key={src + idx}
              className={`h-2 w-2 rounded-full ${idx === currentIndex ? 'bg-kanhaGreen' : 'bg-monsoon/50'}`}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => goTo(idx)}
            />
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              aria-label="Close"
              className="absolute -top-10 right-0 text-white hover:text-millet"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden bg-black">
              <Image
                src={validImages[currentIndex]}
                alt={alt || 'Journal image large'}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center justify-between mt-3">
              <button className="btn btn-ghost" onClick={prev}>Previous</button>
              <div className="text-sm text-millet/80">{currentIndex + 1} / {validImages.length}</div>
              <button className="btn btn-ghost" onClick={next}>Next</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


