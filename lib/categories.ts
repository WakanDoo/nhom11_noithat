export type Product = {
  id: string;
  label: string;
  title: string;
  imageSrc: string;
  grid?: {
    colStart: 1 | 2;
    rowStart: number;
  };
  overlay?: {
    labelLeft?: number;
    labelBottom?: number;
    labelMaxWidth?: number;
    buttonRight?: number;
    buttonBottom?: number;
    titleInside?: boolean;
    titleLeft?: number;
    titleBottom?: number;
    titleMaxWidth?: number;
  };
};

export type CategoryData = {
  slug: string;
  menuLabel: string;
  heading: string;
  description: string;
  breadcrumbLabel: string;
  previewImageSrc: string;
  products: Product[];
};

const figmaTablesChairImages = {
  petale: "https://www.figma.com/api/mcp/asset/8dcd66fa-e7d4-4b1e-8baa-91c0ffdaa0a9",
  blogger3: "https://www.figma.com/api/mcp/asset/9e416c03-fc7f-4e86-a724-bed139f6e835",
  ovniUp: "https://www.figma.com/api/mcp/asset/baa7422e-99dc-446e-bb9e-6f822a03a8a2",
  niwa: "https://www.figma.com/api/mcp/asset/0f5a751f-bb3e-451b-af78-36908f4c5eee",
} as const;

const figmaOfficeChairImages = {
  ceo: "https://www.figma.com/api/mcp/asset/e6387897-7c9b-458b-a8a6-d15d12673bda",
  pulp: "https://www.figma.com/api/mcp/asset/68ce7819-ef5c-4b57-8975-1a3dc1ab2b52",
  nixon: "https://www.figma.com/api/mcp/asset/5798e4f2-bf74-414f-bb22-45cca8fca8c9",
} as const;

const figmaBookshelfImages = {
  toccata: "https://www.figma.com/api/mcp/asset/0eec482c-ee3f-41b4-8006-e2b9db6d28cf",
  elanta: "https://www.figma.com/api/mcp/asset/f100944e-ad04-4b2f-8f2d-1534f39e22ff",
  wallover: "https://www.figma.com/api/mcp/asset/005af95f-931b-46a5-a120-ce84d51f05cf",
} as const;

function cloneProducts(products: Product[], prefix: string): Product[] {
  return products.map((product, index) => ({
    ...product,
    id: `${prefix}-${index + 1}`,
  }));
}

export const categories: CategoryData[] = [
  {
    slug: "bath",
    menuLabel: "Bath",
    heading: "BATHTUB",
    description:
      "Bathtubs that blend comfort and visual elegance with sculpted forms for everyday relaxation.",
    breadcrumbLabel: "Bathtub",
    previewImageSrc: "/category/bath-ocean.png",
    products: [
      {
        id: "bath-1",
        label: "Ocean Freestanding Bathtub",
        title: "Double Ended Baths",
        imageSrc: "/category/bath-ocean.png",
        grid: { colStart: 1, rowStart: 1 },
        overlay: {
          labelLeft: 32,
          labelBottom: 34,
          labelMaxWidth: 300,
          buttonRight: 14,
          buttonBottom: 20,
          titleInside: true,
          titleLeft: 32,
          titleBottom: 14,
          titleMaxWidth: 220,
        },
      },
      {
        id: "bath-2",
        label: "Nimes Freestanding Bathtub",
        title: "Nimes Freestanding Bathtub",
        imageSrc: "/category/bath-nimes.png",
        grid: { colStart: 2, rowStart: 1 },
        overlay: {
          labelLeft: 32,
          labelBottom: 34,
          labelMaxWidth: 320,
          buttonRight: 14,
          buttonBottom: 20,
          titleInside: true,
          titleLeft: 32,
          titleBottom: 14,
          titleMaxWidth: 230,
        },
      },
    ],
  },
  {
    slug: "bed",
    menuLabel: "Bed",
    heading: "BED",
    description: "Bedroom pieces with soft silhouettes, practical comfort, and refined details.",
    breadcrumbLabel: "Bed",
    previewImageSrc: "/category/bed-bubble.png",
    products: [
      {
        id: "bed-1",
        label: "BUBBLE",
        title: "Bed",
        imageSrc: "/category/bed-bubble.png",
        grid: { colStart: 1, rowStart: 1 },
      },
      {
        id: "bed-2",
        label: "CHERCHE MIDI",
        title: "Bed, 160x200 cm",
        imageSrc: "/category/bed-cherche-midi.png",
        grid: { colStart: 2, rowStart: 1 },
        overlay: { buttonRight: 18 },
      },
      {
        id: "bed-3",
        label: "EN-TETE",
        title: "Bed 160x200 cm",
        imageSrc: "/category/bed-en-tete.png",
        grid: { colStart: 1, rowStart: 2 },
        overlay: { buttonRight: 18 },
      },
    ],
  },
  {
    slug: "wardrobe",
    menuLabel: "Wardrobe",
    heading: "WARDROBE",
    description:
      "A Owlhome wardrobe does much more than merely contain objects behind its swinging or sliding doors. Modular and customisable, it brings rhythm and cadence while decorating the room.",
    breadcrumbLabel: "Wardrobe",
    previewImageSrc: "/category/wardrobe-cristal.png",
    products: [
      {
        id: "wardrobe-1",
        label: "CRISTAL",
        title: "Armoire- sans éclairage",
        imageSrc: "/category/wardrobe-cristal.png",
        grid: { colStart: 1, rowStart: 1 },
      },
      {
        id: "wardrobe-2",
        label: "PARIS PANAME",
        title: "Wardrobe",
        imageSrc: "/category/wardrobe-paris-paname.png",
        grid: { colStart: 2, rowStart: 1 },
      },
    ],
  },
  {
    slug: "office",
    menuLabel: "Office",
    heading: "DESK",
    description:
      "Desks that combine functionality and design to let you work efficiently and elegantly.",
    breadcrumbLabel: "Desk",
    previewImageSrc: "/category/office-calligraphie.png",
    products: [
      {
        id: "office-1",
        label: "CALLIGRAPHIE",
        title: "Desk - Walnut with Auburn stain",
        imageSrc: "/category/office-calligraphie.png",
        grid: { colStart: 1, rowStart: 1 },
        overlay: { labelLeft: 86, labelBottom: 1, buttonRight: 16 },
      },
      {
        id: "office-2",
        label: "PULP",
        title: "Triangular dining table / desk",
        imageSrc: "/category/office-pulp.png",
        grid: { colStart: 2, rowStart: 1 },
        overlay: { buttonRight: 18 },
      },
      {
        id: "office-3",
        label: "BRISMO",
        title: "Small Desk",
        imageSrc: "/category/office-brismo.png",
        grid: { colStart: 1, rowStart: 2 },
        overlay: { buttonRight: 18 },
      },
    ],
  },
  {
    slug: "office-chairs",
    menuLabel: "Office Chairs",
    heading: "OFFICE CHAIRS",
    description:
      "Office seating with sculptural lines and a polished silhouette, presented in the same refined catalogue spirit as the Figma concept.",
    breadcrumbLabel: "Office Chairs",
    previewImageSrc: figmaOfficeChairImages.ceo,
    products: cloneProducts(
      [
        {
          id: "office-chair-1",
          label: "CEO",
          title: "Armchair",
          imageSrc: figmaOfficeChairImages.ceo,
          grid: { colStart: 1, rowStart: 1 },
        },
        {
          id: "office-chair-2",
          label: "NIXON",
          title: "President armchair",
          imageSrc: figmaOfficeChairImages.nixon,
          grid: { colStart: 2, rowStart: 1 },
        },
        {
          id: "office-chair-3",
          label: "PULP",
          title: "Office armchair",
          imageSrc: figmaOfficeChairImages.pulp,
          grid: { colStart: 1, rowStart: 2 },
        },
      ],
      "office-chairs"
    ),
  },
  {
    slug: "sofa",
    menuLabel: "Sofa",
    heading: "SOFAS",
    description:
      "Straight or corner, modular and customisable: sofas are the focal point of the living room.",
    breadcrumbLabel: "Sofas",
    previewImageSrc: "/category/sofa-setup.png",
    products: [
      {
        id: "sofa-1",
        label: "SET UP",
        title: "Large 3-seat sofa - Low Armrests",
        imageSrc: "/category/sofa-setup.png",
        grid: { colStart: 1, rowStart: 1 },
        overlay: { buttonRight: 16, buttonBottom: 12 },
      },
      {
        id: "sofa-2",
        label: "ALTEA",
        title: "Large 3-seat sofa",
        imageSrc: "/category/sofa-altea.png",
        grid: { colStart: 1, rowStart: 2 },
        overlay: { buttonRight: 16, buttonBottom: 12 },
      },
      {
        id: "sofa-3",
        label: "ALLUSION",
        title: "Large 3-seat sofa",
        imageSrc: "/category/sofa-allusion.png",
        grid: { colStart: 2, rowStart: 2 },
        overlay: { buttonRight: 16, buttonBottom: 12 },
      },
      {
        id: "sofa-4",
        label: "BUBBLE CURVE",
        title: "Curved 3/4-seat sofa",
        imageSrc: "/category/sofa-bubble-curve.png",
        grid: { colStart: 2, rowStart: 1 },
        overlay: { buttonRight: 16, buttonBottom: 12 },
      },
    ],
  },
  {
    slug: "tv-cabinets",
    menuLabel: "TV Cabinets",
    heading: "TV CABINETS & CONSOLES",
    description:
      "TV cabinets and consoles that blend function and design with modular storage solutions.",
    breadcrumbLabel: "TV Cabinets & consoles",
    previewImageSrc: "/category/tv-trinta.png",
    products: [
      {
        id: "tv-1",
        label: "TRINTA",
        title: "Tricolor bookcase",
        imageSrc: "/category/tv-trinta.png",
        grid: { colStart: 1, rowStart: 1 },
      },
      {
        id: "tv-2",
        label: "RUBAN",
        title: "Large bookcase",
        imageSrc: "/category/tv-ruban.png",
        grid: { colStart: 2, rowStart: 1 },
        overlay: { buttonRight: 20 },
      },
        {
          id: "tv-3",
          label: "ORA ITO",
          title: "TV unit",
          imageSrc: "/category/tv-ora-ito.png",
          grid: { colStart: 1, rowStart: 2 },
        },
        {
          id: "tv-4",
          label: "GLOBO TV",
          title: "TV unit",
          imageSrc: "/category/tv-globo-tv.png",
          grid: { colStart: 2, rowStart: 2 },
          overlay: { buttonRight: 20 },
        },
    ],
  },
  {
    slug: "bookshelf",
    menuLabel: "Bookshelf",
    heading: "BOOKSHELF",
    description:
      "Bookcases and storage pieces with architectural rhythm, styled to match the premium showroom character of the Figma designs.",
    breadcrumbLabel: "Bookshelf",
    previewImageSrc: figmaBookshelfImages.toccata,
    products: cloneProducts(
      [
        {
          id: "bookshelf-1",
          label: "TOCCATA",
          title: "Bookcase A - wood-like structure",
          imageSrc: figmaBookshelfImages.toccata,
          grid: { colStart: 1, rowStart: 1 },
        },
        {
          id: "bookshelf-2",
          label: "WALLOVER",
          title: "Compo 2023-10 D full lighting",
          imageSrc: figmaBookshelfImages.wallover,
          grid: { colStart: 2, rowStart: 1 },
        },
        {
          id: "bookshelf-3",
          label: "ELANTA",
          title: "Bookcase",
          imageSrc: figmaBookshelfImages.elanta,
          grid: { colStart: 1, rowStart: 2 },
        },
      ],
      "bookshelf"
    ),
  },
  {
    slug: "mirror",
    menuLabel: "Mirror",
    heading: "MIRROR",
    description: "Premium mirrors and lighting accents for refined, functional interiors.",
    breadcrumbLabel: "Mirror",
    previewImageSrc: "/category/mirror-castia.png",
    products: [
      {
        id: "mirror-1",
        label: "CASTIA",
        title: "Castia™ by Studio McGee",
        imageSrc: "/category/mirror-castia.png",
        grid: { colStart: 1, rowStart: 1 },
        overlay: { labelLeft: 105, labelBottom: 16, buttonRight: 12, buttonBottom: 12 },
      },
      {
        id: "mirror-2",
        label: "HALO",
        title: "Halo Horizontal Backlit Mirror",
        imageSrc: "/category/mirror-halo.png",
        grid: { colStart: 2, rowStart: 1 },
        overlay: { labelLeft: 104, labelBottom: 1, buttonRight: 16, buttonBottom: 8 },
      },
    ],
  },
  {
    slug: "decor",
    menuLabel: "Decor",
    heading: "DINING TABLE & CHAIRS",
    description:
      "Any material is possible, from glass and metal to wood, marble and lacquer. With a variety of shapes and sizes, extendable tops and more, the choice and creativity are - once again - limitless.",
    breadcrumbLabel: "Dining table & Chairs",
    previewImageSrc: "/category/decor-rio-ipanema.png",
    products: [
      {
        id: "decor-1",
        label: "RIO IPANEMA",
        title: "Rectangular Dining table",
        imageSrc: "/category/decor-rio-ipanema.png",
        grid: { colStart: 1, rowStart: 1 },
      },
      {
        id: "decor-2",
        label: "ELANTA",
        title: "Chair",
        imageSrc: "/category/decor-elanta.png",
        grid: { colStart: 1, rowStart: 2 },
      },
      {
        id: "decor-3",
        label: "YEL",
        title: "Chair",
        imageSrc: "/category/decor-yel.png",
        grid: { colStart: 1, rowStart: 3 },
      },
      {
        id: "decor-4",
        label: "SERPENTINE",
        title: "Dining table",
        imageSrc: "/category/decor-serpentine.png",
        grid: { colStart: 2, rowStart: 3 },
      },
      {
        id: "decor-5",
        label: "ELANTA",
        title: "Rectangular dining table",
        imageSrc: "/category/decor-elanta-table.png",
        grid: { colStart: 1, rowStart: 4 },
        overlay: { buttonRight: 18 },
      },
      {
        id: "decor-6",
        label: "TRACK 2",
        title: "Dining table - With extension leaf",
        imageSrc: "/category/decor-track-2.png",
        grid: { colStart: 2, rowStart: 2 },
        overlay: { buttonRight: 20 },
      },
      {
        id: "decor-7",
        label: "FRONTLINE",
        title: "Dining armchair",
        imageSrc: "/category/decor-frontline.png",
        grid: { colStart: 2, rowStart: 1 },
        overlay: { buttonRight: 20 },
      },
    ],
  },
  {
    slug: "dining-table-chairs",
    menuLabel: "Dining",
    heading: "DINING TABLE & CHAIRS",
    description:
      "Dining tables and chairs with elegant proportions, expressive materials, and a premium catalogue presentation.",
    breadcrumbLabel: "Dining Table & Chairs",
    previewImageSrc: "/category/decor-rio-ipanema.png",
    products: cloneProducts(
      [
        {
          id: "decor-1",
          label: "RIO IPANEMA",
          title: "Rectangular Dining table",
          imageSrc: "/category/decor-rio-ipanema.png",
          grid: { colStart: 1, rowStart: 1 },
        },
        {
          id: "decor-2",
          label: "ELANTA",
          title: "Chair",
          imageSrc: "/category/decor-elanta.png",
          grid: { colStart: 1, rowStart: 2 },
        },
        {
          id: "decor-3",
          label: "YEL",
          title: "Chair",
          imageSrc: "/category/decor-yel.png",
          grid: { colStart: 1, rowStart: 3 },
        },
        {
          id: "decor-8",
          label: "KASUKA",
          title: "Chair",
          imageSrc: "/category/decor-kasuka.png",
          grid: { colStart: 2, rowStart: 4 },
        },
        {
          id: "decor-4",
          label: "SERPENTINE",
          title: "Dining table",
          imageSrc: "/category/decor-serpentine.png",
          grid: { colStart: 2, rowStart: 3 },
        },
        {
          id: "decor-5",
          label: "ELANTA",
          title: "Rectangular dining table",
          imageSrc: "/category/decor-elanta-table.png",
          grid: { colStart: 1, rowStart: 4 },
        },
        {
          id: "decor-6",
          label: "TRACK 2",
          title: "Dining table - With extension leaf",
          imageSrc: "/category/decor-track-2.png",
          grid: { colStart: 2, rowStart: 2 },
        },
        {
          id: "decor-7",
          label: "FRONTLINE",
          title: "Dining armchair",
          imageSrc: "/category/decor-frontline.png",
          grid: { colStart: 2, rowStart: 1 },
        },
      ],
      "dining"
    ),
  },
  {
    slug: "tables-chairs",
    menuLabel: "Tables & Chairs",
    heading: "TABLES & CHAIRS",
    description:
      "Tables and chairs that blend function and style, with customizable designs to suit your space and elevate everyday living.",
    breadcrumbLabel: "Tables & Chairs",
    previewImageSrc: figmaTablesChairImages.petale,
    products: cloneProducts(
      [
        {
          id: "tables-1",
          label: "PETALE",
          title: "Swiveling armchair",
          imageSrc: figmaTablesChairImages.petale,
          grid: { colStart: 1, rowStart: 1 },
        },
        {
          id: "tables-2",
          label: "NIWA",
          title: "Rectangular cocktail table",
          imageSrc: figmaTablesChairImages.niwa,
          grid: { colStart: 2, rowStart: 1 },
        },
        {
          id: "tables-3",
          label: "BLOGGER 3",
          title: "Armchair",
          imageSrc: figmaTablesChairImages.blogger3,
          grid: { colStart: 1, rowStart: 2 },
        },
        {
          id: "tables-4",
          label: "OVNI UP",
          title: "Round cocktail table",
          imageSrc: figmaTablesChairImages.ovniUp,
          grid: { colStart: 2, rowStart: 2 },
        },
      ],
      "tables-chairs"
    ),
  },
];

export const categoryMap = new Map(categories.map((category) => [category.slug, category]));
