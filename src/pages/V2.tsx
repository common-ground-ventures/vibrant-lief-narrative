import "@/styles/v2.css";
import { Helmet } from "react-helmet-async";
import V2Nav from "@/components/v2/V2Nav";
import V2Hero from "@/components/v2/V2Hero";
import V2Ticker from "@/components/v2/V2Ticker";
import V2Model from "@/components/v2/V2Model";
import V2Disciplines from "@/components/v2/V2Disciplines";
import V2FAQ from "@/components/v2/V2FAQ";
import V2CTA from "@/components/v2/V2CTA";
import V2Footer from "@/components/v2/V2Footer";

/* FAQ schema lives on the home page only: it matches the FAQ section here. */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes Lïef Development different from other builders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lïef Development is vertically integrated. Architecture, engineering, construction, and brand creative all operate under one roof with over 300 skilled tradesmen to execute. What that means for you is fewer delays, lower costs, and a finished product that actually looks like what you envisioned. When builders outsource key phases, timelines slip, budgets inflate, and the original vision gets diluted. With 80% in-house capability, Lïef controls the schedule and the quality. The team that designs your project is the same team that engineers it, builds it, and brings it to market."
      }
    },
    {
      "@type": "Question",
      "name": "What types of projects does Lïef Development take on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "From condos to customs to communities. Lïef has delivered $500M+ in projects across the full range of premium construction: custom estates, multi-family developments, boutique communities, commercial, hospitality, mixed-use, and adaptive reuse. The same integrated team and the same standard of precision applies whether it is a 10,000 square foot residence or a 200-unit development."
      }
    },
    {
      "@type": "Question",
      "name": "What is SABS construction technology?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SABS stands for Saebi Alternative Building System, a patented technology that uses EPS foam panels with a high-strength cementitious coating called SABSCRETE to create a single monolithic structure. We also think of it as Safe, Architectural, Balanced, and Sustainable. For you, that means 0% flame spread, 250 MPH wind resistance, R-75 to R-100 insulation, and complete mold and termite immunity. It also means 15-20% cost savings and faster build times compared to traditional methods. Lïef is the leading SABS builder in Arizona, and we offer it alongside traditional stick framing and other building methods so you can choose the solution that best fits your project."
      }
    },
    {
      "@type": "Question",
      "name": "How does Lïef approach design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every project starts with a problem to solve. Not a style to copy. We start with the needs of the project and the story it needs to tell. From there, our design team led by Scott Meiers with 50+ years across every building type translates that into architecture, and MOR Studio grounds it in science. How people actually live, work, and move through spaces. We bridge the gap between inspiration and execution with evidence. The result is considered design: built on research, not assumption. That process has produced everything from urban residences to desert modern estates to commercial spaces that perform."
      }
    },
    {
      "@type": "Question",
      "name": "Who is behind Lïef Development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lïef was built by people who have spent their careers doing the work, not talking about it. Jesse Fowler and Jon Armstrong have delivered $500M+ in projects between them, and that experience shows in how they manage risk, control costs, and keep builds on schedule. Scott Meiers has been designing buildings for over 50 years. There is no building type or challenge he has not worked through, which means fewer surprises and faster solutions when complexity shows up. Jimmy Khounlavong spent 16 years at Nike shaping some of the most recognized product lines alongside other leading brands before bringing that discipline to how Lïef thinks about brand, story, and market position. It is the piece most builders miss. The team is also backed by general counsel, investor relations, and a workforce of 300+ skilled tradesmen. That means every decision on your project is informed by decades of experience at the highest level."
      }
    }
  ]
};

const V2 = () => {
  return (
    <>
    <Helmet>
      <title>L&#239;ef Development | Arizona's Premier Luxury Home Builder</title>
      <meta name="description" content="Crafting architectural masterpieces across Arizona. Luxury custom homes, adaptive reuse, and commercial developments with proprietary SABS technology." />
      <link rel="canonical" href="https://www.anewlief.com/" />
      <meta property="og:title" content="L&#239;ef Development | Arizona's Premier Luxury Home Builder" />
      <meta property="og:description" content="Crafting architectural masterpieces across Arizona. Luxury custom homes, adaptive reuse, and commercial developments with proprietary SABS technology." />
      <meta property="og:url" content="https://www.anewlief.com/" />
      <meta property="og:image" content="https://www.anewlief.com/og-image.jpg" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <div className="v2 min-h-screen overflow-x-hidden">
      <V2Nav />
      <h1 className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
        Lïef Development - Arizona's Premier Luxury Home Builder
      </h1>
      <main>
        <V2Hero />
        <V2Ticker />
        <V2Model />
        <V2Disciplines />
        <V2FAQ />
        <V2CTA />
      </main>
      <V2Footer />
    </div>
    </>
  );
};

export default V2;
