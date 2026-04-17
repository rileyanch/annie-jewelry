"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const collections = [
  {
    id: "anniversary",
    label: "Anniversary",
    description: "Timeless pieces for the milestones that matter most.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
  },
  {
    id: "wedding",
    label: "Wedding",
    description: "Curated pieces for the bride, the bridal party, and the moments in between.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
  },
  {
    id: "everyday",
    label: "Everyday",
    description: "The pieces you reach for first. Simple, refined, always right.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
  },
  {
    id: "gifts",
    label: "Gifts",
    description: "Hand-picked by Annie for the people you want to get it right for.",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
  },
  {
    id: "layering",
    label: "Layering",
    description: "Pieces that live together. Mixed metals, delicate chains, effortless stacking.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
  },
  {
    id: "statement",
    label: "Statement",
    description: "For when you want the jewelry to speak first.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
  },
];

export default function CollectionsPage() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Curated Edits</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">Collections</h1>
          <p className="text-sm text-muted max-w-sm leading-relaxed">
            Thoughtfully grouped by occasion and intention — not just category.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((col, i) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={`/shop?collection=${col.id}`} className="group block">
                <div className="relative aspect-[4/3] bg-surface overflow-hidden mb-5">
                  <Image
                    src={col.image}
                    alt={col.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#2A2A2A] mb-2">{col.label}</p>
                <p className="text-sm text-muted leading-relaxed">{col.description}</p>
                <p className="mt-3 text-xs tracking-[0.12em] uppercase text-[#3D9E8E] group-hover:text-[#2E7D70] transition-colors">
                  Browse →
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
