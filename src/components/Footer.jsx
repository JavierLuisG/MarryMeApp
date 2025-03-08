import React from "react";

const Footer = () => {
  return (
    <footer className="container_footer flex_column">
      <section className="footer_header flex_row">
        <span className="text_header">Powered by</span>
      </section>
      <section className="body_container flex_row">
        <div className="info_container flex_row">
          <article className="text_info flex_column">
            <span className="span_text_info">© 2025 - Javier Luis</span>
            <span className="span_text_info">
              Todos los derechos reservados.
            </span>
          </article>
          <article className="networks_contact flex_row">
            <a
              href="https://www.linkedin.com/in/javierluisg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="img" src="/linkedin.svg" alt="" />
            </a>
            <a
              href="https://github.com/JavierLuisG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="img" src="/github.svg" alt="" />
            </a>
          </article>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
