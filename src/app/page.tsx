import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyVertexDigital from "@/components/sections/WhyVertexDigital";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustedBy />
        <ServicesPreview />
        <WhyVertexDigital />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
