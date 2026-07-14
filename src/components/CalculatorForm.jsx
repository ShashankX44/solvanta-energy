import { useState } from "react";
import {
  FiZap,
  FiBatteryCharging,
  FiHome,
  FiSun,
  FiCloudRain,
  FiCloud
} from "react-icons/fi";

function CalculatorForm({ onCalculate }) {

  const [systemType, setSystemType] = useState("");
  const [systemSize, setSystemSize] = useState("");
  const [customKW, setCustomKW] = useState("");
  const [season, setSeason] = useState("");

  const handleCalculate = () => {

    let finalKW = systemSize;

    if (systemSize === "Custom") {

      finalKW = Number(customKW);

      if (
        isNaN(finalKW) ||
        finalKW < 1 ||
        finalKW > 200
      ) {
        alert("Enter a value between 1 and 200 kW");
        return;
      }

    }

    onCalculate({

      systemType,

      systemSize: finalKW,

      season

    });

  };

  return (

    <section className="calculator-wrapper">

      <h2 className="calc-title">
        Configure Your Solar System
      </h2>

      {/* STEP 1 */}

      <div className="calc-step">

        <h3>Choose Solar System Type</h3>

        <div className="option-grid">

          <div

            className={`option-card ${
              systemType==="On-Grid" ? "active":""
            }`}

            onClick={()=>setSystemType("On-Grid")}

          >

            <FiZap size={34}/>

            <h4>On-Grid</h4>

            <p>Best for reliable electricity.</p>

          </div>

          <div

            className={`option-card ${
              systemType==="Hybrid" ? "active":""
            }`}

            onClick={()=>setSystemType("Hybrid")}

          >

            <FiBatteryCharging size={34}/>

            <h4>Hybrid</h4>

            <p>Grid + Battery Backup.</p>

          </div>

          <div

            className={`option-card ${
              systemType==="Off-Grid" ? "active":""
            }`}

            onClick={()=>setSystemType("Off-Grid")}

          >

            <FiHome size={34}/>

            <h4>Off-Grid</h4>

            <p>Independent solar system.</p>

          </div>

        </div>

      </div>

      {/* STEP 2 */}

      {systemType && (

      <div className="calc-step fade">

        <h3>Choose System Size</h3>

        <div className="kw-grid">

          {[1,2,3,4,5,6,7,8].map((kw)=>(

            <button

              key={kw}

              className={
                systemSize===kw
                ? "kw-card active"
                : "kw-card"
              }

              onClick={()=>setSystemSize(kw)}

            >

              {kw} kW

            </button>

          ))}

          <button

            className={
              systemSize==="Custom"
              ? "kw-card active"
              : "kw-card"
            }

            onClick={()=>setSystemSize("Custom")}

          >

            Custom

          </button>

        </div>

        {systemSize==="Custom" && (

          <div className="custom-box">

            <input

              type="number"

              placeholder="Enter 1 - 200 kW"

              value={customKW}

              onChange={(e)=>setCustomKW(e.target.value)}

            />

          </div>

        )}

      </div>

      )}

      {/* STEP 3 */}

      {(systemSize!=="" &&
      (systemSize!=="Custom" || customKW)) && (

      <div className="calc-step fade">

        <h3>Choose Season</h3>

        <div className="option-grid">

          <div

            className={`option-card ${
              season==="Summer"?"active":""
            }`}

            onClick={()=>setSeason("Summer")}

          >

            <FiSun size={34}/>

            <h4>Summer</h4>

          </div>

          <div

            className={`option-card ${
              season==="Winter"?"active":""
            }`}

            onClick={()=>setSeason("Winter")}

          >

            <FiCloud size={34}/>

            <h4>Winter</h4>

          </div>

          <div

            className={`option-card ${
              season==="Monsoon"?"active":""
            }`}

            onClick={()=>setSeason("Monsoon")}

          >

            <FiCloudRain size={34}/>

            <h4>Monsoon</h4>

          </div>

        </div>

      </div>

      )}

      {/* BUTTON */}

      {season && (

      <div className="calculate-area fade">

        <button
        type="button"
        
          className="calculate-btn"

          onClick={handleCalculate}

        >

          Calculate Solar Output

        </button>

      </div>

      )}

    </section>

  );

}

export default CalculatorForm;