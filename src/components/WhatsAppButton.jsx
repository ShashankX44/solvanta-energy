import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {

  const phone = "91XXXXXXXXXX"; // Replace with your number

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