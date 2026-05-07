import { createContext, useContext, useState, useCallback } from "react"
import ImageEditor from "../components/ImageEditor"

const Ctx = createContext(null)
const DEFAULT = { imageIdx: 0, x: 50, y: 50, zoom: 1 }

const BAKED_CONFIG = {
  "zome-gallery":              { imageIdx: 12, x: 49.279, y: 64.838, zoom: 1.003 },
  "van-conversion-gallery":   { imageIdx: 0,  x: 24.994, y: 45.304, zoom: 1 },
  "outdoor-shower-gallery":   { imageIdx: 0,  x: 47.424, y: 40.123, zoom: 1 },
  "kitchen-backsplash-gallery": { imageIdx: 2, x: 47.906, y: 48.296, zoom: 1 },
  "record-console-gallery":   { imageIdx: 3,  x: 52.980, y: 41.518, zoom: 1 },
  "new-bathroom-gallery":     { imageIdx: 2,  x: 46.336, y: 44.636, zoom: 1 },
  "sauna-gallery":             { imageIdx: 3,  x: 46.092, y: 52.466, zoom: 1.14 },
  "kitchen-banquette-gallery": { imageIdx: 5,  x: 46.955, y: 61.693, zoom: 1.034 },
  "basement-renovation-gallery": { imageIdx: 0, x: 54.459, y: 87.958, zoom: 1.081 },
  "new-bathroom-hero":        { imageIdx: 5,  x: 50.158, y: 28.622, zoom: 1 },
  "zome-hero":                 { imageIdx: 4,  x: 79.706, y: 50.505, zoom: 1 },
  "sauna-hero":                { imageIdx: 3,  x: 51.339, y: 50.337, zoom: 1 },
  "kitchen-backsplash-hero":  { imageIdx: 2,  x: 55.344, y: 46.507, zoom: 1.144 },
  "record-console-hero":      { imageIdx: 0,  x: 53.780, y: 50.337, zoom: 1 },
  "outdoor-shower-hero":      { imageIdx: 4,  x: 46.456, y: 69.025, zoom: 1 },
  "van-conversion-hero":      { imageIdx: 6,  x: 52.146, y: 44.276, zoom: 1 },
}

const BAKED_ORDER = [
  "zome", "sauna", "new-bathroom", "van-conversion",
  "kitchen-backsplash", "record-console", "basement-renovation",
  "outdoor-shower", "kitchen-banquette",
]

export function ImageDevProvider({ children }) {
  const [devMode, setDevMode]   = useState(false)
  const [editing, setEditing]   = useState(null)
  const [config, setConfig]     = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("v2-image-config") ?? "{}")
      return { ...BAKED_CONFIG, ...saved }
    } catch { return BAKED_CONFIG }
  })
  const [buildingOrder, setBuildingOrderState] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("v2-building-order") ?? "null") ?? BAKED_ORDER
    } catch { return BAKED_ORDER }
  })

  const getEntry = useCallback((key) => config[key] ?? DEFAULT, [config])

  const setEntry = useCallback((key, patch) => {
    setConfig(prev => {
      const next = { ...prev, [key]: { ...(prev[key] ?? DEFAULT), ...patch } }
      localStorage.setItem("v2-image-config", JSON.stringify(next, null, 2))
      return next
    })
  }, [])

  const getImageStyle = useCallback((key) => {
    const e = config[key] ?? DEFAULT
    return {
      objectFit: "cover",
      objectPosition: `${e.x}% ${e.y}%`,
      ...(e.zoom !== 1 && {
        transform: `scale(${e.zoom})`,
        transformOrigin: `${e.x}% ${e.y}%`,
      }),
    }
  }, [config])

  const setBuildingOrder = useCallback((slugs) => {
    localStorage.setItem("v2-building-order", JSON.stringify(slugs))
    setBuildingOrderState(slugs)
  }, [])

  const openEditor  = useCallback((configKey, images, dims) => setEditing({ configKey, images, dims }), [])
  const closeEditor = useCallback(() => setEditing(null), [])

  return (
    <Ctx.Provider value={{
      devMode, setDevMode,
      config, getEntry, setEntry, getImageStyle,
      buildingOrder, setBuildingOrder,
      openEditor,
    }}>
      {children}
      {editing && (
        <ImageEditor
          configKey={editing.configKey}
          images={editing.images}
          dims={editing.dims}
          onClose={closeEditor}
        />
      )}
    </Ctx.Provider>
  )
}

export const useImageDev = () => useContext(Ctx)
