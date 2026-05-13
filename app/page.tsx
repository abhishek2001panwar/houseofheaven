import Image from "next/image";
import Hero from "./components/sections/hero";
import LuxuryNavbar from "./components/navbar";
import MomentsSection from "./components/sections/about";
import Story from "./components/sections/story";
import PortfolioSection from "./components/sections/portfolio";
import DraggableGallery from "./components/sections/gallery";
import LuxuryGallery from "./components/sections/gallery";
import ContactSection from "./components/sections/contact";
import Footer from "./components/sections/footer";
import CoupleShowcase from "./components/sections/couple";
import PortfolioHighlights from "./components/sections/highlight";
import HighlightsCarousel from "./components/sections/carousel";

export default function Home() {
  return (
    <>
    <LuxuryNavbar />
    <Hero />
   <MomentsSection />
   <Story />
  <PortfolioSection />
  <CoupleShowcase />
  <LuxuryGallery />
  <HighlightsCarousel />
  {/* <PortfolioHighlights /> */}
  <ContactSection />
  <Footer />
    
    </>
  );
}
