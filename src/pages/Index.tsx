import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ActivitiesSection from "@/components/home/ActivitiesSection";
import FeaturedTour from "@/components/home/FeaturedTour";
import UpcomingToursSection from "@/components/home/UpcomingToursSection";
import BlogSection from "@/components/home/BlogSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CTASection from "@/components/home/CTASection";
import SafariMapSection from "@/components/home/SafariMapSection";
import Footer from "@/components/home/Footer";

const Index: React.FC = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center">
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <FeaturedTour />
      <UpcomingToursSection />
      <BlogSection />
      <TestimonialSection />
      <CTASection />
      <SafariMapSection />
      <Footer />
    </div>
  );
};

export default Index;
