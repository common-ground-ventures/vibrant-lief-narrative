import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import logoLight from "@/assets/lief-logo-light.png";
import { useContactModal } from "@/contexts/ContactModalContext";

const stagger = (i: number) => ({ delay: 0.3 + i * 0.15 });

const V2Hero = () => {
  const { openModal } = useContactModal();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroLogoOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroLogoScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.4]);
  const heroLogoY = useTransform(scrollYProgress, [0, 0.15], [0, -60]);
  
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY < 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-x-hidden pt-24 pb-36 md:pb-40" style={{ background: "var(--v2-deep)" }}>
      {/* glows removed: the section gradients carry the light now */}



      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ...stagger(0), ease: [.16, 1, .3, 1] }}
          style={{ opacity: heroLogoOpacity, scale: heroLogoScale, y: heroLogoY, transformOrigin: "left center", willChange: "transform, opacity" }}
          className="mb-5 md:mb-8"
        >
          <img src={logoLight} alt="Lïef" className="h-14 md:h-24 lg:h-32 w-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ...stagger(1), ease: [.16, 1, .3, 1] }}
          className="mb-6 md:mb-8"
        >
          <span className="v2-label hidden md:inline text-[1.25rem]">Development + Construction · Phoenix, AZ</span>
          <span
            className="md:hidden"
            style={{ fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--v2-neon)" }}
          >
            <span className="inline-block w-4 h-px mr-2 align-middle" style={{ background: "var(--v2-neon)" }} />
            Development + Construction · Phoenix, AZ
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ...stagger(1), ease: [.16, 1, .3, 1] }}
          className="v2-headline leading-[1.02] mb-6 md:mb-8"
          style={{ fontSize: "clamp(2.2rem, 5.5vw, 5rem)" }}
        >
          BUILT<span className="v2-neon-period">.</span>
          <br />
          DIFFERENT<span className="v2-neon-period">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ...stagger(2), ease: [.16, 1, .3, 1] }}
          style={{ fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.1rem, 3vw, 1.4rem)", color: "var(--v2-muted)", lineHeight: 1.5 }}
        >
          <span className="hidden md:inline">We draw it. We build it. We own it.</span>
          <span className="md:hidden">
            We draw it. We build it. We own it.
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ...stagger(3), ease: [.16, 1, .3, 1] }}
          className="mt-4 md:mt-5 max-w-[420px] hidden md:block"
          style={{ fontSize: "1.1rem", color: "var(--v2-dim)", lineHeight: 1.6 }}
        >
          Development + Construction Consolidated.
          <br className="hidden sm:inline" />
          300+ Skilled Tradesmen.
          <br className="hidden sm:inline" />
          One Team, No Gaps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ...stagger(4), ease: [.16, 1, .3, 1] }}
          className="mt-8 md:mt-12 flex flex-wrap gap-3 md:gap-4"
        >
          <button
            onClick={() => document.querySelector("#communities")?.scrollIntoView({ behavior: "smooth" })}
            className="transition-all duration-300 hover:brightness-110"
            style={{
              fontFamily: "var(--v2-font-body)", fontSize: "clamp(1rem, 2.5vw, 1.25rem)", textTransform: "uppercase",
              letterSpacing: "0.14em", fontWeight: 600, background: "var(--v2-btn-bg)",
              color: "var(--v2-btn-fg)", border: "1px solid var(--v2-loggia)", padding: "10px 24px", cursor: "pointer",
            }}
          >
            View Projects
          </button>
          <button
            onClick={openModal}
            className="transition-all duration-300 hover:bg-[#C2B8A7] hover:text-[#0F1A14]"
            style={{
              fontFamily: "var(--v2-font-body)", fontSize: "clamp(1rem, 2.5vw, 1.25rem)", textTransform: "uppercase",
              letterSpacing: "0.14em", fontWeight: 600, background: "transparent",
              color: "var(--v2-neon)", border: "1px solid var(--v2-neon)", padding: "10px 24px", cursor: "pointer",
            }}
          >
            Partner With Us
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ opacity: showScroll ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span style={{ fontSize: "1.25rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--v2-muted)" }}>Scroll</span>
        <div className="w-px h-8 md:h-12" style={{ background: "linear-gradient(to bottom, var(--v2-neon), transparent)" }} />
      </motion.div>
    </section>
  );
};

export default V2Hero;
