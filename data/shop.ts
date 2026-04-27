import type { Category, CategoryId, Product, Room, RoomId } from "@/types/shop";

export const roomImages = {
  living: "https://www.figma.com/api/mcp/asset/80cabe20-9b49-4233-885f-6c6161e3b5d5",
  bedroom: "https://www.figma.com/api/mcp/asset/99861e61-8efe-4f83-ac69-9b95720e877c",
  bathroom: "https://www.figma.com/api/mcp/asset/e5214930-43d9-440c-add1-a522aff29fff",
  kitchen: "https://www.figma.com/api/mcp/asset/46f27ae8-bb5e-4c24-af93-56b3e3cd0a60",
  workspace: "https://www.figma.com/api/mcp/asset/779f1ba2-d7bd-4cd4-96ab-4c57ca333b2f"
};

export const roomShellImages = {
  floor: "https://www.figma.com/api/mcp/asset/b0724224-234e-4786-b365-3dc781278f01",
  back: "https://www.figma.com/api/mcp/asset/b22cdd99-382f-43ed-908a-52614f22fd3d",
  left: "https://www.figma.com/api/mcp/asset/bdc38679-003e-41a7-95ac-8431aa87e29e"
};

export const productImages = {
  setupSofa: "https://www.figma.com/api/mcp/asset/e8d796cf-9cb1-4fd6-a64a-75bae05c5d7f",
  bubbleCurveSofa: "https://www.figma.com/api/mcp/asset/47ec0a7c-09d8-4900-adae-191b1b50f347",
  alteaSofa: "https://www.figma.com/api/mcp/asset/d7b68f2b-214c-4d2c-b1cc-10e91bed4bf7",
  allusionSofa: "https://www.figma.com/api/mcp/asset/78a8b964-f9c5-4240-a231-019975f1e804",
  petale: "https://www.figma.com/api/mcp/asset/ba228bcf-a8d8-447c-8a28-bdaed86ceebf",
  niwa: "https://www.figma.com/api/mcp/asset/c26652e4-43bd-421d-9858-992e34d29a73",
  blogger: "https://www.figma.com/api/mcp/asset/ab74f5a9-a771-4b6f-a112-80efaf92c78e",
  ovni: "https://www.figma.com/api/mcp/asset/b33d9ee1-7603-4081-8812-52fa99994175",
  trinta: "https://www.figma.com/api/mcp/asset/a31335bb-cb8c-4a7b-8acf-33b48678253c",
  rubanShelf: "https://www.figma.com/api/mcp/asset/6276f479-6e52-43dc-b1c6-ce9c55a10f7b",
  oraIto: "https://www.figma.com/api/mcp/asset/a81ea05b-f5f3-4967-8c70-47628b407630",
  globo: "https://www.figma.com/api/mcp/asset/1fcc5192-02c8-490d-baed-a331885e7a61",
  bubbleBed: "https://www.figma.com/api/mcp/asset/da1a0337-ea2c-4c43-b981-44c96e44fe5f",
  enteteBed: "https://www.figma.com/api/mcp/asset/cef57bc8-9162-4602-8f16-9cfe83105c8e",
  cristalWardrobe: "https://www.figma.com/api/mcp/asset/8a3944fd-714c-4cae-b982-ba4b22404903",
  parisWardrobe: "https://www.figma.com/api/mcp/asset/37aa1884-af30-4b59-a28d-305079d86ad0",
  rioIpanema: "https://www.figma.com/api/mcp/asset/e23d43a6-3310-4941-b4c4-65a5b24c3ead",
  serpentine: "https://www.figma.com/api/mcp/asset/133c92b6-b17f-4aec-b494-6b03b069f8bf",
  elanta: "https://www.figma.com/api/mcp/asset/6250def3-52ec-47c9-b773-cae1c23bcd02",
  track2: "https://www.figma.com/api/mcp/asset/fc4fd002-9d7d-4233-9dd7-5356d3124ba1",
  ocean: "https://www.figma.com/api/mcp/asset/262827f3-caa5-445f-89b3-93dc9d76eda0",
  nimes: "https://www.figma.com/api/mcp/asset/63498650-008a-4033-8b07-181bf43904fd",
  cristalMirror: "https://www.figma.com/api/mcp/asset/ffc51bf3-f215-46c2-9a97-7243d7fa5761",
  haloMirror: "https://www.figma.com/api/mcp/asset/2859fc79-10e4-4f7e-9e65-a1adf9378b44",
  calligraphieDesk: "https://www.figma.com/api/mcp/asset/72d8d28a-80a5-4efb-a09f-123d48163461",
  prismoDesk: "https://www.figma.com/api/mcp/asset/023fc7ce-ee90-452d-8e87-299068cfdfb6",
  pulpDesk: "https://www.figma.com/api/mcp/asset/740362a5-b255-4059-9660-7be6e3317f63",
  calligraphieBookcase: "https://www.figma.com/api/mcp/asset/31fe51fc-7b86-42b5-87f7-965f4042c027",
  prismoBookcase: "https://www.figma.com/api/mcp/asset/46af94a0-6397-4061-b6a9-7c6ccd27dfaf",
  pulpBookcase: "https://www.figma.com/api/mcp/asset/52902f1b-32a0-4b2c-b2c0-939ff5f2e134",
  calligraphieChair: "https://www.figma.com/api/mcp/asset/76b60c0c-9678-4e6a-8d26-377e957be99f",
  prismoChair: "https://www.figma.com/api/mcp/asset/c9de8fc8-c24a-4da3-9c59-12e0a4bf8136",
  pulpChair: "https://www.figma.com/api/mcp/asset/b99aadc0-1d6f-499f-afce-87fdbd4f2fc1"
};

export const rooms: Room[] = [
  { id: "living", name: "Living Room", image: roomImages.living, slug: "living-room" },
  { id: "bedroom", name: "Bedroom", image: roomImages.bedroom },
  { id: "bathroom", name: "Bathroom", image: roomImages.bathroom },
  { id: "kitchen", name: "Kitchen", image: roomImages.kitchen },
  { id: "workspace", name: "Workspace", image: roomImages.workspace }
];

export const categories: Category[] = [
  { id: "sofas", roomId: "living", name: "Sofas", description: "Soft seating and sculptural lounge pieces." },
  { id: "storage", roomId: "living", name: "Shelves & TV Units", description: "Display shelves, bookcases, and media storage.", slug: "shelves" },
  { id: "tables", roomId: "living", name: "Tables & Chairs", description: "Living room coffee tables and lounge chairs.", slug: "tables-chairs" },
  { id: "beds", roomId: "bedroom", name: "Beds", description: "Upholstered and wood bed frames." },
  { id: "wardrobes", roomId: "bedroom", name: "Wardrobes", description: "Closets and bedroom storage." },
  { id: "dining", roomId: "kitchen", name: "Dining Tables", description: "Tables for kitchen dining.", slug: "tables" },
  { id: "desks", roomId: "workspace", name: "Desks", description: "Writing desks and studio worktables." },
  { id: "chairs", roomId: "workspace", name: "Office Chairs", description: "Task chairs and lounge chairs." },
  { id: "bookcases", roomId: "workspace", name: "Bookcases", description: "Shelving systems and libraries." },
  { id: "bath-tubs", roomId: "bathroom", name: "Bath Tubs", description: "Freestanding and ergonomic tubs." },
  { id: "mirrors", roomId: "bathroom", name: "Mirrors", description: "Wall mirrors and illuminated mirrors." }
];

export const products: Product[] = [
  {
    id: "setup-sofa",
    roomId: "living",
    categoryId: "sofas",
    name: "Setup",
    description: "Sofa 240 × 85 × 108 cm, soft fabric, sturdy frame.",
    price: 111000000,
    image: productImages.setupSofa,
    position: [0, 0.42, 0.1],
    dimensions: [2.4, 0.85, 1.08],
    color: "#b8b8bb",
    kind: "sofa",
    placementKey: "sofa"
  },
  {
    id: "bubble-curve",
    roomId: "living",
    categoryId: "sofas",
    name: "Bubble Curve",
    description: "Sofa 248 × 80 × 132 cm, soft curved design, stretch fabric, sturdy wood frame.",
    price: 200000000,
    image: productImages.bubbleCurveSofa,
    position: [0, 0.4, 0],
    dimensions: [2.48, 0.8, 1.32],
    color: "#eeeae2",
    kind: "sofa",
    placementKey: "sofa"
  },
  {
    id: "altea",
    roomId: "living",
    categoryId: "sofas",
    name: "Altea",
    description: "Sofa 240 × 89 × 106 cm, classic design with soft fabric and sturdy wood frame.",
    price: 150000000,
    image: productImages.alteaSofa,
    position: [0, 0.45, 0],
    dimensions: [2.4, 0.89, 1.06],
    color: "#aaa28e",
    kind: "sofa",
    placementKey: "sofa"
  },
  {
    id: "trinta",
    roomId: "living",
    categoryId: "storage",
    name: "Trinta",
    description: "Bookcase 163 x 208.7 x 30 cm, modular matte lacquer with optional LED.",
    price: 45000000,
    image: productImages.trinta,
    position: [0, 1.04, -0.2],
    dimensions: [1.63, 2.08, 0.3],
    color: "#e7e2d9",
    kind: "storage",
    placementKey: "storage"
  },
  {
    id: "petale-table",
    roomId: "living",
    categoryId: "tables",
    name: "Pétale",
    description: "Table/chair set 240 x 85 x 108 cm, soft fabric, sturdy frame.",
    price: 11000000,
    image: productImages.petale,
    position: [0, 0.38, 0.2],
    dimensions: [2.4, 0.85, 1.08],
    color: "#d7d0c5",
    kind: "table",
    placementKey: "table"
  },
  {
    id: "niwa-table",
    roomId: "living",
    categoryId: "tables",
    name: "Niwa",
    description: "Table/chair set 248 x 80 x 132 cm, soft curved design, stretch fabric, sturdy wood frame.",
    price: 22000000,
    image: productImages.niwa,
    position: [0, 0.38, 0.2],
    dimensions: [2.48, 0.8, 1.32],
    color: "#8f7d68",
    kind: "table",
    placementKey: "table"
  },
  {
    id: "blogger-table",
    roomId: "living",
    categoryId: "tables",
    name: "Blogger",
    description: "Table/chair set 240 x 89 x 106 cm, classic design with soft fabric and sturdy wood frame.",
    price: 20000000,
    image: productImages.blogger,
    position: [0, 0.38, 0.2],
    dimensions: [2.4, 0.89, 1.06],
    color: "#e8e4dd",
    kind: "table",
    placementKey: "table"
  },
  {
    id: "ovni-up-table",
    roomId: "living",
    categoryId: "tables",
    name: "Ovni Up",
    description: "Table/chair set 240 x 81 x 94 cm, compact design with soft fabric and sturdy wood frame.",
    price: 25000000,
    image: productImages.ovni,
    position: [0, 0.38, 0.2],
    dimensions: [2.4, 0.81, 0.94],
    color: "#2f2a24",
    kind: "table",
    placementKey: "table"
  },
  {
    id: "allusion",
    roomId: "living",
    categoryId: "sofas",
    name: "Allusion",
    description: "Sofa 240 × 81 × 94 cm, compact design with soft fabric and sturdy wood frame.",
    price: 250000000,
    image: productImages.allusionSofa,
    position: [0, 0.44, 0],
    dimensions: [2.4, 0.81, 0.94],
    color: "#f0f0ec",
    kind: "sofa",
    placementKey: "sofa"
  },
  {
    id: "ruban-living",
    roomId: "living",
    categoryId: "storage",
    name: "Ruban",
    description: "Bookcase 224 x 204.7 x 45.6 cm, high gloss with LED shelves.",
    price: 35000000,
    image: productImages.rubanShelf,
    position: [0, 1.02, -0.2],
    dimensions: [2.24, 1.65, 0.38],
    color: "#d8dde0",
    kind: "storage",
    placementKey: "storage"
  },
  {
    id: "ora-ito",
    roomId: "living",
    categoryId: "storage",
    name: "Ora Ito",
    description: "TV unit 242.5 x 45.5 x 62 cm, matte lacquer with 2 doors and 2 drawers.",
    price: 55000000,
    image: productImages.oraIto,
    position: [0, 0.55, -0.2],
    dimensions: [2.4, 0.8, 0.55],
    color: "#2c2c2a",
    kind: "storage",
    placementKey: "storage"
  },
  {
    id: "globo",
    roomId: "living",
    categoryId: "storage",
    name: "Globo",
    description: "TV unit 200.4 x 51 x 48 cm, lacquered glass with 3 doors and chrome metal legs.",
    price: 42000000,
    image: productImages.globo,
    position: [0, 0.52, -0.2],
    dimensions: [2, 0.72, 0.52],
    color: "#343535",
    kind: "storage",
    placementKey: "storage"
  },
  {
    id: "dreamline",
    roomId: "bedroom",
    categoryId: "beds",
    name: "Bubble",
    description: "Bed 202 x 90 x 266 cm, soft design, premium fabric, sturdy wooden frame.",
    price: 60000000,
    image: productImages.bubbleBed,
    position: [0, 0.55, 0],
    dimensions: [2.2, 1.15, 1.45],
    color: "#d6c8b9",
    kind: "bed",
    placementKey: "bed"
  },
  {
    id: "linen-arc",
    roomId: "bedroom",
    categoryId: "beds",
    name: "En-tête",
    description: "Modern bed, 178 x 113 x 230 cm, Belize fabric, removable cover, sturdy wood frame.",
    price: 75000000,
    image: productImages.enteteBed,
    position: [0, 0.5, 0],
    dimensions: [2, 1.05, 1.35],
    color: "#ece4da",
    kind: "bed",
    placementKey: "bed"
  },
  {
    id: "soft-wall",
    roomId: "bedroom",
    categoryId: "wardrobes",
    name: "Cristal",
    description: "Wardrobe 355.3 x 261 x 59 cm, 6 doors with glass and lacquer finish.",
    price: 67000000,
    image: productImages.cristalWardrobe,
    position: [0, 1.05, -0.2],
    dimensions: [1.65, 1.7, 0.25],
    color: "#efe8de",
    kind: "storage",
    placementKey: "wardrobe"
  },
  {
    id: "paris-paname",
    roomId: "bedroom",
    categoryId: "wardrobes",
    name: "Paris Paname",
    description: "Wardrobe 110 x 195 x 61 cm, MDF wood with leather detail.",
    price: 60000000,
    image: productImages.parisWardrobe,
    position: [0, 0.88, 0],
    dimensions: [0.95, 1.7, 0.32],
    color: "#d9b58f",
    kind: "storage",
    placementKey: "wardrobe"
  },
  {
    id: "rio-ipanema",
    roomId: "kitchen",
    categoryId: "dining",
    name: "Rio Ipanema",
    description: "Table: 300 x 75.8 x 130 cm | Chair: 55 x 87 x 61 cm.",
    price: 76000000,
    image: productImages.rioIpanema,
    position: [0, 0.38, 0],
    dimensions: [3, 0.76, 1.3],
    color: "#c4aa85",
    kind: "table",
    placementKey: "table"
  },
  {
    id: "serpentine",
    roomId: "kitchen",
    categoryId: "dining",
    name: "Serpentine",
    description: "Table: 240 x 75 x 120 cm | Chair: 58 x 81 x 63 cm.",
    price: 65000000,
    image: productImages.serpentine,
    position: [0, 0.38, 0],
    dimensions: [2.4, 0.75, 1.2],
    color: "#191919",
    kind: "table",
    placementKey: "table"
  },
  {
    id: "stone-island",
    roomId: "kitchen",
    categoryId: "dining",
    name: "Elanta",
    description: "Table: 300 x 76 x 128 cm | Chair: 51 x 81 x 59 cm.",
    price: 56000000,
    image: productImages.elanta,
    position: [0, 0.46, 0],
    dimensions: [2.6, 0.92, 0.95],
    color: "#ded8cd",
    kind: "table",
    placementKey: "table"
  },
  {
    id: "linear-cabinet",
    roomId: "kitchen",
    categoryId: "dining",
    name: "Track 2",
    description: "Table: 220 x 74 x 105 cm | Chair: 50 x 85 x 60 cm.",
    price: 58000000,
    image: productImages.track2,
    position: [0, 0.9, -0.1],
    dimensions: [2.2, 1.8, 0.45],
    color: "#20201f",
    kind: "table",
    placementKey: "table"
  },
  {
    id: "calligraphie",
    roomId: "workspace",
    categoryId: "desks",
    name: "Calligraphie",
    description: "Walnut desk 147 x 77 x 76.5 cm with drawer and metal legs.",
    price: 46000000,
    image: productImages.calligraphieDesk,
    position: [0, 0.38, 0],
    dimensions: [1.47, 0.76, 0.77],
    color: "#7b5138",
    kind: "desk",
    placementKey: "desk"
  },
  {
    id: "prismo",
    roomId: "workspace",
    categoryId: "desks",
    name: "Prismo",
    description: "Lacquered MDF desk 175 x 72 x 84.5 cm with cable hole.",
    price: 48000000,
    image: productImages.prismoDesk,
    position: [0, 0.42, 0],
    dimensions: [1.75, 0.84, 0.72],
    color: "#ede8df",
    kind: "desk",
    placementKey: "desk"
  },
  {
    id: "pulp-desk",
    roomId: "workspace",
    categoryId: "desks",
    name: "Pulp",
    description: "Glossy triangular desk 220 x 75 x 127 cm with sculptural base.",
    price: 44000000,
    image: productImages.pulpDesk,
    position: [0, 0.42, 0],
    dimensions: [2.2, 0.75, 1.27],
    color: "#f0f0ee",
    kind: "desk",
    placementKey: "desk"
  },
  {
    id: "calligraphie-chair",
    roomId: "workspace",
    categoryId: "chairs",
    name: "Calligraphie",
    description: "Office chair with high curved back, cushioned seat, and caster base.",
    price: 46000000,
    image: productImages.calligraphieChair,
    position: [0, 0.48, 0],
    dimensions: [0.78, 1.18, 0.72],
    color: "#25282a",
    kind: "chair",
    placementKey: "chair"
  },
  {
    id: "prismo-chair",
    roomId: "workspace",
    categoryId: "chairs",
    name: "Prismo",
    description: "Office chair with upholstered seat, wood arms, and a rolling base.",
    price: 48000000,
    image: productImages.prismoChair,
    position: [0, 0.48, 0],
    dimensions: [0.76, 1.02, 0.68],
    color: "#2f241e",
    kind: "chair",
    placementKey: "chair"
  },
  {
    id: "pulp-chair",
    roomId: "workspace",
    categoryId: "chairs",
    name: "Pulp",
    description: "White lounge task chair with rounded cushions and metal base.",
    price: 44000000,
    image: productImages.pulpChair,
    position: [0, 0.48, 0],
    dimensions: [0.82, 1.12, 0.76],
    color: "#f2f2ef",
    kind: "chair",
    placementKey: "chair"
  },
  {
    id: "ruban",
    roomId: "workspace",
    categoryId: "bookcases",
    name: "Calligraphie",
    description: "Wide bookcase and storage wall with dark shelving and display lighting.",
    price: 46000000,
    image: productImages.calligraphieBookcase,
    position: [0, 1.02, -0.2],
    dimensions: [2.24, 2.05, 0.46],
    color: "#f0ece5",
    kind: "storage",
    placementKey: "bookcase"
  },
  {
    id: "prismo-bookcase",
    roomId: "workspace",
    categoryId: "bookcases",
    name: "Prismo",
    description: "Lacquered storage unit with geometric design and cable hole.",
    price: 48000000,
    image: productImages.prismoBookcase,
    position: [0, 1.02, -0.2],
    dimensions: [1.75, 1.35, 0.46],
    color: "#f0ece5",
    kind: "storage",
    placementKey: "bookcase"
  },
  {
    id: "pulp-bookcase",
    roomId: "workspace",
    categoryId: "bookcases",
    name: "Pulp",
    description: "Open shelf with wood cabinet base and slim metal frame.",
    price: 44000000,
    image: productImages.pulpBookcase,
    position: [0, 1.02, -0.2],
    dimensions: [1.25, 1.8, 0.42],
    color: "#c8b69a",
    kind: "storage",
    placementKey: "bookcase"
  },
  {
    id: "ocean",
    roomId: "bathroom",
    categoryId: "bath-tubs",
    name: "Ocean",
    description: "Freestanding mineral stone bathtub with ergonomic curved support.",
    price: 170000000,
    image: productImages.ocean,
    position: [0, 0.32, 0],
    dimensions: [1.7, 0.64, 0.82],
    color: "#f1f1ec",
    kind: "bath",
    placementKey: "bath"
  },
  {
    id: "nimes",
    roomId: "bathroom",
    categoryId: "bath-tubs",
    name: "Nimes",
    description: "Minimalist ergonomic bathtub, easy to maintain and durable.",
    price: 180000000,
    image: productImages.nimes,
    position: [0, 0.3, 0],
    dimensions: [1.55, 0.6, 0.78],
    color: "#e3ded4",
    kind: "bath",
    placementKey: "bath"
  },
  {
    id: "cristal-mirror",
    roomId: "bathroom",
    categoryId: "mirrors",
    name: "Cristal",
    description: "Minimalist premium metal and glass mirror (W 50.8 x H 76.2 x D 5 cm), versatile design.",
    price: 67000000,
    image: productImages.cristalMirror,
    position: [0, 0.45, 0],
    dimensions: [1.25, 1.08, 0.08],
    color: "#ddd7cc",
    kind: "mirror",
    placementKey: "mirror"
  },
  {
    id: "arc-mirror",
    roomId: "bathroom",
    categoryId: "mirrors",
    name: "Halo",
    description: "Glass mirror (W 180 x H 120 x D 3 cm) with edge lighting and slim frameless design.",
    price: 60000000,
    image: productImages.haloMirror,
    position: [0, 0.9, 0],
    dimensions: [0.95, 1.35, 0.08],
    color: "#d8d4cc",
    kind: "mirror",
    placementKey: "mirror"
  }
];

export function getRoom(roomType: string) {
  return rooms.find((room) => room.id === roomType || room.slug === roomType);
}

export function getRoomCategories(roomType: string) {
  const roomId = resolveRoomId(roomType);
  return roomId ? categories.filter((category) => category.roomId === roomId) : [];
}

export function getCategory(roomType: string, category: string) {
  const roomId = resolveRoomId(roomType);
  return categories.find((item) => item.roomId === roomId && (item.id === category || item.slug === category));
}

export function getProductsByCategory(roomType: string, category: string) {
  const roomId = resolveRoomId(roomType);
  const categoryId = resolveCategoryId(roomType, category);
  return products.filter((product) => product.roomId === roomId && product.categoryId === categoryId);
}

export function getProduct(roomType: string, category: string, productId: string) {
  const roomId = resolveRoomId(roomType);
  const categoryId = resolveCategoryId(roomType, category);
  return products.find((product) => product.roomId === roomId && product.categoryId === categoryId && product.id === productId);
}

export function getFirstCategory(roomType: RoomId): CategoryId {
  return getRoomCategories(roomType)[0]?.id ?? "sofas";
}

export function resolveRoomId(roomType: string): RoomId | undefined {
  return rooms.find((room) => room.id === roomType || room.slug === roomType)?.id;
}

export function resolveCategoryId(roomType: string, category: string): CategoryId | undefined {
  return getCategory(roomType, category)?.id;
}

export function getRoomSlug(roomType: RoomId) {
  return rooms.find((room) => room.id === roomType)?.slug ?? roomType;
}

export function getCategorySlug(roomType: RoomId, categoryId: CategoryId) {
  return categories.find((category) => category.roomId === roomType && category.id === categoryId)?.slug ?? categoryId;
}
