"use client";
import { motion } from "framer-motion";
import CategoryCard from "@/components/ui/CategoryCard";
import { categories } from "@/data/products";

export default function CollectionsPage() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Browse</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light">Collections</h1>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <CategoryCard {...cat} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
