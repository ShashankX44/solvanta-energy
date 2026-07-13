function Services() {
  const services = [
    {
      title: "Residential Solar",
      desc: "Efficient rooftop solar systems designed for modern homes."
    },
    {
      title: "Commercial Solar",
      desc: "Reduce electricity costs with scalable business solutions."
    },
    {
      title: "Industrial Solar",
      desc: "High-capacity solar installations for manufacturing plants."
    },
    {
      title: "Hybrid Solar",
      desc: "Reliable power with battery backup and grid connectivity."
    },
    {
      title: "EV Charging",
      desc: "Future-ready charging stations powered by clean energy."
    },
    {
      title: "Maintenance",
      desc: "Professional monitoring and maintenance for maximum efficiency."
    }
  ];

  return (
    <section className="services-section">

      <p className="section-tag">OUR SOLUTIONS</p>

      <h2>
        Solar Solutions
        <br />
        For Every Need.
      </h2>

      <p className="section-description">
        From residential rooftops to industrial-scale installations,
        Solvanta delivers reliable and sustainable solar solutions.
      </p>

      <div className="services-grid">

        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>

            <span>Learn More →</span>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;