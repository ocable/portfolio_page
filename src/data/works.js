// ─── Van Conversion ──────────────────────────────────────────────────────────
import droneVan  from "../assets/images/drone_van.jpg"
import coVan     from "../assets/images/co_van.jpg"
import van1      from "../assets/images/van1.jpg"
import van2      from "../assets/images/van2.jpg"
import van3      from "../assets/images/van3.jpg"
import van4      from "../assets/images/van4.jpg"
import van5      from "../assets/images/van5.jpg"
import van6      from "../assets/images/van6.jpg"
import van7      from "../assets/images/van7.jpg"
import van8      from "../assets/images/van8.jpg"

// ─── Basement Renovation ─────────────────────────────────────────────────────
import bas1      from "../assets/images/bas1.jpg"
import bas2      from "../assets/images/bas2.jpg"
import bas3      from "../assets/images/bas3.jpg"
import bas4      from "../assets/images/bas4.jpg"
import bas5      from "../assets/images/bas5.jpg"
import bas6      from "../assets/images/bas6.jpg"
import bas7      from "../assets/images/bas7.jpg"
import bas8      from "../assets/images/bas8.jpg"

// ─── Record Console ──────────────────────────────────────────────────────────
import rec1      from "../assets/images/rec1.jpg"
import rec2      from "../assets/images/rec2.jpg"
import rec3      from "../assets/images/rec3.jpg"
import rec4      from "../assets/images/rec4.jpg"
import rec5      from "../assets/images/rec5.jpg"
import rec6      from "../assets/images/rec6.jpg"

// ─── Zome ────────────────────────────────────────────────────────────────────
import zom1      from "../assets/images/zom1.jpg"
import zom2      from "../assets/images/zom2.jpg"
import zom3      from "../assets/images/zom3.jpg"
import zom4      from "../assets/images/zom4.jpg"
import zom5      from "../assets/images/zom5.jpg"
import zom6      from "../assets/images/zom6.jpg"
import zom7      from "../assets/images/zom7.jpg"
import zom8      from "../assets/images/zom8.jpg"
import zom9      from "../assets/images/zom9.jpg"
import zom10     from "../assets/images/zom10.jpg"
import zom11     from "../assets/images/zom11.jpg"
import zom12     from "../assets/images/zom12.jpg"
import zom13     from "../assets/images/zom13.jpg"

// ─── Kitchen Banquette ───────────────────────────────────────────────────────
import ban1      from "../assets/images/ban1.jpg"
import ban2      from "../assets/images/ban2.jpg"
import ban3      from "../assets/images/ban3.jpg"
import ban4      from "../assets/images/ban4.jpg"
import ban5      from "../assets/images/ban5.jpg"
import ban6      from "../assets/images/ban6.jpg"

// ─── New Bathroom ────────────────────────────────────────────────────────────
import bth1      from "../assets/images/bth1.jpg"
import bth2      from "../assets/images/bth2.jpg"
import bth3      from "../assets/images/bth3.jpg"
import bth4      from "../assets/images/bth4.jpg"
import bth5      from "../assets/images/bth5.jpg"
import bth6      from "../assets/images/bth6.jpg"
import bth7      from "../assets/images/bth7.jpg"
import bth8      from "../assets/images/bth8.jpg"

// ─── Kitchen Backsplash ──────────────────────────────────────────────────────
import bsp1      from "../assets/images/bsp1.jpg"
import bsp2      from "../assets/images/bsp2.jpg"
import bsp3      from "../assets/images/bsp3.jpg"
import bsp4      from "../assets/images/bsp4.jpg"
import bsp5      from "../assets/images/bsp5.jpg"
import bsp6      from "../assets/images/bsp6.jpg"

// ─── Sauna ───────────────────────────────────────────────────────────────────
import sau1      from "../assets/images/sau1.jpg"
import sau2      from "../assets/images/sau2.jpg"
import sau3      from "../assets/images/sau3.jpg"
import sau4      from "../assets/images/sau4.jpg"
import sau5      from "../assets/images/sau5.jpg"
import sau6      from "../assets/images/sau6.jpg"
import sau7      from "../assets/images/sau7.jpg"
import sau8      from "../assets/images/sau8.jpg"
import sau9      from "../assets/images/sau9.jpg"

// ─── Outdoor Shower ──────────────────────────────────────────────────────────
import sho1      from "../assets/images/sho1.jpg"
import sho2      from "../assets/images/sho2.jpg"
import sho3      from "../assets/images/sho3.jpg"
import sho4      from "../assets/images/sho4.jpg"
import sho5      from "../assets/images/sho5.jpg"
import sho6      from "../assets/images/sho6.jpg"
import sho7      from "../assets/images/sho7.jpg"
import sho8      from "../assets/images/sho8.jpg"
import sho9      from "../assets/images/sho9.jpg"

export const works = [
  // ─── BUILDING ────────────────────────────────────────────────────────────────
  {
    slug: "zome",
    title: "Zome",
    category: "building",
    date: "Jun 2025",
    tags: ["Carpentry", "Geometry"],
    description:
      "Freestanding zome structure built in the backyard. Designed from scratch using zome geometry and assembled from laminated wood struts.",
    coverImage: zom5,
    images: [zom1, zom2, zom3, zom4, zom6, zom7, zom8, zom9, zom10, zom11, zom12, zom13],
    specs: [
      "Custom geometry design",
      "Laminated wood struts",
      "Freestanding outdoor structure",
    ],
    links: [],
  },
  {
    slug: "van-conversion",
    title: "Van Conversion",
    category: "building",
    date: "Apr 2021",
    tags: ["Carpentry", "Electrical"],
    description:
      "Built out the interior of a 2015 Ford Transit Connect for full-time van life. Equipped with solar, a diesel heater, sink, and a modular bed that folds away for cargo.",
    coverImage: coVan,
    images: [droneVan, van1, van2, van3, van4, van5, van6, van7, van8],
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
    hidden: true,
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
    date: "May 2025",
    tags: ["Carpentry", "Framing", "Drywall"],
    description:
      "Finished basement with two bedrooms and a living room. Constructed subfloor, framed walls, installed drywall and painted.",
    coverImage: bas8,
    images: [bas2, bas3, bas4, bas5, bas6, bas7, bas1],
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
    date: "Nov 2024",
    tags: ["Carpentry"],
    description:
      "Mid century walnut record storage cabinet. Holds 200+ records.",
    coverImage: rec6,
    images: [rec2, rec3, rec4, rec5, rec1],
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
    hidden: true,
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
    date: "Jan 2026",
    tags: ["Carpentry", "Welding"],
    description:
      "Cedar outdoor shower with a custom shower pan and plumbing. Hot and cold water.",
    coverImage: sho8,
    images: [sho2, sho3, sho4, sho5, sho6, sho1, sho7, sho9],
    specs: [
      "Cedar construction",
      "Custom shower pan",
      "Hot and cold water plumbing",
    ],
    links: [],
  },
  {
    slug: "kitchen-backsplash",
    title: "Kitchen Backsplash",
    category: "building",
    date: "Dec 2025",
    tags: ["Tile", "Masonry"],
    description:
      "Full kitchen backsplash tile installation. Laid out pattern, cut and set tile, grouted and sealed.",
    coverImage: bsp1,
    images: [bsp2, bsp3, bsp4, bsp5, bsp6],
    specs: [
      "Full wall tile installation",
      "Custom pattern layout",
      "Grouted and sealed",
    ],
    links: [],
  },
  {
    slug: "new-bathroom",
    title: "New Bathroom",
    category: "building",
    date: "Dec 2025",
    tags: ["Carpentry", "Tile", "Plumbing"],
    description:
      "Full bathroom build from scratch. Framed walls, tiled shower surround and floor, installed fixtures and vanity.",
    coverImage: bth1,
    images: [bth2, bth3, bth4, bth5, bth6, bth7, bth8],
    specs: [
      "Wall framing and drywall",
      "Tiled shower surround and floor",
      "Plumbing rough-in and fixture install",
      "Vanity and trim",
    ],
    links: [],
  },
  {
    slug: "sauna",
    title: "Sauna",
    category: "building",
    date: "Feb 2025",
    tags: ["Carpentry", "Electrical"],
    description:
      "Indoor sauna built with cedar tongue-and-groove. Wired for an electric heater with a timer and thermostat.",
    coverImage: sau1,
    images: [sau1, sau2, sau3, sau4, sau5, sau6, sau7, sau8, sau9],
    specs: [
      "Cedar tongue-and-groove walls and ceiling",
      "Tiered bench construction",
      "Electric heater wiring",
      "Timer and thermostat control",
    ],
    links: [],
  },
  {
    slug: "kitchen-banquette",
    title: "Kitchen Banquette",
    category: "building",
    date: "Oct 2024",
    tags: ["Carpentry", "Upholstery"],
    description:
      "Built-in kitchen banquette with under-seat storage. Framed, upholstered, and finished to match existing kitchen trim.",
    coverImage: ban1,
    images: [ban2, ban3, ban4, ban5, ban6],
    specs: [
      "Built-in bench framing",
      "Under-seat storage with lift-top lid",
      "Upholstered seat cushion",
      "Finished to match kitchen trim",
    ],
    links: [],
  },

  // ─── CODING ──────────────────────────────────────────────────────────────────
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
      { label: "Visit Swell Hub", url: "https://swell-hub.com" },
    ],
  },
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

export const buildingWorks = works.filter((w) => w.category === "building" && !w.hidden)
export const codingWorks = works.filter((w) => w.category === "coding")

export function getWorkBySlug(slug) {
  return works.find((w) => w.slug === slug) ?? null
}
