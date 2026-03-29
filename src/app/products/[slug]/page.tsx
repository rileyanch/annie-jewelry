import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import RequestButton from "./RequestButton";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-12">
          <Link href="/shop" className="text-xs tracking-[0.12em] uppercase text-muted hover:text-[#1A1A1A] transition-colors">
            Shop
          </Link>
          <span className="text-muted text-xs">/</span>
          <span className="text-xs tracking-[0.12em] uppercase text-muted capitalize">{product.category}</span>
          <span className="text-muted text-xs">/</span>
          <span className="text-xs tracking-[0.12em] uppercase text-[#1A1A1A]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative aspect-[3/4] bg-surface overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs tracking-[0.15em] uppercase text-muted mb-3">{product.category}</p>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-[#1A1A1A] mb-4">{product.name}</h1>
            <p className="text-2xl font-light text-[#1A1A1A] mb-8">${product.price.toLocaleString()}</p>

            <div className="w-12 h-px bg-border mb-8" />

            <p className="text-sm text-muted leading-relaxed mb-6">{product.description}</p>
            <p className="text-xs text-muted leading-relaxed mb-12">{product.details}</p>

            <div className="flex flex-col gap-3">
              <RequestButton productName={product.name} />
              <Link
                href="/contact"
                className="w-full py-3.5 border border-border text-[#1A1A1A] text-xs tracking-[0.15em] uppercase text-center hover:border-[#1A1A1A] transition-colors duration-300"
              >
                Ask Annie about this piece
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
