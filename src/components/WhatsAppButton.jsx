import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {

  const phone = "7093132598"; // Replace with your number

  return (

    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-btn"
    >

      <FaWhatsapp />

    </a>

  );

}

export default WhatsAppButton;