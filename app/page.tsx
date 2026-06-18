import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MobileBottomBar from "./components/MobileBottomBar";

const ProbioticsSection = dynamic(() => import("./components/ProbioticsSection"));
const ProductShowcase = dynamic(() => import("./components/ProductShowcase"));
const TrustPillars = dynamic(() => import("./components/TrustPillars"));
const Testimonials = dynamic(() => import("./components/Testimonials"));
const FAQ = dynamic(() => import("./components/FAQ"));
const ContactHub = dynamic(() => import("./components/ContactHub"));
const Footer = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProbioticsSection />
      <ProductShowcase />
      <TrustPillars />
      <Testimonials />
      <FAQ />
      <ContactHub />
      <Footer />
      <MobileBottomBar />
    </main>
  );
}
