"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ProductCard from "@/components/ui/ProductCard";
import CategoryCard from "@/components/ui/CategoryCard";
import EmailCapture from "@/components/ui/EmailCapture";
import { products, categories } from "@/data/products";

const featuredProducts = products.filter((p) => p.featured);

const valueProps = [
  {
    title: "Personally Curated",
    description: "Every piece is hand-selected by Annie — never algorithmic, never random.",
  },
  {
    title: "Insider Pricing",
    description: "Access to wholesale and trade pricing not available to the general public.",
  },
  {
    title: "Trusted Guidance",
    description: "Annie's recommendations come from years of expertise and genuine care.",
  },
  {
    title: "A Personal Experience",
    description: "Not a marketplace. A relationship. Annie shops for you like a trusted friend.",
  },
];

export default function Home() {
  return (
    <div className="pt-16">
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
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
              Timeless pieces,<br />thoughtfully chosen.
            </h1>
            <p className="text-white/80 text-lg font-light mb-10 tracking-wide">
              Curated jewelry at insider pricing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="px-8 py-3.5 bg-white text-[#1A1A1A] text-xs tracking-[0.15em] uppercase hover:bg-accent hover:text-white transition-colors duration-300"
              >
                Shop Collection
              </Link>
              <Link
                href="/shop"
                className="px-8 py-3.5 border border-white text-white text-xs tracking-[0.15em] uppercase hover:bg-white hover:text-[#1A1A1A] transition-colors duration-300"
              >
                Browse by Category
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
          <h2 className="font-serif text-3xl md:text-4xl font-light">By Category</h2>
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

      {/* Value Props */}
      <section className="bg-surface py-24">
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
            className="text-xs tracking-[0.15em] uppercase text-muted hover:text-[#1A1A1A] transition-colors pb-0.5 border-b border-muted hover:border-[#1A1A1A]"
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
