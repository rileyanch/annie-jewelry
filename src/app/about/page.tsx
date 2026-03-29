"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="pt-16">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] bg-surface overflow-hidden order-2 lg:order-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80"
              alt="Annie curating jewelry"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4">About</p>
            <h1 className="font-serif text-4xl md:text-5xl font-light mb-8 leading-tight">
              Hi, I&apos;m Annie.
            </h1>

            <div className="space-y-5 text-sm text-muted leading-relaxed">
              <p>
                I&apos;ve spent years navigating the jewelry industry — the showrooms, the trade shows,
                the wholesale relationships that most buyers never get access to. What I found is that
                the most beautiful pieces aren&apos;t always in the loudest stores.
              </p>
              <p>
                Annie is my answer to that. A curated collection of jewelry I genuinely love, at pricing
                that comes from real trade relationships — not retail markups.
              </p>
              <p>
                Every piece here has been chosen by me, personally. I think about who might wear it,
                what it pairs with, and whether it&apos;s something I&apos;d put on myself. If it doesn&apos;t pass
                that test, it doesn&apos;t make the cut.
              </p>
              <p>
                This isn&apos;t a marketplace. It&apos;s a relationship. I want to help you find pieces you&apos;ll
                keep for years — not just buy on impulse.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 bg-[#1A1A1A] text-white text-xs tracking-[0.15em] uppercase hover:bg-accent transition-colors duration-300"
              >
                Get in touch
              </Link>
            </div>

            <div className="mt-10 pt-10 border-t border-border">
              <p className="font-serif text-xl font-light italic text-muted">
                — Annmarie Anchustegui
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
