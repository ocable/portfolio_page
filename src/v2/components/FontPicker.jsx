import { useState, useEffect } from "react"

const FONTS = [
  { label: "Syne",             family: "'Syne', sans-serif" },
  { label: "Bricolage",        family: "'Bricolage Grotesque', sans-serif" },
  { label: "Plus Jakarta",     family: "'Plus Jakarta Sans', sans-serif" },
  { label: "Outfit",           family: "'Outfit', sans-serif" },
  { label: "Cormorant",        family: "'Cormorant Garamond', serif" },
  { label: "Instrument Serif", family: "'Instrument Serif', serif" },
  { label: "Instrument Sans",  family: "'Instrument Sans', sans-serif" },
  { label: "DM Sans",          family: "'DM Sans', sans-serif" },
]

function useFont(cssVar, storageKey, defaultValue) {
  const [value, setValue] = useState(() => localStorage.getItem(storageKey) || defaultValue)
  useEffect(() => {
    document.documentElement.style.setProperty(cssVar, value)
    localStorage.setItem(storageKey, value)
  }, [value])
  return [value, setValue]
}

export default function FontPicker() {
  const [open, setOpen] = useState(true)
  const [heading, setHeading] = useFont("--font-display", "v2-font-display", "'Syne', sans-serif")
  const [body, setBody]       = useFont("--font-body",    "v2-font-body",    "'DM Sans', sans-serif")

  return (
    <div className="fixed bottom-6 right-6 z-[100] w-56 bg-[#111] text-white shadow-2xl text-xs">
      {/* Header */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-3 py-2 border-b border-[#2a2a2a] hover:bg-[#1a1a1a] transition-colors"
      >
        <span className="font-mono uppercase tracking-widest text-[#666]">Font Dev</span>
        <span className="text-[#555]">{open ? "▼" : "▲"}</span>
      </button>

      {open && (
        <>
          {/* Headings */}
          <div className="border-b border-[#2a2a2a]">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#555] px-3 pt-2 pb-1">Headings</p>
            {FONTS.map((f) => (
              <button
                key={f.family}
                onClick={() => setHeading(f.family)}
                style={{ fontFamily: f.family }}
                className={`w-full text-left px-3 py-1.5 transition-colors text-sm ${
                  heading === f.family ? "bg-white text-[#111] font-semibold" : "text-[#aaa] hover:text-white hover:bg-[#1e1e1e]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Body */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#555] px-3 pt-2 pb-1">Body</p>
            {FONTS.map((f) => (
              <button
                key={f.family}
                onClick={() => setBody(f.family)}
                style={{ fontFamily: f.family }}
                className={`w-full text-left px-3 py-1.5 transition-colors text-sm ${
                  body === f.family ? "bg-white text-[#111] font-semibold" : "text-[#aaa] hover:text-white hover:bg-[#1e1e1e]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
