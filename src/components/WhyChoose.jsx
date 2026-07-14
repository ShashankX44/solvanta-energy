function WhyChoose() {
  const features = [
    {
      title: "Premium Quality",
      desc: "We use trusted solar panels, inverters and components for long-lasting performance."
    },
    {
      title: "Expert Installation",
      desc: "Our certified engineers ensure every installation meets the highest standards."
    },
    {
      title: "Government Subsidy",
      desc: "Complete support with subsidy applications and documentation."
    },
    {
      title: "25-Year Warranty",
      desc: "Reliable systems backed by industry-leading performance warranties."
    },
    {
      title: "24/7 Support",
      desc: "Our team is always ready to help with maintenance and technical assistance."
    },
    {
      title: "Smart Monitoring",
      desc: "Track your solar system's performance anytime with intelligent monitoring."
    }
  ];

  return (
    <section className="why-section">

      <p className="section-tag">WHY CHOOSE SOLVANTA</p>

      <h2>
        Built on Quality.
        <br />
        Powered by Trust.
      </h2>

      <div className="why-grid">

        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyChoose;