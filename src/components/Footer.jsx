import React from "react";

const Footer = () => {
  return (
    <div className="container_footer flex_row">
      <div className="container_text flex_column">
        <div className="first_text flex_row">
          <span>© 2025 - Javier Luis</span>
          <div className="container_ig">
            <a
              href="https://instagram.com/javierluisg94"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="flex_row" src="/instagram.svg" alt="" />
            </a>
          </div>
        </div>
        <hr aria-orientation="horizontal" className="hr_line line_footer" />
        <span>Todos los derechos reservados.</span>
      </div>
    </div>
  );
};

export default Footer;
