import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductShowcase from "./components/ProductShowcase";
import TrustPillars from "./components/TrustPillars";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactHub from "./components/ContactHub";
import Footer from "./components/Footer";
import MobileBottomBar from "./components/MobileBottomBar";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
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
