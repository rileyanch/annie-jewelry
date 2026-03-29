"use client";
import Link from "next/link";

export default function RequestButton({ productName }: { productName: string }) {
  return (
    <Link
      href={`/contact?piece=${encodeURIComponent(productName)}`}
      className="w-full py-3.5 bg-[#1A1A1A] text-white text-xs tracking-[0.15em] uppercase text-center hover:bg-accent transition-colors duration-300"
    >
      Request This Piece
    </Link>
  );
}
