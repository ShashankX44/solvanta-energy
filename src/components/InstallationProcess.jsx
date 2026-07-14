function InstallationProcess() {

  const steps = [
    "Free Site Survey",
    "Custom System Design",
    "Government Documentation",
    "Professional Installation",
    "Testing & Commissioning",
    "After Sales Support"
  ];

  return (
    <section className="process-section">

      <p className="section-tag">
        INSTALLATION PROCESS
      </p>

      <h2>
        Your Solar Journey
      </h2>

      <p className="section-description">
        We manage every step from consultation to installation,
        ensuring a smooth and hassle-free solar experience.
      </p>

      <div className="timeline">

        {steps.map((step, index) => (

          <div className="timeline-item" key={index}>

            <div className="timeline-circle">
              {index + 1}
            </div>

            <h3>{step}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default InstallationProcess;