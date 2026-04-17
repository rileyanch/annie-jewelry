"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type CategoryCardProps = {
  id: string;
  label: string;
  image: string;
};

export default function CategoryCard({ id, label, image }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link href={`/shop?category=${id}`} className="group block">
        <div className="relative aspect-square bg-surface overflow-hidden mb-3">
          <Image
            src={image}
            alt={label}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 20vw"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
        </div>
        <p className="text-xs tracking-[0.15em] uppercase text-center text-[#2A2A2A]">{label}</p>
      </Link>
    </motion.div>
  );
}
