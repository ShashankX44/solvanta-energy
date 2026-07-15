function ProjectsPreview() {

  const projects = [
    {
      title: "Residential Solar",
      location: "Anantapur",
      capacity: "10 kW"
    },
    {
      title: "Commercial Solar",
      location: "Kurnool",
      capacity: "120 kW"
    },
    {
      title: "Industrial Solar",
      location: "Hindupur",
      capacity: "500 kW"
    }
  ];

  return (

    <section className="projects-section">

      <p className="section-tag">
        FEATURED PROJECTS
      </p>

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

          <div
            className="project-card"
            key={index}
          >

            <div className="project-image"></div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <div className="project-footer">

                <p>{project.location}</p>

                <span>{project.capacity}</span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default ProjectsPreview;