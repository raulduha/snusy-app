// WhatsAppButton.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './WhatsappButton.css'; // Asegúrate de tener este archivo con los estilos correspondientes

const WhatsAppButton = () => {
  // Tu número de teléfono en formato internacional sin signos '+' o guiones
  const whatsappUrl = `https://wa.me/56956899114`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
  );
};

export default WhatsAppButton;

