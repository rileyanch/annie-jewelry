"use client";
import { useState, useEffect, RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  triggerRef: RefObject<HTMLElement | null>;
};

export default function ScrollPopup({ triggerRef }: Props) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.boundingClientRect.bottom < window.innerHeight) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    const el = triggerRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [triggerRef, dismissed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Popup email capture:", { firstName, email });
    setSubmitted(true);
    setTimeout(() => setVisible(false), 2000);
  };

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-4 pb-6 sm:pb-0"
        >
          <div className="absolute inset-0 bg-black/30" onClick={dismiss} />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative bg-[#FFFFFF] max-w-md w-full p-10 shadow-2xl border border-[#E7E1D8]"
          >
            <button
              onClick={dismiss}
              className="absolute top-5 right-5 text-[#7A7A7A] hover:text-[#2A2A2A] transition-colors"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-4"
              >
                <p className="font-serif text-2xl font-light mb-2">You&apos;re on the list.</p>
                <p className="text-sm text-[#7A7A7A]">Annie will be in touch.</p>
              </motion.div>
            ) : (
              <>
                <p className="text-xs tracking-[0.2em] uppercase text-[#7A7A7A] mb-3">Annie&apos;s List</p>
                <h2 className="font-serif text-2xl md:text-3xl font-light mb-2">
                  Get access to Annie&apos;s latest selections
                </h2>
                <p className="text-sm text-[#7A7A7A] mb-8 leading-relaxed">
                  New pieces, curated edits, and insider access — directly from Annie.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="px-4 py-3 bg-transparent border border-[#E7E1D8] text-sm text-[#2A2A2A] placeholder:text-[#7A7A7A] focus:outline-none focus:border-[#3D9E8E] transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="px-4 py-3 bg-transparent border border-[#E7E1D8] text-sm text-[#2A2A2A] placeholder:text-[#7A7A7A] focus:outline-none focus:border-[#3D9E8E] transition-colors"
                  />
                  <button
                    type="submit"
                    className="mt-1 py-3.5 bg-[#3D9E8E] text-white text-xs tracking-[0.15em] uppercase hover:bg-[#2E7D70] transition-colors duration-300"
                  >
                    Join
                  </button>
                </form>
                <button
                  onClick={dismiss}
                  className="mt-4 w-full text-xs text-[#7A7A7A] hover:text-[#2A2A2A] transition-colors tracking-wide"
                >
                  No thanks
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
