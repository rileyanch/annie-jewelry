export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: "rings" | "necklaces" | "earrings" | "bracelets" | "gifts";
  description: string;
  details: string;
  image: string;
  featured: boolean;
  available: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "delicate-gold-band",
    name: "Delicate Gold Band",
    price: 285,
    category: "rings",
    description: "A whisper-thin 14k gold band. Understated, elegant, timeless.",
    details: "14k yellow gold. Size 6 (can be resized). Handcrafted. Available through Annie.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    featured: true,
    available: true,
  },
  {
    id: "2",
    slug: "pearl-drop-earrings",
    name: "Pearl Drop Earrings",
    price: 195,
    category: "earrings",
    description: "Freshwater pearl drops on 14k gold hooks. A quiet kind of luxury.",
    details: "Freshwater pearls. 14k gold hooks. Approximately 1.5 inches in length.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    featured: true,
    available: true,
  },
  {
    id: "3",
    slug: "layered-chain-necklace",
    name: "Layered Chain Necklace",
    price: 340,
    category: "necklaces",
    description: "A fine 14k gold chain designed for everyday wear and effortless layering.",
    details: "14k yellow gold. 16 inch length with extender. Lobster clasp.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    featured: true,
    available: true,
  },
  {
    id: "4",
    slug: "diamond-solitaire-ring",
    name: "Diamond Solitaire",
    price: 1850,
    category: "rings",
    description: "A single brilliant-cut diamond. The most honest ring there is.",
    details: "0.5ct brilliant cut diamond. 14k white gold setting. VS2 clarity, G color.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    featured: true,
    available: true,
  },
  {
    id: "5",
    slug: "bangle-bracelet",
    name: "Thin Gold Bangle",
    price: 225,
    category: "bracelets",
    description: "A solid 14k gold bangle. Stacks beautifully, wears alone effortlessly.",
    details: "14k yellow gold. Inner diameter: 65mm. Solid construction.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    featured: true,
    available: true,
  },
  {
    id: "6",
    slug: "hoop-earrings",
    name: "Small Gold Hoops",
    price: 165,
    category: "earrings",
    description: "The perfect everyday hoop. 14k gold, 15mm diameter.",
    details: "14k yellow gold. 15mm diameter. Hinged closure.",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
    featured: true,
    available: true,
  },
  {
    id: "7",
    slug: "tennis-bracelet",
    name: "Diamond Tennis Bracelet",
    price: 2400,
    category: "bracelets",
    description: "Classic diamonds in a line. Timeless in every sense.",
    details: "1.0ctw diamonds. 14k white gold. 7 inch length.",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    featured: false,
    available: true,
  },
  {
    id: "8",
    slug: "gift-box-set",
    name: "The Annie Edit",
    price: 425,
    category: "gifts",
    description: "A curated set selected by Annie. The perfect gift for someone you love.",
    details: "Contents vary by season. Beautifully packaged. Personally selected by Annie.",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
    featured: false,
    available: true,
  },
];

export const categories = [
  { id: "rings", label: "Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80" },
  { id: "necklaces", label: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80" },
  { id: "earrings", label: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80" },
  { id: "bracelets", label: "Bracelets", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80" },
  { id: "gifts", label: "Gifts", image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80" },
] as const;
