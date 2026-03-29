"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ui/ProductCard";
import { products, categories } from "@/data/products";

type CategoryFilter = "all" | "rings" | "necklaces" | "earrings" | "bracelets" | "gifts";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Annie</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light">The Collection</h1>
        </motion.div>
      </div>

      <div className="border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-0 overflow-x-auto">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-4 text-xs tracking-[0.15em] uppercase whitespace-nowrap border-b-2 transition-colors ${
                activeCategory === "all"
                  ? "border-[#1A1A1A] text-[#1A1A1A]"
                  : "border-transparent text-muted hover:text-[#1A1A1A]"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as CategoryFilter)}
                className={`px-6 py-4 text-xs tracking-[0.15em] uppercase whitespace-nowrap border-b-2 transition-colors ${
                  activeCategory === cat.id
                    ? "border-[#1A1A1A] text-[#1A1A1A]"
                    : "border-transparent text-muted hover:text-[#1A1A1A]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-muted text-sm">No pieces in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
