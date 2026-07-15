import "../App.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyChoose from "../components/WhyChoose";
import ProjectsPreview from "../components/ProjectsPreview";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
    <>

      <div className="hero">

        <Navbar />

        <Hero />

        <Stats />

        <WhyChoose />

        <ProjectsPreview />

        <CTA />

        <WhatsAppButton />

      </div>

      <Footer />

    </>
  );
}

export default Home;