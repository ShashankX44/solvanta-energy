import "../App.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";

function Home() {
  return (
    <div className="hero">

      <Navbar />

      <Hero />

      <Stats />

      <Services />

    </div>
  );
}

export default Home;