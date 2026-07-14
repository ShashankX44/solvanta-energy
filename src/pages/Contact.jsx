import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend
} from "react-icons/fi";

function Contact() {

  return (

    <>

      <Navbar />

      <section className="page-hero">

        <p className="section-tag">
          CONTACT US
        </p>

        <h1>

          Let's Build Your
          <br />
          Solar Future

        </h1>

        <p className="page-description">

          Whether you're planning a residential, commercial or
          industrial solar installation, our team is here to
          help you every step of the way.

        </p>

      </section>

      <section className="contact-section">

        <div className="contact-info">

          <h2>

            Get in Touch

          </h2>

          <div className="contact-item">

            <FiPhone />

            <div>

              <h4>Phone</h4>

              <p>+91 XXXXX XXXXX</p>

            </div>

          </div>

          <div className="contact-item">

            <FiMail />

            <div>

              <h4>Email</h4>

              <p>info@solvantaenergy.com</p>

            </div>

          </div>

          <div className="contact-item">

            <FiMapPin />

            <div>

              <h4>Location</h4>

              <p>Anantapur, Andhra Pradesh</p>

            </div>

          </div>

          <div className="contact-item">

            <FiClock />

            <div>

              <h4>Business Hours</h4>

              <p>Mon - Sat | 9:00 AM - 6:00 PM</p>

            </div>

          </div>

        </div>

        <div className="contact-form">

          <h2>

            Request a Free Consultation

          </h2>

          <form>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <input
              type="text"
              placeholder="Location"
            />

            <textarea
              rows="6"
              placeholder="Tell us about your project..."
            />

            <button>

              <FiSend />

              Send Inquiry

            </button>

          </form>

        </div>

      </section>

      <section className="map-section">

        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Anantapur&output=embed"
          loading="lazy"
        ></iframe>

      </section>
      <WhatsAppButton />

      <Footer />

    </>

  );

}

export default Contact;