import "@/styles/v2.css";
import { Helmet } from "react-helmet-async";
import V2Nav from "@/components/v2/V2Nav";
import V2Footer from "@/components/v2/V2Footer";

/* Any address the site doesn't know. Same nav, footer and section treatment as
   every other page; noindex so search engines never list it. */
const NotFound = () => (
  <>
    <Helmet>
      <title>Page Not Found | L&#239;ef Development</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <div className="v2 min-h-screen overflow-x-hidden">
      <V2Nav />
      <main>
        <section className="relative py-28" style={{ background: "var(--v2-deep)" }}>
          <div className="v2-ghost-text hidden lg:block top-32 right-8" style={{ fontSize: "min(14vw, 220px)", lineHeight: 1 }}>404</div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="v2-label mb-6">404</div>
            <h1 className="v2-headline mb-8" style={{ fontSize: "clamp(2.6rem, 4.6vw, 4.4rem)", lineHeight: 1.04, color: "var(--v2-white)" }}>
              PAGE NOT FOUND<span className="v2-neon-period">.</span>
            </h1>
            <a
              href="/"
              className="inline-block transition-all duration-300"
              style={{
                fontFamily: "var(--v2-font-body)", fontSize: "clamp(1rem, 2.5vw, 1.25rem)", textTransform: "uppercase",
                letterSpacing: "0.14em", fontWeight: 600, background: "var(--v2-btn-bg)",
                color: "var(--v2-btn-fg)", border: "1px solid var(--v2-loggia)", padding: "10px 24px", textDecoration: "none",
              }}
            >
              Return to Home
            </a>
          </div>
        </section>
      </main>
      <V2Footer />
    </div>
  </>
);

export default NotFound;
