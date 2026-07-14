import { CountUp } from "react-countup";
import {
  FiZap,
  FiCalendar,
  FiTrendingUp,
  FiGrid,
  FiHome,
  FiCpu,
  FiAward,
  FiCreditCard,
  FiBarChart2,
  FiClock
} from "react-icons/fi";

import { FaRupeeSign } from "react-icons/fa";

function CalculatorResults({ result }) {

  if (!result) return null;

  const cards = [

    {
      title: "Daily Generation",
      value: result.dailyGeneration,
      suffix: " Units",
      icon: <FiZap />
    },

    {
      title: "Monthly Generation",
      value: result.monthlyGeneration,
      suffix: " Units",
      icon: <FiCalendar />
    },

    {
      title: "Yearly Generation",
      value: result.yearlyGeneration,
      suffix: " Units",
      icon: <FiTrendingUp />
    },

    {
      title: "Solar Panels",
      value: result.panels,
      suffix: " Panels",
      icon: <FiGrid />
    },

    {
      title: "Roof Area",
      value: result.roofArea,
      suffix: " sq.ft",
      icon: <FiHome />
    },

    {
      title: "Inverter Efficiency",
      value: result.inverterEfficiency,
      suffix: "%",
      icon: <FiCpu />
    },

    {
      title: "Estimated Cost",
      value: "₹" + result.estimatedCost.toLocaleString(),
      suffix: "",
      icon: <FaRupeeSign />
    },

    {
      title: "Government Subsidy",
      value: "₹" + result.subsidy.toLocaleString(),
      suffix: "",
      icon: <FiAward />
    },

    {
      title: "Final Investment",
      value: "₹" + result.finalInvestment.toLocaleString(),
      suffix: "",
      icon: <FiCreditCard />
    },

    {
      title: "Annual Savings",
      value: "₹" + result.yearlySavings.toLocaleString(),
      suffix: "",
      icon: <FiBarChart2 />
    },

    {
      title: "Payback Period",
      value: result.payback,
      suffix: " Years",
      icon: <FiClock />
    }

  ];

  return (

    <section className="calculator-results">

      <h2>Your Solar Report</h2>

      <div className="results-grid">

        {cards.map((card, index) => (

          <div
            className={`result-card ${
              card.title === "Final Investment"
                ? "featured-card"
                : ""
            }`}
            key={index}
          >

            <div className="result-icon">
              {card.icon}
            </div>

            <h3>{card.title}</h3>

            <p>
              {card.value}
              {card.suffix}
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default CalculatorResults;