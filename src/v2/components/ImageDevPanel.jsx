import { useState } from "react"
import { useImageDev } from "../context/ImageDevContext"

export default function ImageDevPanel() {
  const { devMode, setDevMode, config, buildingOrder } = useImageDev()
  const [copied, setCopied] = useState(false)

  const copyConfig = () => {
    const out = { imageConfig: config, buildingOrder: buildingOrder ?? "(default)" }
    navigator.clipboard.writeText(JSON.stringify(out, null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const entryCount = Object.keys(config).length

  return (
    <div className="fixed bottom-6 left-6 z-[100] bg-[#111] text-white shadow-2xl text-xs min-w-[160px]">
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#2a2a2a]">
        <span className="font-mono uppercase tracking-widest text-[#666]">Image Dev</span>
        <button
          onClick={() => setDevMode(d => !d)}
          className={`relative w-9 h-5 rounded-full transition-colors ${devMode ? "bg-white" : "bg-[#333]"}`}
        >
          <span className={`absolute top-[3px] w-3.5 h-3.5 rounded-full bg-[#111] transition-transform ${devMode ? "translate-x-4" : "translate-x-[3px]"}`} />
        </button>
      </div>

      {devMode && (
        <div className="px-3 py-2 flex flex-col gap-2">
          <p className="font-mono text-[10px] text-[#555]">
            {entryCount} {entryCount === 1 ? "entry" : "entries"} saved
          </p>
          <button
            onClick={copyConfig}
            className="font-mono text-[10px] uppercase tracking-widest text-[#888] hover:text-white transition-colors text-left"
          >
            {copied ? "✓ Copied" : "Copy config JSON"}
          </button>
        </div>
      )}
    </div>
  )
}
