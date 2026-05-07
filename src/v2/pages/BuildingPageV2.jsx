import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { buildingWorks } from "../../data/works"
import { useImageDev } from "../context/ImageDevContext"

function ProjectRow({ work, index, devMode, dragState, onDragStart, onDragOver, onDrop, onDragEnd }) {
  const { getEntry, getImageStyle, openEditor } = useImageDev()
  const imgRef = useRef(null)
  const rowRef = useRef(null)
  const allImages = [work.coverImage, ...work.images].filter(Boolean)
  const configKey = `${work.slug}-gallery`
  const entry = getEntry(configKey)
  const src = allImages[entry.imageIdx] ?? allImages[0]

  const isDragging = dragState.dragged === work.slug
  const isDragOver = dragState.over === work.slug

  return (
    <div
      ref={rowRef}
      className="relative"
      style={{ opacity: isDragging ? 0.3 : 1, transition: "opacity 0.15s" }}
      draggable={devMode}
      onDragStart={(e) => { e.dataTransfer.effectAllowed = "move"; onDragStart(work.slug) }}
      onDragOver={(e) => { e.preventDefault(); onDragOver(work.slug) }}
      onDrop={(e) => { e.preventDefault(); onDrop(work.slug) }}
      onDragEnd={onDragEnd}
    >
      {isDragOver && !isDragging && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#111] z-20" />
      )}

      <Link to={`/works/${work.slug}`} className="group block">
        {/* Image — full width */}
        <div
          ref={imgRef}
          className="relative overflow-hidden aspect-[16/9] bg-[#E0E0E0] w-full"
        >
          {src ? (
            <img
              src={src}
              alt={work.title}
              className="w-full h-full group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              style={getImageStyle(configKey)}
            />
          ) : (
            <div className="w-full h-full bg-[#D8D8D8]" />
          )}
        </div>

        {/* Info strip */}
        <div className="flex items-baseline gap-6 mt-4 pb-12">
          <span className="font-mono text-[11px] text-[#BBBBBB]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-2xl font-bold tracking-tight group-hover:opacity-40 transition-opacity duration-300">
            {work.title}
          </h3>
          {work.date && (
            <span className="font-display text-[10px] uppercase tracking-[0.15em] text-[#AAAAAA]">
              {work.date}
            </span>
          )}
        </div>
      </Link>

      {devMode && allImages.length > 0 && (
        <div className="absolute top-3 right-3 flex gap-1 z-10">
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              const rect = imgRef.current?.getBoundingClientRect()
              openEditor(configKey, allImages, rect ? { width: rect.width, height: rect.height } : null)
            }}
            className="bg-black/70 hover:bg-black text-white font-mono text-[10px] uppercase tracking-widest px-2 py-1 transition-colors"
          >
            ✎
          </button>
          <div className="bg-black/70 text-white font-mono text-[10px] px-2 py-1 cursor-grab select-none">⠿</div>
        </div>
      )}
    </div>
  )
}

export default function BuildingPageV2() {
  const { devMode, buildingOrder, setBuildingOrder } = useImageDev()
  const [dragState, setDragState] = useState({ dragged: null, over: null })

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const orderedWorks = buildingOrder
    ? buildingOrder.map(slug => buildingWorks.find(w => w.slug === slug)).filter(Boolean)
    : buildingWorks

  const handleDragStart = (slug) => setDragState({ dragged: slug, over: null })
  const handleDragOver  = (slug) => setDragState(s => ({ ...s, over: slug }))
  const handleDragEnd   = ()     => setDragState({ dragged: null, over: null })

  const handleDrop = (targetSlug) => {
    const { dragged } = dragState
    if (!dragged || dragged === targetSlug) { handleDragEnd(); return }
    const slugs = orderedWorks.map(w => w.slug)
    const from  = slugs.indexOf(dragged)
    const to    = slugs.indexOf(targetSlug)
    const next  = [...slugs]
    next.splice(from, 1)
    next.splice(to, 0, dragged)
    setBuildingOrder(next)
    handleDragEnd()
  }

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#6B6B6B] mb-12">
          Building Projects
        </p>

        <div className="flex flex-col gap-12">
          {orderedWorks.map((work, i) => (
            <ProjectRow
              key={work.slug}
              work={work}
              index={i}
              devMode={devMode}
              dragState={dragState}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onDragEnd={handleDragEnd}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
