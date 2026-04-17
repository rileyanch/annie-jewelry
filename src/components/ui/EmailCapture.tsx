"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function EmailCapture() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with Notion API integration
    console.log("Email capture submission:", { firstName, email });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-4"
      >
        <p className="font-serif text-xl font-light text-[#2A2A2A] mb-2">You&apos;re on the list.</p>
        <p className="text-sm text-muted">Annie will be in touch.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        className="flex-1 px-4 py-3 bg-transparent border border-border text-sm text-[#2A2A2A] placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
      />
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 px-4 py-3 bg-transparent border border-border text-sm text-[#2A2A2A] placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
      />
      <button
        type="submit"
        className="px-8 py-3 bg-[#C6A77B] text-white text-xs tracking-[0.15em] uppercase hover:bg-[#A8865A] transition-colors duration-300"
      >
        Join
      </button>
    </form>
  );
}
