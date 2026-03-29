"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link href={`/products/${product.slug}`} className="group block">
        <div className="relative aspect-[3/4] bg-surface overflow-hidden mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </div>
        <div>
          <p className="text-xs tracking-[0.12em] uppercase text-muted mb-1">{product.category}</p>
          <h3 className="font-serif text-lg font-light text-[#1A1A1A] mb-1">{product.name}</h3>
          <p className="text-sm text-muted">${product.price.toLocaleString()}</p>
        </div>
      </Link>
    </motion.div>
  );
}
