function ProjectsPreview() {
  const projects = [
    {
      title: "Residential Solar",
      location: "Bangalore",
      capacity: "10 kW"
    },
    {
      title: "Commercial Solar",
      location: "Hyderabad",
      capacity: "120 kW"
    },
    {
      title: "Industrial Solar",
      location: "Chennai",
      capacity: "500 kW"
    }
  ];

  return (
    <section className="projects-section">

      <p className="section-tag">FEATURED PROJECTS</p>

      <h2>
        Trusted Installations.
        <br />
        Proven Results.
      </h2>

      <p className="section-description">
        Explore some of our recent solar installations completed
        across residential, commercial and industrial sectors.
      </p>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-image">
              Solar Project
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.location}</p>

              <span>{project.capacity}</span>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default ProjectsPreview;