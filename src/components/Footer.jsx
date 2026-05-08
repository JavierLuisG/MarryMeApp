import React from "react";

const WA_NUMBER = "573209455269";
const WA_MESSAGE = encodeURIComponent("Hola, vi tu invitación de matrimonio y me gustaría una similar 😊");

const Footer = () => {
  return (
    <footer className="container_footer flex_column">
      <div className="footer_inner flex_row">
        <span className="footer_brand">
          Diseñado por <strong>Javier Luis</strong>
        </span>
        <a
          href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="footer_wa_btn"
          title="¿Quieres una invitación como esta?"
        >
          <img src="/whatsapp.svg" alt="WhatsApp" width="16" height="16" />
          <span className="footer_wa_text">Solicita información</span>
        </a>
      </div>
      <span className="footer_copy">© 2026 · Derechos reservados</span>
    </footer>
  );
};

export default Footer;
