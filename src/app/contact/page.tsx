"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

function ContactForm() {
  const searchParams = useSearchParams();
  const pieceName = searchParams.get("piece") || "";

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: pieceName ? `I'm interested in: ${pieceName}` : "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with backend/Notion API
    console.log("Contact form submission:", form);
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

  return (
    <form onSubmit={handleSubmit} className="max-w-lg">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs tracking-[0.12em] uppercase text-muted mb-2">First Name</label>
          <input
            type="text"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            required
            className="w-full px-4 py-3 bg-transparent border border-border text-sm text-[#1A1A1A] placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs tracking-[0.12em] uppercase text-muted mb-2">Last Name</label>
          <input
            type="text"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            className="w-full px-4 py-3 bg-transparent border border-border text-sm text-[#1A1A1A] placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
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
          className="w-full px-4 py-3 bg-transparent border border-border text-sm text-[#1A1A1A] placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
        />
      </div>
      <div className="mb-8">
        <label className="block text-xs tracking-[0.12em] uppercase text-muted mb-2">Message</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={5}
          required
          className="w-full px-4 py-3 bg-transparent border border-border text-sm text-[#1A1A1A] placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="px-10 py-3.5 bg-[#1A1A1A] text-white text-xs tracking-[0.15em] uppercase hover:bg-accent transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
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
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Get in touch</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">Talk to Annie.</h1>
          <p className="text-sm text-muted max-w-sm leading-relaxed">
            Have a piece in mind? Want a recommendation? Annie responds personally to every message.
          </p>
        </motion.div>

        <Suspense fallback={<div className="text-sm text-muted">Loading...</div>}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
