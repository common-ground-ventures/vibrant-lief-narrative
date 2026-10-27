import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import V2 from "./pages/V2";
import LiefBlocks from "./pages/LiefBlocks";
import ProjectsPage from "./pages/ProjectsPage";
import TeamPage from "./pages/TeamPage";
import AIPage from "./pages/AIPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import WhatIsSABS from "./pages/WhatIsSABS";
import SabsVsIcf from "./pages/SabsVsIcf";
import BestIcfAlternativeFire from "./pages/BestIcfAlternativeFire";
import SabsCostVsFraming from "./pages/SabsCostVsFraming";
import ModularEpsPanelPhoenix from "./pages/ModularEpsPanelPhoenix";
import WhoBuildsLiefBlocksArizona from "./pages/WhoBuildsLiefBlocksArizona";
import AlternativeConstructionMethodsArizona from "./pages/AlternativeConstructionMethodsArizona";
import PhoenixEpsPanelPermits from "./pages/PhoenixEpsPanelPermits";
import ArizonaFireResistantWallSystems from "./pages/ArizonaFireResistantWallSystems";
import WhatAreLiefBlocks from "./pages/WhatAreLiefBlocks";
import SabsConstructionEcosystem from "./pages/SabsConstructionEcosystem";
import { ContactModalProvider } from "@/contexts/ContactModalContext";
import ContactModal from "@/components/v2/ContactModal";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ContactModalProvider>
          <Routes>
            <Route path="/" element={<V2 />} />
            <Route path="/v1" element={<Index />} />
            <Route path="/about" element={<Navigate to="/team" replace />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/sabs" element={<LiefBlocks />} />
            <Route path="/liefblocks" element={<Navigate to="/sabs" replace />} />
            <Route path="/ai" element={<AIPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/learn/what-is-sabs-construction" element={<WhatIsSABS />} />
            <Route path="/learn/sabs-vs-icf" element={<SabsVsIcf />} />
            <Route path="/learn/best-icf-alternative-fire-resistant" element={<BestIcfAlternativeFire />} />
            <Route path="/learn/sabs-cost-vs-traditional-framing" element={<SabsCostVsFraming />} />
            <Route path="/learn/modular-eps-panel-construction-phoenix" element={<ModularEpsPanelPhoenix />} />
            <Route path="/learn/who-builds-with-lief-blocks-arizona" element={<WhoBuildsLiefBlocksArizona />} />
            <Route path="/learn/alternative-construction-methods-arizona-builders" element={<AlternativeConstructionMethodsArizona />} />
            <Route path="/learn/phoenix-eps-panel-permits-ahj" element={<PhoenixEpsPanelPermits />} />
            <Route path="/learn/arizona-fire-resistant-wall-systems-comparison" element={<ArizonaFireResistantWallSystems />} />
            <Route path="/learn/what-are-lief-blocks" element={<WhatAreLiefBlocks />} />
            <Route path="/learn/sabs-construction-who-builds-validates-deploys" element={<SabsConstructionEcosystem />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ContactModal />
        </ContactModalProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
