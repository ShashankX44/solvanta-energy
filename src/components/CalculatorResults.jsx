import { CountUp } from "react-countup";
import {
  FiZap,
  FiCalendar,
  FiTrendingUp,
  FiGrid,
  FiHome,
  FiCpu
} from "react-icons/fi";

function CalculatorResults({ result }) {

  if (!result) return null;

  const cards = [
    {
      title: "Daily Generation",
      value: Number(result.dailyGeneration),
      suffix: " Units",
      icon: <FiZap />
    },
    {
      title: "Monthly Generation",
      value: Number(result.monthlyGeneration),
      suffix: " Units",
      icon: <FiCalendar />
    },
    {
      title: "Yearly Generation",
      value: Number(result.yearlyGeneration),
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
    }
  ];

  return (

    <section className="calculator-results">

      <h2>Your Solar Report</h2>

      <div className="results-grid">

        {cards.map((card, index) => (

          <div
            className="result-card"
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