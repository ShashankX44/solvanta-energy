import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta-section">

      <div className="cta-box">

        <p className="section-tag">
          START YOUR SOLAR JOURNEY
        </p>

        <h2>
          Ready to Reduce
          <br />
          Your Electricity Bills?
        </h2>

        <p>
          Get a free consultation from our solar experts and
          discover the perfect solution for your home or business.
        </p>

        <Link to="/contact" className="cta-btn">
          Get Free Consultation
        </Link>

      </div>

    </section>
  );
}

export default CTA;