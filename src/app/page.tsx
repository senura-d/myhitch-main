import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import PlatformBoxes from "@/components/sections/PlatformBoxes";
import PlatformCards from "@/components/sections/PlatformCards";
import SupplyChain from "@/components/sections/SupplyChain";
import FeaturesBento from "@/components/sections/FeaturesBento";
import CommercialIntelligence from "@/components/sections/CommercialIntelligence";
import ShopCategories from "@/components/sections/ShopCategories";
import WhoWeServe from "@/components/sections/WhoWeServe";
import MarketplaceCTA from "@/components/sections/MarketplaceCTA";
import SectionTransition from "@/components/motion/SectionTransition";
import ActionCards from "@/components/sections/ActionCards";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="relative flex-1">
        {/* Section 1 & 2 — no transition wrapper, as-is */}
        <Hero />
        <PlatformBoxes />

        {/* Section 3 — keeps its scroll-driven entry animation */}
        <SectionTransition variant="slide" parallaxStrength={0.06}>
          <PlatformCards />
        </SectionTransition>

        {/* Sections 4+ — no section transition animation (render as-is) */}
        <SupplyChain />
        <ActionCards />
        <CommercialIntelligence />
        <FeaturesBento />
        <ShopCategories />
        <WhoWeServe />
        <MarketplaceCTA />
      </main>
      <Footer />
    </>
  );
}
