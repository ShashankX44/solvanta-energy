import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import {
  FiTarget,
  FiEye,
  FiAward,
  FiUsers,
  FiZap,
  FiShield
} from "react-icons/fi";

function About() {

  const features = [

    {
      icon: <FiTarget />,
      title: "Our Mission",
      text: "Deliver reliable, affordable and sustainable solar energy solutions that empower homes, businesses and industries."
    },

    {
      icon: <FiEye />,
      title: "Our Vision",
      text: "To become one of India's most trusted renewable energy companies through innovation and customer satisfaction."
    },

    {
      icon: <FiAward />,
      title: "Quality",
      text: "Every installation is completed using premium components and industry best practices."
    },

    {
      icon: <FiUsers />,
      title: "Customer First",
      text: "We believe long-term relationships are built through transparency, service and trust."
    },

    {
      icon: <FiZap />,
      title: "Innovation",
      text: "Smart solar solutions designed for maximum efficiency and long-term performance."
    },

    {
      icon: <FiShield />,
      title: "Reliability",
      text: "End-to-end support from consultation to installation and after-sales service."
    }

  ];

  return (

    <>

      <Navbar />

      <section className="page-hero">

        <p className="section-tag">
          ABOUT SOLVANTA
        </p>

        <h1>

          Powering a
          <br />
          Sustainable Tomorrow

        </h1>

        <p className="page-description">

          Solvanta Energy delivers premium solar solutions
          for residential, commercial and industrial customers
          with a strong focus on quality, innovation and
          long-term value.

        </p>

      </section>

      <section className="about-story">

        <div className="about-left">

          <h2>

            Building a Greener Future

          </h2>

          <p>

            At Solvanta Energy, we believe clean energy should
            be accessible, reliable and built to last. Every
            project is carefully designed to maximize energy
            production, reduce electricity costs and contribute
            to a sustainable future.

          </p>

          <p>

            Our experienced team focuses on delivering premium
            engineering, transparent communication and complete
            customer satisfaction from consultation to final
            installation.

          </p>

        </div>

        <div className="about-right">

  <div className="about-stat-card">

    <h2>200+</h2>

    <p>Projects Completed</p>

  </div>

  <div className="about-stat-card">

    <h2>25+</h2>

    <p>Years Panel Warranty</p>

  </div>

  <div className="about-stat-card">

    <h2>99%</h2>

    <p>Customer Satisfaction</p>

  </div>

  <div className="about-stat-card">

    <h2>100%</h2>

    <p>Clean Energy Focus</p>

  </div>

</div>

      </section>

      <section className="values-section">

        <h2>

          Why Choose Solvanta

        </h2>

        <div className="values-grid">

          {features.map((item,index)=>(

            <div
              className="value-card"
              key={index}
            >

              <div className="value-icon">

                {item.icon}

              </div>

              <h3>

                {item.title}

              </h3>

              <p>

                {item.text}

              </p>

            </div>

          ))}

        </div>

      </section>
      <WhatsAppButton />

      <Footer />

    </>

  );

}

export default About;