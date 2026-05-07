import { useState, useRef, useCallback, useEffect } from "react"
import { useImageDev } from "../context/ImageDevContext"

export default function ImageEditor({ configKey, images, dims, onClose }) {
  const { getEntry, setEntry } = useImageDev()
  const [local, setLocal] = useState(() => getEntry(configKey))
  const containerRef = useRef(null)
  const dragging = useRef(false)
  const lastPos = useRef({ x: 0, y: 0 })

  const currentImage = images[local.imageIdx] ?? images[0]

  const onMouseDown = (e) => {
    dragging.current = true
    lastPos.current = { x: e.clientX, y: e.clientY }
    e.preventDefault()
  }

  const onMouseMove = useCallback((e) => {
    if (!dragging.current || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const dx = e.clientX - lastPos.current.x
    const dy = e.clientY - lastPos.current.y
    lastPos.current = { x: e.clientX, y: e.clientY }
    setLocal(prev => ({
      ...prev,
      x: Math.max(0, Math.min(100, prev.x - (dx / rect.width * 100) / prev.zoom)),
      y: Math.max(0, Math.min(100, prev.y - (dy / rect.height * 100) / prev.zoom)),
    }))
  }, [])

  const onMouseUp = useCallback(() => { dragging.current = false }, [])

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)
    const onKey = (e) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
      window.removeEventListener("keydown", onKey)
    }
  }, [onMouseMove, onMouseUp, onClose])

  const apply = () => {
    setEntry(configKey, local)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[300] bg-black/95 flex flex-col select-none">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 flex-shrink-0">
        <span className="font-mono text-[11px] tracking-[0.2em] text-white/30 uppercase">{configKey}</span>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-white/25">Drag to pan · Scroll to zoom</span>
          <button
            onClick={onClose}
            className="font-mono text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={apply}
            className="font-mono text-[11px] uppercase tracking-widest bg-white text-black px-4 py-1.5 hover:bg-white/85 transition-colors"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Preview — pixel-exact aspect ratio of the real frame */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-hidden">
        <div
          ref={containerRef}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          style={(() => {
            const srcW = dims?.width  ?? 900
            const srcH = dims?.height ?? 600
            const maxW = window.innerWidth  * 0.78
            const maxH = window.innerHeight * 0.62
            const scale = Math.min(maxW / srcW, maxH / srcH, 1)
            return { width: srcW * scale, height: srcH * scale }
          })()}
          onMouseDown={onMouseDown}
          onWheel={(e) => {
            e.preventDefault()
            setLocal(prev => ({
              ...prev,
              zoom: Math.max(1, Math.min(4, prev.zoom - e.deltaY * 0.001)),
            }))
          }}
        >
          <img
            src={currentImage}
            draggable={false}
            alt=""
            className="w-full h-full pointer-events-none"
            style={{
              objectFit: "cover",
              objectPosition: `${local.x}% ${local.y}%`,
              transform: local.zoom !== 1 ? `scale(${local.zoom})` : undefined,
              transformOrigin: `${local.x}% ${local.y}%`,
            }}
          />
          {/* Live readout */}
          <div className="absolute top-3 left-3 font-mono text-[10px] text-white/50 bg-black/60 px-2 py-1">
            x {local.x.toFixed(1)}%  y {local.y.toFixed(1)}%  ×{local.zoom.toFixed(2)}
          </div>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="flex-shrink-0 px-6 py-4 border-t border-white/10 flex flex-col gap-4">
        {/* Zoom slider */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/35 w-10">Zoom</span>
          <input
            type="range" min="1" max="4" step="0.01"
            value={local.zoom}
            onChange={e => setLocal(prev => ({ ...prev, zoom: parseFloat(e.target.value) }))}
            className="flex-1 accent-white"
          />
          <span className="font-mono text-[10px] text-white/35 w-10 text-right">{local.zoom.toFixed(2)}×</span>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setLocal(prev => ({ ...prev, imageIdx: i }))}
              className={`relative flex-shrink-0 overflow-hidden border-2 transition-all ${
                local.imageIdx === i
                  ? "border-white w-20 h-20"
                  : "border-transparent w-14 h-14 opacity-40 hover:opacity-70"
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
              <span className="absolute bottom-0.5 right-1 font-mono text-[9px] text-white drop-shadow-md">{i + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
