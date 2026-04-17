"use client";
import Link from "next/link";

export default function RequestButton({ productName }: { productName: string }) {
  return (
    <Link
      href={`/contact?type=request&piece=${encodeURIComponent(productName)}`}
      className="w-full py-3.5 bg-[#C6A77B] text-white text-xs tracking-[0.15em] uppercase text-center hover:bg-[#A8865A] transition-colors duration-300"
    >
      Request This Piece
    </Link>
  );
}
