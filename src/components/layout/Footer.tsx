import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-serif text-2xl font-light tracking-[0.15em] mb-3">ANNIE</p>
            <p className="text-xs text-muted tracking-wide leading-relaxed">
              Curated jewelry at insider pricing.<br />A more personal way to shop.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#1A1A1A] mb-5">Explore</p>
            <div className="flex flex-col gap-3">
              {[
                { href: "/shop", label: "Shop" },
                { href: "/collections", label: "Collections" },
                { href: "/about", label: "About Annie" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-muted hover:text-[#1A1A1A] transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#1A1A1A] mb-5">Contact</p>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="text-xs text-muted hover:text-[#1A1A1A] transition-colors tracking-wide">
                Request a piece
              </Link>
              <Link href="/contact" className="text-xs text-muted hover:text-[#1A1A1A] transition-colors tracking-wide">
                Ask Annie
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-muted tracking-wide">
            © {new Date().getFullYear()} Annie Jewelry LLC · Curated by Annie
          </p>
          <p className="text-xs text-muted tracking-wide">
            Annmarie Anchustegui
          </p>
        </div>
      </div>
    </footer>
  );
}
