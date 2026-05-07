import { useParams, Link } from "react-router-dom"
import { useState, useEffect, useCallback } from "react"
import { getWorkBySlug, works } from "../../data/works"
import { useImageDev } from "../context/ImageDevContext"

function Lightbox({ images, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex)

  const prev = useCallback(() => setIndex(i => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIndex(i => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape")      onClose()
      if (e.key === "ArrowLeft")   prev()
      if (e.key === "ArrowRight")  next()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [prev, next, onClose])

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-6 text-white/50 hover:text-white text-3xl font-thin leading-none transition-colors"
      >
        ×
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); prev() }}
        className="absolute left-4 md:left-10 text-white/40 hover:text-white transition-colors select-none text-5xl font-thin leading-none"
      >
        ‹
      </button>

      {/* Image */}
      <img
        src={images[index]}
        alt={`${index + 1} of ${images.length}`}
        className="max-h-[88vh] max-w-[86vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); next() }}
        className="absolute right-4 md:right-10 text-white/40 hover:text-white transition-colors select-none text-5xl font-thin leading-none"
      >
        ›
      </button>

      {/* Counter */}
      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-[0.2em] text-white/30">
        {index + 1} / {images.length}
      </span>
    </div>
  )
}

function Gallery({ images, title }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-0.5">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="group relative aspect-square overflow-hidden bg-[#E0E0E0] block w-full"
          >
            <img
              src={src}
              alt={`${title} ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75h6m-6 0v6m0-6L10.5 10.5M20.25 20.25h-6m6 0v-6m0 6L13.5 13.5" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}

function OtherWorks({ current }) {
  const others = works
    .filter((w) => w.slug !== current.slug && w.category === current.category && !w.hidden)
    .slice(0, 4)

  if (others.length === 0) return null

  return (
    <section className="py-16 border-t border-[#E5E5E5]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6B] mb-8">
          Other Works
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {others.map((work) => (
            <Link key={work.slug} to={`/v2/works/${work.slug}`} className="group block">
              <div className="aspect-square bg-[#EBEBEB] overflow-hidden mb-2">
                {work.coverImage ? (
                  <img
                    src={work.coverImage}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex items-end p-2.5">
                    <span className="font-display text-[9px] font-semibold uppercase tracking-widest text-[#AAAAAA]">
                      {work.title}
                    </span>
                  </div>
                )}
              </div>
              <p className="font-display text-xs font-semibold tracking-tight group-hover:opacity-50 transition-opacity duration-200">
                {work.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function WorkDetailV2() {
  const { slug } = useParams()
  const work = getWorkBySlug(slug)
  const { devMode, getEntry, getImageStyle, openEditor } = useImageDev()

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!work) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-16 gap-4">
        <p className="font-display text-sm text-[#6B6B6B] uppercase tracking-widest">Project not found</p>
        <Link to="/v2" className="text-xs underline underline-offset-4 hover:opacity-50 transition-opacity">
          Back to home
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Hero — image left, text right */}
      {(() => {
        const heroImages = [work.coverImage, ...work.images].filter(Boolean)
        const heroKey = `${work.slug}-hero`
        const entry = getEntry(heroKey)
        const heroSrc = heroImages[entry.imageIdx] ?? heroImages[0]
        let heroRef
        return (
          <div className="grid md:grid-cols-[3fr_2fr]" style={{ minHeight: "calc(100vh - 4rem)" }}>
            {/* Image */}
            <div
              ref={el => { heroRef = el }}
              className="relative overflow-hidden bg-[#E5E5E5]"
              style={{ minHeight: "60vh" }}
            >
              {heroSrc ? (
                <img
                  src={heroSrc}
                  alt={work.title}
                  className="w-full h-full"
                  style={getImageStyle(heroKey)}
                />
              ) : (
                <div className="w-full h-full flex items-end p-8">
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#AAAAAA]">
                    {work.title} — images coming
                  </span>
                </div>
              )}
              {devMode && heroImages.length > 0 && (
                <button
                  onClick={() => {
                    const rect = heroRef?.getBoundingClientRect()
                    openEditor(heroKey, heroImages, rect ? { width: rect.width, height: rect.height } : null)
                  }}
                  className="absolute top-3 right-3 bg-black/70 hover:bg-black text-white font-mono text-[10px] uppercase tracking-widest px-2 py-1 transition-colors"
                >
                  ✎ Edit Hero
                </button>
              )}
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center px-10 md:px-16 py-14 border-l border-[#E5E5E5]">
              <div className="flex flex-wrap gap-2 mb-8">
                {work.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-display text-[10px] font-semibold uppercase tracking-[0.15em] text-[#AAAAAA]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-none mb-8">
                {work.title}
              </h1>

              <p className="text-base leading-relaxed text-[#555555] mb-10">
                {work.description}
              </p>

              {/* Specs */}
              {work.specs.length > 0 && (
                <ul className="flex flex-col gap-3 border-t border-[#E5E5E5] pt-8">
                  {work.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-4 text-sm text-[#333333]">
                      <span className="block w-4 h-[1px] bg-[#CCCCCC] flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              )}

              {/* Links */}
              {work.links.length > 0 && (
                <div className="flex flex-wrap gap-3 border-t border-[#E5E5E5] pt-8">
                  {work.links.map(({ label, url }) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.15em] border border-[#111111] px-6 py-3 hover:bg-[#111111] hover:text-[#FAFAFA] transition-colors duration-200"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )
      })()}

      {/* Photo gallery */}
      {work.images.length > 0 && (
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-20 pb-20">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6B] mb-4">
            Photos
          </p>
          <Gallery images={work.images} title={work.title} />
        </div>
      )}

      <OtherWorks current={work} />
    </div>
  )
}
