import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CalculatorForm from "../components/CalculatorForm";
import CalculatorResults from "../components/CalculatorResults";

import { calculateSolar } from "../utils/calculator";

function Calculator() {

  const [result, setResult] = useState(null);

  const handleCalculate = (data) => {

    const report = calculateSolar(

      data.systemType,

      data.systemSize,

      data.season

    );

    setResult(report);

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
          estimate energy generation for Anantapur.

        </p>

      </section>

      <CalculatorForm onCalculate={handleCalculate} />

      <CalculatorResults result={result} />

      <Footer />

    </>

  );

}

export default Calculator;