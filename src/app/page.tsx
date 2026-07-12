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

        {/* Section 3+ — each gets a scroll-driven entry + exit animation */}
        <SectionTransition variant="slide" parallaxStrength={0.06}>
          <PlatformCards />
        </SectionTransition>

        <SectionTransition variant="lift" parallaxStrength={0.1}>
          <SupplyChain />
        </SectionTransition>

        <SectionTransition variant="iris">
          <ActionCards />
        </SectionTransition>

        <SectionTransition variant="lift" parallaxStrength={0.09}>
          <CommercialIntelligence />
        </SectionTransition>

        <FeaturesBento />

        <SectionTransition variant="iris">
          <ShopCategories />
        </SectionTransition>

        <SectionTransition variant="slide" parallaxStrength={0.06}>
          <WhoWeServe />
        </SectionTransition>

        <SectionTransition variant="lift" parallaxStrength={0.08}>
          <MarketplaceCTA />
        </SectionTransition>
      </main>
      <Footer />
    </>
  );
}
