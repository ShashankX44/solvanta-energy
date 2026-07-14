import "../App.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import ProjectsPreview from "../components/ProjectsPreview";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="hero">

      <Navbar />

      <Hero />

      <Stats />

      

      <WhyChoose />

      <ProjectsPreview />

      <CTA />

      <Footer />

    </div>
  );
}

export default Home;