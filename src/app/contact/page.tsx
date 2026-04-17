"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

function ContactForm() {
  const searchParams = useSearchParams();
  const pieceName = searchParams.get("piece") || "";
  const type = searchParams.get("type") || "general";

  const isRequest = type === "request";
  const isInquiry = type === "inquiry";

  const defaultMessage = isRequest
    ? `I'd like to request this piece: ${pieceName}`
    : isInquiry
    ? `I have a question about: ${pieceName}`
    : "";

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: defaultMessage,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with backend/Notion API
    console.log("Contact form submission:", { type, ...form });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16"
      >
        <p className="font-serif text-3xl font-light mb-4">Message received.</p>
        <p className="text-sm text-muted">Annie will be in touch with you personally.</p>
      </motion.div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 bg-transparent border border-border text-sm text-[#2A2A2A] placeholder:text-muted focus:outline-none focus:border-accent transition-colors";

  return (
    <form onSubmit={handleSubmit} className="max-w-lg">
      {isRequest && pieceName && (
        <div className="mb-8 px-4 py-3 bg-surface border border-border">
          <p className="text-xs tracking-[0.12em] uppercase text-muted mb-1">Requesting</p>
          <p className="text-sm text-[#2A2A2A]">{pieceName}</p>
        </div>
      )}
      {isInquiry && pieceName && (
        <div className="mb-8 px-4 py-3 bg-surface border border-border">
          <p className="text-xs tracking-[0.12em] uppercase text-muted mb-1">Asking about</p>
          <p className="text-sm text-[#2A2A2A]">{pieceName}</p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs tracking-[0.12em] uppercase text-muted mb-2">First Name</label>
          <input
            type="text"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs tracking-[0.12em] uppercase text-muted mb-2">Last Name</label>
          <input
            type="text"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-xs tracking-[0.12em] uppercase text-muted mb-2">Email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className={inputClass}
        />
      </div>
      <div className="mb-8">
        <label className="block text-xs tracking-[0.12em] uppercase text-muted mb-2">Message</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={5}
          required
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="px-10 py-3.5 bg-[#C6A77B] text-white text-xs tracking-[0.15em] uppercase hover:bg-[#A8865A] transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
}

function ContactHeading() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "general";

  const title = type === "request" ? "Request a Piece." : type === "inquiry" ? "Ask Annie." : "Talk to Annie.";
  const subtitle =
    type === "request"
      ? "Tell Annie which piece you're interested in and she'll be in touch directly."
      : type === "inquiry"
      ? "Have a question about a piece? Annie responds personally to every message."
      : "Have a piece in mind? Want a recommendation? Annie responds personally to every message.";

  return (
    <>
      <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Get in touch</p>
      <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">{title}</h1>
      <p className="text-sm text-muted max-w-sm leading-relaxed">{subtitle}</p>
    </>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <Suspense fallback={
            <>
              <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Get in touch</p>
              <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">Talk to Annie.</h1>
            </>
          }>
            <ContactHeading />
          </Suspense>
        </motion.div>

        <Suspense fallback={<div className="text-sm text-muted">Loading...</div>}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
