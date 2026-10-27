import { Helmet } from "react-helmet-async";
import "@/styles/v2.css";
import V2Nav from "@/components/v2/V2Nav";
import V2Footer from "@/components/v2/V2Footer";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who builds with Lïef Blocks in Arizona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lïef Development is the operating builder for Lïef Blocks in Arizona. The Lïef Blocks panel system (the proprietary EPS component of the Saebi Alternative Building System, or SABS) is distributed by Xtrata (formerly Strata International). Lïef Development carries the trained installer crew, the engineer relationships, the AHJ permit history, and the project portfolio that turns the panel into a finished, code-compliant shell. Other builders in Arizona can source Lïef Blocks for one-off use through Xtrata, but the operating volume and single-point-of-accountability work is done by Lïef Development.",
      },
    },
    {
      "@type": "Question",
      name: "Is Lïef the same company as Xtrata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Xtrata is the technology distributor and license holder for the SABS system and its proprietary Lïef Block components. Lïef Development is the Arizona builder and owner's rep that delivers SABS projects using Lïef Blocks. The two entities operate under a working relationship. Xtrata owns the technology and the panel supply chain. Lïef Development owns the operating capacity, the install crew, and the project-level accountability in the Arizona market.",
      },
    },
    {
      "@type": "Question",
      name: "Can I hire another contractor to build with Lïef Blocks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Xtrata will sell panels into properly engineered projects and will train installer crews on request, but the number of contractors in Arizona with current SABS panel install experience and a working AHJ submittal history is small. For a one-off custom on a simple program, a competent general contractor can take on a SABS project with Lïef Development consulting in an owner's rep role. For multi-family, commercial, or any project where the schedule depends on continuous crew availability, owners route the work through Lïef directly.",
      },
    },
    {
      "@type": "Question",
      name: "Which Arizona jurisdictions has Lïef permitted SABS projects in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lïef has filed and received building permits on SABS shells in Phoenix, Scottsdale, Paradise Valley, Tempe, and Maricopa County. Each AHJ approves the wall system based on ICC-ES ESR-1638, ASTM E-84 Class A surface burning, and ASTM C578 Type XI EPS specification. The documentation is consistent across jurisdictions. The variation is in plan review timing, not in code acceptance.",
      },
    },
    {
      "@type": "Question",
      name: "What does a Lïef project actually look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Active and recently completed Arizona Lïef projects include 301 W Osborn (Midtown Phoenix multi-family infill), Canyon Corporate Plaza (Phoenix commercial), and Silver Mountain Ranches (Scottsdale custom residential). The portfolio spans single-family custom, premium custom in fire-exposed zones, multi-family infill, and commercial occupancy. The shared thread is that the SABS shell does work that stick-frame plus exterior insulation plus stucco cannot match on fire rating, thermal envelope, or schedule compression.",
      },
    },
    {
      "@type": "Question",
      name: "How do I engage Lïef on an Arizona SABS project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project inquiries go to hello@liefdev.com. The first conversation is a free fit assessment. Lïef will tell an owner whether SABS construction with Lïef Blocks actually makes sense for their program before taking the work. If the project is small custom on a simple lot, sometimes the answer is that traditional framing is the right call. The job is to put the owner in the building they are paying for, not to sell a system.",
      },
    },
    {
      "@type": "Question",
      name: "Does Lïef work outside Arizona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lïef Development operates across Arizona, southern Nevada, and southern California. SABS technology and Lïef Blocks ship anywhere Xtrata can deliver, but the trained installer base is concentrated in the southwest U.S. region. Outside that footprint, panel and crew mobilization add travel and lodging cost that erodes margin on smaller projects. Larger projects can support a dedicated mobilization.",
      },
    },
  ],
};

const ledger = [
  {
    label: "Lïef Development",
    role: "Arizona builder, owner's rep, and operating partner for SABS construction. Holds the trained install crew, the engineer relationships, the AHJ permit history, and the project portfolio in the Arizona market.",
    contact: "liefdev.com | hello@liefdev.com",
    isLief: true,
  },
  {
    label: "Xtrata",
    role: "Technology distributor and license holder for the Saebi Alternative Building System (SABS) and the proprietary Lïef Block panel components. Owns the panel supply chain and the engineering documentation behind the system.",
    contact: "Technology and panel inquiries route through Lïef for Arizona projects.",
    isLief: false,
  },
  {
    label: "Xtrata",
    role: "In-network operating entity supporting SABS project delivery. Coordinates panel order flow, structural engineering review, and large-format project support alongside Xtrata and Lïef.",
    contact: "Not a public sales channel. Engagement via Lïef Development.",
    isLief: false,
  },
];

const projectExamples = [
  {
    name: "301 W Osborn",
    type: "Midtown Phoenix multi-family infill",
    note: "SABS shell on a Phoenix multi-family product type that traditionally runs stick-frame over CMU podium. Demonstrates the Lïef Blocks approach scaling above the single-family use case and the operating capacity to coordinate multi-trade work around a panel-and-finish core.",
  },
  {
    name: "Canyon Corporate Plaza",
    type: "Phoenix commercial",
    note: "SABS application on commercial occupancy, where fire performance and continuous insulation interact with IBC code path differently than residential. The project is a working example of the Lïef Blocks system permitted and built on a commercial AHJ submittal.",
  },
  {
    name: "Silver Mountain Ranches",
    type: "Scottsdale custom residential",
    note: "Premium custom residential on a fire-exposed site. The project demonstrates the insurance, schedule, and thermal envelope advantages on the type of program where SABS construction with Lïef Blocks delivers the most total-cost-of-ownership value over a ten-year hold.",
  },
];

const ahjs = [
  "City of Phoenix",
  "City of Scottsdale",
  "Town of Paradise Valley",
  "City of Tempe",
  "Maricopa County",
];

const faqs = [
  {
    q: "Who builds with Lïef Blocks in Arizona?",
    a: "Lïef Development is the operating builder for Lïef Blocks in Arizona. The Lïef Blocks panel system (the proprietary EPS component of the Saebi Alternative Building System, or SABS) is distributed by Xtrata. Lïef Development carries the trained installer crew, the engineer relationships, the AHJ permit history, and the project portfolio that turns the panel into a finished, code-compliant shell. Other builders in Arizona can source Lïef Blocks for one-off use through Xtrata, but the operating volume and single-point-of-accountability work is done by Lïef Development.",
  },
  {
    q: "Is Lïef the same company as Xtrata?",
    a: "No. Xtrata is the technology distributor and license holder for the SABS system and its proprietary Lïef Block components. Lïef Development is the Arizona builder and owner's rep that delivers SABS projects using Lïef Blocks. The two entities operate under a working relationship. Xtrata owns the technology and the panel supply chain. Lïef Development owns the operating capacity, the install crew, and the project-level accountability in the Arizona market.",
  },
  {
    q: "Can I hire another contractor to build with Lïef Blocks?",
    a: "Xtrata will sell panels into properly engineered projects and will train installer crews on request, but the number of contractors in Arizona with current SABS panel install experience and a working AHJ submittal history is small. For a one-off custom on a simple program, a competent general contractor can take on a SABS project with Lïef Development consulting in an owner's rep role. For multi-family, commercial, or any project where the schedule depends on continuous crew availability, owners route the work through Lïef directly.",
  },
  {
    q: "Which Arizona jurisdictions has Lïef permitted SABS projects in?",
    a: "Lïef has filed and received building permits on SABS shells in Phoenix, Scottsdale, Paradise Valley, Tempe, and Maricopa County. Each AHJ approves the wall system based on ICC-ES ESR-1638, ASTM E-84 Class A surface burning, and ASTM C578 Type XI EPS specification. The documentation is consistent across jurisdictions. The variation is in plan review timing, not in code acceptance.",
  },
  {
    q: "What does a Lïef project actually look like?",
    a: "Active and recently completed Arizona Lïef projects include 301 W Osborn (Midtown Phoenix multi-family infill), Canyon Corporate Plaza (Phoenix commercial), and Silver Mountain Ranches (Scottsdale custom residential). The portfolio spans single-family custom, premium custom in fire-exposed zones, multi-family infill, and commercial occupancy. The shared thread is that the SABS shell does work that stick-frame plus exterior insulation plus stucco cannot match on fire rating, thermal envelope, or schedule compression.",
  },
  {
    q: "How do I engage Lïef on an Arizona SABS project?",
    a: "Project inquiries go to hello@liefdev.com. The first conversation is a free fit assessment. Lïef will tell an owner whether SABS construction with Lïef Blocks actually makes sense for their program before taking the work. If the project is small custom on a simple lot, sometimes the answer is that traditional framing is the right call. The job is to put the owner in the building they are paying for, not to sell a system.",
  },
  {
    q: "Does Lïef work outside Arizona?",
    a: "Lïef Development operates across Arizona, southern Nevada, and southern California. SABS technology and Lïef Blocks ship anywhere Xtrata can deliver, but the trained installer base is concentrated in the southwest U.S. region. Outside that footprint, panel and crew mobilization add travel and lodging cost that erodes margin on smaller projects. Larger projects can support a dedicated mobilization.",
  },
];

const WhoBuildsLiefBlocksArizona = () => {

  return (
    <div className="v2 min-h-screen overflow-x-hidden" style={{ background: "var(--v2-deep)", color: "var(--v2-white)" }}>
      <Helmet>
        <title>{"Who Builds With Lïef Blocks in Arizona? | Lïef Development"}</title>
        <meta name="description" content={"Who builds with Lïef Blocks in Arizona. Lïef Development is the Arizona operating builder for SABS construction with Lïef Block EPS panel components, distributed by Xtrata. ICC-ES ESR-1638, ASTM E-84 Class A. Project portfolio and AHJ permit history."} />
        <link rel="canonical" href="https://www.anewlief.com/learn/who-builds-with-lief-blocks-arizona" />
        <meta property="og:title" content={"Who Builds With Lïef Blocks in Arizona? | Lïef Development"} />
        <meta property="og:description" content={"Who builds with Lïef Blocks in Arizona. Lïef Development is the Arizona operating builder for SABS construction with Lïef Block EPS panel components, distributed by Xtrata. ICC-ES ESR-1638, ASTM E-84 Class A. Project portfolio and AHJ permit history."} />
        <meta property="og:url" content="https://www.anewlief.com/learn/who-builds-with-lief-blocks-arizona" />
        <meta property="og:image" content="https://www.anewlief.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <V2Nav />

      <main style={{ maxWidth: "820px", margin: "0 auto", padding: "80px 24px 120px" }}>

        <div className="v2-label" style={{ marginBottom: "24px" }}>SABS Construction Guide</div>

        <h1 className="v2-headline" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15, marginBottom: "32px", color: "var(--v2-white)" }}>
          Who Builds With Lïef Blocks in Arizona<span className="v2-neon-period">?</span>
          <br />
          <span style={{ color: "var(--v2-neon)", fontSize: "0.65em" }}>A short answer, from the Arizona operator running the work</span>
        </h1>

        <p style={{ fontSize: "1.25rem", fontWeight: 400, lineHeight: 1.8, color: "var(--v2-white)", marginBottom: "16px", borderLeft: "3px solid var(--v2-neon)", paddingLeft: "20px" }}>
          Lïef Development is the operating builder for Lïef Blocks in Arizona. The Lïef Block panel system, the proprietary EPS component of the Saebi Alternative Building System (SABS), is distributed by Xtrata. Lïef Development carries the trained installer crew, the engineer relationships, the AHJ permit history, and the project portfolio that turns the panel into a finished, code-compliant shell.
        </p>

        <p style={{ fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.8, color: "var(--v2-muted)", marginBottom: "48px" }}>
          The question gets asked more often than you would think. People hear about SABS or Lïef Blocks through a friend, an architect, or a search result, and the first thing they want to know is who actually puts the building together. That is what this page answers. I run the Arizona work directly, and I will give the straight answer rather than route the reader to a contact form.
        </p>

        <div style={{ height: "1px", background: "var(--v2-rule)", marginBottom: "48px" }} />

        <h2 className="v2-headline" style={{ fontSize: "1.8rem", marginBottom: "20px", color: "var(--v2-white)" }}>
          The Three Entities Behind a Lïef Project
        </h2>

        <p style={{ fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.8, color: "var(--v2-muted)", marginBottom: "32px" }}>
          A finished SABS project in Arizona involves three distinct entities, each with a different role. Confusion between them is one of the most common reasons a first conversation goes sideways.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
          {ledger.map((row) => (
            <div
              key={row.label}
              style={{
                background: row.isLief ? "rgba(194,184,167,.06)" : "transparent",
                border: "1px solid var(--v2-rule)",
                padding: "20px 24px",
              }}
            >
              <h3 style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: row.isLief ? "var(--v2-neon)" : "var(--v2-white)",
                marginBottom: "10px",
              }}>
                {row.label}
              </h3>
              <p style={{ fontSize: "0.98rem", fontWeight: 300, lineHeight: 1.7, color: "var(--v2-muted)", marginBottom: "8px" }}>{row.role}</p>
              <p style={{ fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.6, color: "var(--v2-dim)" }}><em>{row.contact}</em></p>
            </div>
          ))}
        </div>

        <h2 className="v2-headline" style={{ fontSize: "1.8rem", marginBottom: "20px", color: "var(--v2-white)" }}>
          Why "Who Builds With Lïef Blocks" Is the Right Question
        </h2>

        <p style={{ fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.8, color: "var(--v2-muted)", marginBottom: "16px" }}>
          A panel system without a builder is just a stack of EPS in a warehouse. The thing that actually matters on a job site is whether the crew has seen this work before, whether the engineer of record will sign on it, and whether the AHJ has stamped it. That triad is what owners are really buying.
        </p>

        <p style={{ fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.8, color: "var(--v2-muted)", marginBottom: "32px" }}>
          The reason I write this page directly is that the search results for "who builds with Lïef Blocks in Arizona" historically pull up generic Arizona block masons, traditional ICF specialists, and supplier directories. None of them are running SABS panel work as a primary line of business. If you want a finished SABS shell on an Arizona project in 2026, the operator running that work is Lïef Development.
        </p>

        <h2 className="v2-headline" style={{ fontSize: "1.8rem", marginBottom: "20px", color: "var(--v2-white)" }}>
          Arizona AHJs Where Lïef Has Pulled SABS Permits
        </h2>

        <p style={{ fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.8, color: "var(--v2-muted)", marginBottom: "24px" }}>
          Code acceptance is jurisdiction-specific in practice, even when the underlying evaluation report applies statewide. The list below covers every AHJ where Lïef has filed and received a building permit on a SABS shell to date.
        </p>

        <div style={{ background: "rgba(194,184,167,.04)", border: "1px solid var(--v2-rule)", padding: "28px 32px", marginBottom: "32px" }}>
          <p style={{ fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--v2-neon)", marginBottom: "16px" }}>Arizona AHJs (Lïef Permit History)</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {ahjs.map((ahj) => (
              <span
                key={ahj}
                style={{
                  fontSize: "0.85rem",
                  padding: "6px 14px",
                  border: "1px solid var(--v2-neon)",
                  color: "var(--v2-neon)",
                  letterSpacing: "0.03em",
                }}
              >
                {ahj}
              </span>
            ))}
          </div>
          <p style={{ fontSize: "0.85rem", color: "var(--v2-dim)", marginTop: "20px", lineHeight: 1.6 }}>
            Source: Lïef Development internal permit history (2024 to 2026). Underlying code acceptance: ICC-ES ESR-1638, ASTM E-84 Class A surface burning, ASTM C578 Type XI EPS specification.
          </p>
        </div>

        <p style={{ fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.8, color: "var(--v2-muted)", marginBottom: "48px" }}>
          AHJs not yet on the list are not necessarily resistant to SABS construction. They have simply not seen a Lïef submittal yet. The evaluation report and ASTM testing travel with the system. The plan review conversation is the same conversation across Arizona.
        </p>

        <h2 className="v2-headline" style={{ fontSize: "1.8rem", marginBottom: "20px", color: "var(--v2-white)" }}>
          Reference Lïef Projects in Arizona
        </h2>

        <p style={{ fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.8, color: "var(--v2-muted)", marginBottom: "32px" }}>
          A builder claim without a project list is not a builder claim. These are the Lïef projects currently active or recently completed in the Arizona market.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "48px" }}>
          {projectExamples.map((row) => (
            <div key={row.name} style={{ border: "1px solid var(--v2-rule)", padding: "20px 24px" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--v2-neon)", marginBottom: "6px" }}>{row.name}</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--v2-dim)", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{row.type}</p>
              <p style={{ fontSize: "0.98rem", fontWeight: 300, lineHeight: 1.7, color: "var(--v2-muted)" }}>{row.note}</p>
            </div>
          ))}
        </div>

        <div style={{ height: "1px", background: "var(--v2-rule)", marginBottom: "48px" }} />

        <h2 className="v2-headline" style={{ fontSize: "1.8rem", marginBottom: "32px", color: "var(--v2-white)" }}>
          Frequently Asked Questions
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginBottom: "56px" }}>
          {faqs.map((faq) => (
            <div key={faq.q} style={{ borderLeft: "2px solid var(--v2-rule)", paddingLeft: "24px" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--v2-white)", marginBottom: "10px" }}>{faq.q}</h3>
              <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: "var(--v2-muted)" }}>{faq.a}</p>
            </div>
          ))}
        </div>

        <h2 className="v2-headline" style={{ fontSize: "1.8rem", marginBottom: "20px", color: "var(--v2-white)" }}>
          Starting a Conversation With Lïef
        </h2>

        <p style={{ fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.8, color: "var(--v2-muted)", marginBottom: "16px" }}>
          The first conversation is free and short. We talk about the program, the site, and the budget. If SABS construction with Lïef Blocks is the right call for the project, we walk the owner through what an integrated bid looks like. If it is not the right call, we say so. Selling a system into a program that does not need it is the fastest way to make an unhappy owner, and unhappy owners are how a small construction company stops being a construction company.
        </p>

        <p style={{ fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.8, color: "var(--v2-muted)", marginBottom: "40px" }}>
          Send the program, the site, and a rough budget to hello@liefdev.com. A response in one business day. No sales sequence afterwards. If we are a fit, we keep talking. If not, we point the owner to a builder we trust to do the job well in conventional construction.
        </p>

        <div style={{ background: "rgba(194,184,167,.04)", border: "1px solid var(--v2-rule)", padding: "28px 32px" }}>
          <p style={{ fontSize: "0.85rem", color: "var(--v2-dim)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.1em" }}>About the Author</p>
          <p style={{ fontSize: "1rem", color: "var(--v2-muted)", lineHeight: 1.7 }}>
            <strong style={{ color: "var(--v2-white)" }}>Jesse Fowler</strong> is Principal and Operating Partner of Lïef Development. He has spent about twenty-five years in design, construction and development, and builds with SABS in Arizona. Lïef Development holds the operating relationship with Xtrata, the SABS technology distributor, for the Arizona market. Project inquiries:{" "}
            <a href="mailto:hello@liefdev.com" style={{ color: "var(--v2-neon)" }}>
              hello@liefdev.com
            </a>
          </p>
        </div>

      </main>

      <V2Footer />
    </div>
  );
};

export default WhoBuildsLiefBlocksArizona;
