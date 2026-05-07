export const works = [
  // ─── BUILDING ────────────────────────────────────────────────────────────────
  {
    slug: "van-conversion",
    title: "Van Conversion",
    category: "building",
    tags: ["Carpentry", "Electrical"],
    description:
      "Built out the interior of a 2015 Ford Transit Connect for full-time van life. Equipped with solar, a diesel heater, sink, and a modular bed that folds away for cargo.",
    coverImage: null,
    images: [],
    specs: [
      "Modular bed folds away for cargo space",
      "Fully insulated with a diesel heater",
      "Ceiling fan for air flow",
      "Sink with gray water catch",
      "100W solar panel and 100Ah battery",
      "1000W inverter",
    ],
    links: [],
  },
  {
    slug: "mobility-scooter",
    title: "Mobility Scooter",
    category: "building",
    tags: ["Welding", "Electrical"],
    description:
      "Converted an electric mobility scooter to a 125cc 4-speed manual with a top speed of 55mph.",
    coverImage: null,
    images: [],
    specs: [
      "125cc 4-speed manual engine swap",
      "Top speed 55mph",
      "Custom welded frame modifications",
      "Full electrical re-wire",
    ],
    links: [],
  },
  {
    slug: "basement-renovation",
    title: "Basement Renovation",
    category: "building",
    tags: ["Carpentry", "Framing", "Drywall"],
    description:
      "Finished basement with two bedrooms and a living room. Constructed subfloor, framed walls, installed drywall and painted.",
    coverImage: null,
    images: [],
    specs: [
      "Subfloor construction",
      "Full wall framing",
      "Drywall installation and painting",
      "Two bedrooms and living room",
    ],
    links: [],
  },
  {
    slug: "record-console",
    title: "Record Console",
    category: "building",
    tags: ["Carpentry"],
    description:
      "Mid century walnut record storage cabinet. Holds 200+ records.",
    coverImage: null,
    images: [],
    specs: [
      "Solid walnut construction",
      "Holds 200+ records",
      "Mid century modern design",
    ],
    links: [],
  },
  {
    slug: "minibike-suspension",
    title: "Minibike Suspension",
    category: "building",
    tags: ["Welding"],
    description:
      "Added rear suspension to a minibike frame. Fabricated swingarm and shock mounts from scratch.",
    coverImage: null,
    images: [],
    specs: [
      "Custom fabricated swingarm",
      "Welded shock mounts",
      "Rear suspension retrofit",
    ],
    links: [],
  },
  {
    slug: "outdoor-shower",
    title: "Outdoor Shower",
    category: "building",
    tags: ["Carpentry", "Welding"],
    description:
      "Cedar outdoor shower with a custom shower pan and plumbing. Hot and cold water.",
    coverImage: null,
    images: [],
    specs: [
      "Cedar construction",
      "Custom shower pan",
      "Hot and cold water plumbing",
    ],
    links: [],
  },

  // ─── CODING ──────────────────────────────────────────────────────────────────
  {
    slug: "cpsc-database",
    title: "CPSC Database",
    category: "coding",
    tags: ["React", "PostgreSQL", "Prisma"],
    description:
      "Fullstack web app allowing users to search a database of product recalls and consumer incident reports via text or UPC. Users can register an account and create incident reports.",
    coverImage: null,
    images: [],
    specs: [],
    links: [
      { label: "View on GitHub", url: "https://github.com/ocable/product_safety" },
    ],
  },
  {
    slug: "surf-forecast",
    title: "Surf Forecast Web App",
    category: "coding",
    tags: ["Python", "React"],
    description:
      "Python backend that pulls raw spectral buoy data from the NBDC. React frontend displays live buoy readings and forecasted wave data from the GFS model.",
    coverImage: null,
    images: [],
    specs: [],
    links: [
      { label: "Backend on GitHub", url: "https://github.com/ocable/wave_math" },
      { label: "Frontend on GitHub", url: "https://github.com/ocable/wave_frontend" },
    ],
  },
  {
    slug: "esp32-iot",
    title: "ESP32 IOT",
    category: "coding",
    tags: ["React", "Express", "C++", "Socket.IO"],
    description:
      "Fullstack app template using a React frontend and Express server with Socket.IO. ESP32 controller connects to the web app via WiFi for control from any network.",
    coverImage: null,
    images: [],
    specs: [],
    links: [
      { label: "View on GitHub", url: "https://github.com/ocable/ESP32-IOT" },
    ],
  },
  {
    slug: "fingerprint-doorlock",
    title: "Fingerprint Doorlock",
    category: "coding",
    tags: ["C++", "Arduino"],
    description:
      "Biometric doorlock using an Arduino and fingerprint scanner from Adafruit. Stores fingerprints in EEPROM and unlocks deadbolt with a servo.",
    coverImage: null,
    images: [],
    specs: [],
    links: [
      { label: "View on GitHub", url: "https://github.com/ocable/fingerprint-doorlock" },
    ],
  },
  {
    slug: "moped-speedometer",
    title: "Moped Speedometer",
    category: "coding",
    tags: ["C++", "Arduino"],
    description:
      "Retrofit speedometer for a moped using an Arduino Micro and hall effect sensor. Tracks speed, trip distance, and average gas consumption.",
    coverImage: null,
    images: [],
    specs: [],
    links: [
      { label: "View on GitHub", url: "https://github.com/ocable/micro_sped/tree/upload" },
    ],
  },
  {
    slug: "sofle-choc",
    title: "Sofle Choc",
    category: "coding",
    tags: ["C++", "Arduino", "QMK"],
    description:
      "Split keyboard soldered and 3D printed from scratch. Powered by an Arduino Micro and flashed with QMK firmware.",
    coverImage: null,
    images: [],
    specs: [],
    links: [
      { label: "View on GitHub", url: "https://github.com/ocable/Sofle-Choc" },
    ],
  },
]

export const buildingWorks = works.filter((w) => w.category === "building")
export const codingWorks = works.filter((w) => w.category === "coding")

export function getWorkBySlug(slug) {
  return works.find((w) => w.slug === slug) ?? null
}
