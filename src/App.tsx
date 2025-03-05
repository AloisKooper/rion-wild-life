import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Tours from "./pages/Tours";
import Activities from "./pages/Activities";
import WildlifeViewingDetail from "./pages/activities/WildlifeViewing";
import DesertExplorationDetail from "./pages/activities/DesertExploration";
import CulturalExperiencesDetail from "./pages/activities/CulturalExperiences";
import PhotographyToursDetail from "./pages/activities/PhotographyTours";
import OkavangoDeltaDetail from "./pages/activities/OkavangoDelta";
import VictoriaFallsDetail from "./pages/activities/VictoriaFalls";
import BigFiveSafariDetail from "./pages/tours/BigFiveSafari";
import NamibiaHighlightsDetail from "./pages/tours/NamibiaHighlights";
import WalvisbayExcursionDetail from "./pages/tours/WalvisbayExcursion";
import NamwildSafariDetail from "./pages/tours/NamwildSafari";
import NamibiaBotswanaVictoriaFallsDetail from "./pages/tours/NamibiaBotswanaVictoriaFalls";
import TourPage from "./pages/tours/TourPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import OurGuides from "./pages/about/OurGuides";
import Philosophy from "./pages/about/Philosophy";
import Testimonials from "./pages/Testimonials";
import React from "react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/tours" element={<Tours />} />
            
            {/* Activity Detail Pages */}
            <Route path="/activities/wildlife-viewing" element={<WildlifeViewingDetail />} />
            <Route path="/activities/desert-exploration" element={<DesertExplorationDetail />} />
            <Route path="/activities/cultural-experiences" element={<CulturalExperiencesDetail />} />
            <Route path="/activities/photography-tours" element={<PhotographyToursDetail />} />
            <Route path="/activities/okavango-delta" element={<OkavangoDeltaDetail />} />
            <Route path="/activities/victoria-falls" element={<VictoriaFallsDetail />} />
            
            {/* Tour Detail Pages */}
            <Route path="/tours/big-five-safari" element={<BigFiveSafariDetail />} />
            <Route path="/tours/namibia-highlights" element={<NamibiaHighlightsDetail />} />
            <Route path="/tours/walvisbay-excursion" element={<WalvisbayExcursionDetail />} />
            <Route path="/tours/namwild-safari" element={<NamwildSafariDetail />} />
            <Route path="/tours/namibia-botswana-victoria-falls" element={<NamibiaBotswanaVictoriaFallsDetail />} />
            <Route path="/tours/:id" element={<TourPage />} />
            
            {/* Blog Pages */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            {/* About Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/about/our-guides" element={<OurGuides />} />
            <Route path="/about/philosophy" element={<Philosophy />} />
            <Route path="/testimonials" element={<Testimonials />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
