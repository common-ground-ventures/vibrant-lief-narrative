import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandPillars from "@/components/BrandPillars";
import CraftSection from "@/components/CraftSection";
import ExcellenceSection from "@/components/ExcellenceSection";
import FeaturedProject from "@/components/FeaturedProject";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Retired first homepage, kept reachable at /v1 only. Never indexed; the canonical home is /. */}
      <Helmet>
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://www.anewlief.com/" />
      </Helmet>
      <Header />
      <main>
        {/* 1. Hero - Brand Identity */}
        <Hero />
        
        {/* 2. What Makes Lïef Different - The Three Pillars */}
        <BrandPillars />
        
        {/* 3. Complete In-House Capability */}
        <CraftSection />
        
        {/* 4. SABS & Excellence (Supporting Role) */}
        <ExcellenceSection />
        
        {/* 5. The Work - Projects as Proof (Supporting Role) */}
        <FeaturedProject />
        
        {/* 6. Contact */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
