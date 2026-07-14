import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InstallationProcess from "../components/InstallationProcess";
import FAQ from "../components/FAQ";
import WhatsAppButton from "../components/WhatsAppButton";
import {
  FiHome,
  FiBriefcase,
  FiSettings,
  FiBatteryCharging,
  FiZap,
  FiTool
} from "react-icons/fi";

function Solutions() {

  const solutions = [
    {
      icon: <FiHome />,
      title: "Residential Solar",
      desc: "High-efficiency rooftop solar systems designed for modern homes.",
      features: [
        "25-Year Performance Warranty",
        "Government Subsidy Support",
        "Professional Installation"
      ]
    },
    {
      icon: <FiBriefcase />,
      title: "Commercial Solar",
      desc: "Reduce electricity costs with scalable commercial solar solutions.",
      features: [
        "Lower Operating Costs",
        "Fast ROI",
        "Energy Independence"
      ]
    },
    {
      icon: <FiSettings />,
      title: "Industrial Solar",
      desc: "Large-scale solar systems engineered for industrial facilities.",
      features: [
        "High Capacity Systems",
        "Custom Design",
        "Long-Term Reliability"
      ]
    },
    {
      icon: <FiBatteryCharging />,
      title: "Hybrid Solar",
      desc: "Battery backup with uninterrupted clean energy.",
      features: [
        "Battery Storage",
        "Backup Power",
        "Grid Integration"
      ]
    },
    {
      icon: <FiZap />,
      title: "EV Charging",
      desc: "Smart EV charging infrastructure powered by solar.",
      features: [
        "Fast Charging",
        "Future Ready",
        "Clean Energy"
      ]
    },
    {
      icon: <FiTool />,
      title: "Maintenance & AMC",
      desc: "Complete monitoring and annual maintenance services.",
      features: [
        "24/7 Support",
        "Performance Monitoring",
        "Preventive Maintenance"
      ]
    }
  ];

  return (
    <>
      <Navbar />

      <section className="page-hero">

        <p className="section-tag">OUR SOLUTIONS</p>

        <h1>
          Powering Homes,
          <br />
          Businesses &
          <br />
          Industries.
        </h1>

        <p className="page-description">
          Premium solar solutions engineered for long-term savings,
          sustainability and energy independence.
        </p>

      </section>

      <section className="solutions-grid-page">

        {solutions.map((item, index) => (

          <div className="solution-box" key={index}>

            <div className="solution-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <ul>

              {item.features.map((feature, i) => (

                <li key={i}>
                  ✓ {feature}
                </li>

              ))}

            </ul>

          </div>

        ))}

      </section>

      <InstallationProcess />
      <FAQ />
        <WhatsAppButton />
      <Footer />

    </>
  );
}

export default Solutions;