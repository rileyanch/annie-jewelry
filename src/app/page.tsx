"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import ProductCard from "@/components/ui/ProductCard";
import CategoryCard from "@/components/ui/CategoryCard";
import EmailCapture from "@/components/ui/EmailCapture";
import ScrollPopup from "@/components/ui/ScrollPopup";
import { products, categories } from "@/data/products";

const featuredProducts = products.filter((p) => p.featured);

const valueProps = [
  {
    title: "Personally Curated",
    description: "Every piece is hand-selected by Annie — never algorithmic, never random.",
  },
  {
    title: "Access to Insider Pricing",
    description: "Trade relationships built over years bring you pricing you won't find at retail.",
  },
  {
    title: "Trusted Guidance",
    description: "Annie's recommendations come from genuine expertise and real care — not commission.",
  },
  {
    title: "A Personal Experience",
    description: "This is not a marketplace. It's a relationship. Annie shops for you like a trusted friend.",
  },
];

export default function Home() {
  const whyAnnieRef = useRef<HTMLElement>(null);

  return (
    <div className="pt-16">
      <ScrollPopup triggerRef={whyAnnieRef} />

      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80"
            alt="Curated jewelry"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
              Thoughtfully selected.<br />Priced with access.
            </h1>
            <p className="text-white/80 text-lg font-light mb-10 tracking-wide">
              A curated collection of fine jewelry, chosen by Annie.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="px-8 py-3.5 bg-[#C6A77B] text-white text-xs tracking-[0.15em] uppercase hover:bg-[#A8865A] transition-colors duration-300"
              >
                Shop
              </Link>
              <Link
                href="/collections"
                className="px-8 py-3.5 border border-white text-white text-xs tracking-[0.15em] uppercase hover:bg-white hover:text-[#F8F6F2] transition-colors duration-300"
              >
                Collections
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Browse</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">Shop by Category</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <CategoryCard {...cat} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Annie */}
      <section ref={whyAnnieRef} className="bg-surface py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Why Annie</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light">A different kind of jewelry experience</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {valueProps.map((prop, i) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-8 h-px bg-accent mx-auto mb-6" />
                <h3 className="font-serif text-xl font-light mb-3">{prop.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Featured</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light">Selected pieces</h2>
          </div>
          <Link
            href="/shop"
            className="text-xs tracking-[0.15em] uppercase text-muted hover:text-[#2A2A2A] transition-colors pb-0.5 border-b border-muted hover:border-[#2A2A2A]"
          >
            View all
          </Link>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <section className="border-t border-border py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">Stay close</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-3">Hear from Annie first.</h2>
            <p className="text-sm text-muted mb-10 max-w-md mx-auto">
              New arrivals, curated edits, and pieces worth knowing about — straight to your inbox.
            </p>
            <EmailCapture />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
