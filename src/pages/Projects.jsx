import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiZap } from "react-icons/fi";

const projects = [
  {
    title: "Luxury Villa Installation",
    capacity: "5 kW Solar System",
    type: "On-Grid System",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200"
  },
  {
    title: "Commercial Office Complex",
    capacity: "25 kW Solar System",
    type: "Hybrid System",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200"
  },
  {
    title: "Industrial Manufacturing Plant",
    capacity: "250 kW Solar System",
    type: "On-Grid System",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200"
  },
  {
    title: "Residential Apartment Community",
    capacity: "15 kW Solar System",
    type: "On-Grid System",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200"
  },
  {
    title: "Educational Campus",
    capacity: "100 kW Solar System",
    type: "Hybrid System",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200"
  },
  {
    title: "Warehouse & Logistics Center",
    capacity: "500 kW Solar System",
    type: "On-Grid System",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=1200"
  }
];

function Projects() {
  return (
    <>
      <Navbar />

      <section className="page-hero">
        <p className="section-tag">
          OUR PROJECTS
        </p>

        <h1>
          Solar Projects
          <br />
          That Power the Future
        </h1>

        <p className="page-description">
          From luxury residences to large-scale commercial and
          industrial installations, every project reflects our
          commitment to quality, performance and long-term energy
          savings.
        </p>
      </section>

      <section className="projects-section">

        <div className="projects-grid">

          {projects.map((project, index) => (

            <div
              className="project-card"
              key={index}
            >

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-content">

                <span className="project-capacity">
                  <FiZap />
                  {project.capacity}
                </span>

                <h3>
                  {project.title}
                </h3>

                <div className="project-info">

                  <span className="project-type">
                    {project.type}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Projects;