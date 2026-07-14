import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CalculatorForm from "../components/CalculatorForm";
import CalculatorResults from "../components/CalculatorResults";

import { calculateSolar } from "../utils/calculator";

function Calculator() {

  const [result, setResult] = useState(null);
  const reportRef = useRef(null);

  const handleCalculate = (data) => {

    const report = calculateSolar(

      data.systemType,
      data.systemSize,
      data.season

    );

   setResult(report);

setTimeout(() => {
  reportRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}, 150);

  };

  return (

    <>

      <Navbar />

      <section className="page-hero">

        <p className="section-tag">
          SOLAR SAVINGS CALCULATOR
        </p>

        <h1>
          Design Your
          <br />
          Solar System
        </h1>

        <p className="page-description">
          Select your solar configuration and instantly
          estimate energy generation
        </p>

      </section>

      <CalculatorForm onCalculate={handleCalculate} />

      <div ref={reportRef}>
  <CalculatorResults result={result} />
</div>

      <Footer />

    </>

  );

}

export default Calculator;