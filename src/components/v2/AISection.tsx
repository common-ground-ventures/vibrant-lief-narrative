import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useInView } from "@/components/v2/useInView";
import KanopiMark, { KanopiLink } from "@/components/v2/KanopiMark";

const ease = [0.16, 1, 0.3, 1] as const;

const aiCapabilities = [
  "Change Order Management & Negotiation",
  "Plan & Specification Clarification",
  "Estimating Verification & Audit",
  "Budget Tracking & Variance Analysis",
  "Schedule Optimization & Monitoring",
  "Document Analysis & Compliance Review",
  "Vendor & Material Price Verification",
  "Insurance Claim Documentation",
];

const AISection = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="technology" className="relative py-20 md:py-28" style={{ background: "var(--v2-deep)" }}>
      <div ref={ref} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <>
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 0.75, ease }}
              className="relative mb-12"
            >
              <div className="v2-ghost-text absolute top-0 right-0 md:-right-6 hidden sm:block" style={{ fontSize: "min(9.6vw, 120px)", lineHeight: 1, color: "rgba(194,184,167,.6)" }}>
                TECH
              </div>
              <div className="v2-label mb-6">The Edge</div>
              <h2 className="v2-headline text-4xl md:text-6xl lg:text-7xl mb-4" style={{ color: "var(--v2-white)" }}>
                AI-POWERED<br /><span style={{ color: "var(--v2-neon)" }}>OVERSIGHT</span><span className="v2-neon-period">.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : false}
                  transition={{ duration: 0.75, delay: 0.1, ease }}
                  className="mb-4"
                  style={{ fontSize: "1.1rem", color: "var(--v2-muted)", lineHeight: 1.7 }}
                >
                  We draw and price our own buildings in <KanopiLink />, the design and estimating software we built. Its design agents check their own work: on our own project they caught a 9.5-foot bay error and a wrong setback before either reached a drawing set.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : false}
                  transition={{ duration: 0.75, delay: 0.15, ease }}
                  className="mb-8"
                  style={{ fontSize: "1.1rem", color: "var(--v2-dim)", lineHeight: 1.7 }}
                >
                  The design and the budget move together, so we never fall in love with a building we cannot afford to build.
                </motion.p>
                <KanopiMark style={{ marginBottom: "32px" }} />

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : false}
                  transition={{ duration: 0.75, delay: 0.2, ease }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-8"
                >
                  {aiCapabilities.map((item) => (
                    <div key={item} className="flex items-start gap-3 py-3" style={{ borderBottom: "1px solid var(--v2-rule)" }}>
                      <Check size={16} style={{ color: "var(--v2-neon)", flexShrink: 0, marginTop: 4 }} />
                      <span style={{ fontSize: "1rem", color: "var(--v2-white)" }}>{item}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={inView ? { opacity: 1, y: 0 } : false}
                transition={{ duration: 0.75, delay: 0.25, ease }}
                className="flex flex-col gap-6"
              >
                {/* ROI Card */}
                <div className="p-8 md:p-10" style={{ background: "var(--v2-green)", border: "1px solid rgba(194,184,167,.1)" }}>
                  <span className="v2-headline block text-center" style={{ fontSize: "clamp(3rem, 6vw, 5rem)", color: "var(--v2-white)" }}>
                    14%
                  </span>
                  <span className="v2-label block text-center mt-2" style={{ fontSize: "1rem" }}>
                    AVERAGE TIME SAVINGS
                  </span>
                  <p className="mt-4 text-center" style={{ fontSize: "1rem", color: "rgba(239,236,227,.85)", lineHeight: 1.6 }}>
                    Our AI-powered oversight tools catch issues before they become delays. Clients see an average of 14% time savings across their project timeline through real-time scheduling, automated progress tracking, and proactive risk detection.
                  </p>
                </div>

                {/* Quote Card */}
                <div className="p-8 md:p-10" style={{ background: "rgba(239,236,227,.05)", border: "1px solid var(--v2-rule)" }}>
                  <p style={{ fontStyle: "italic", fontSize: "1rem", color: "var(--v2-white)", lineHeight: 1.7 }}>
                    "Think of it like a cop up the road with a radar gun. Are you gonna speed? The answer is no. That's what an owner's rep does. The contractors aren't going to cut corners because they know they'll get caught. That accountability alone saves you multiples of our fee."
                  </p>
                  <p className="mt-4" style={{ fontSize: "1rem", color: "var(--v2-neon)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                  </p>
                </div>
              </motion.div>
            </div>
          </>
      </div>
    </section>
  );
};

export default AISection;
