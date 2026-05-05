import React, { useState, useEffect } from "react";

const EnvelopeIntro = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    setTimeout(() => {
      setIsHidden(true);
      document.body.style.overflow = "";
    }, 2200);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleOpen();
    }
  };

  if (isHidden) return null;

  return (
    <div
      className={`envelope-scene${isOpen ? " envelope-scene--opening" : ""}`}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Abrir invitación de boda"
    >
      <div className="envelope-container">
        <div
          className={`envelope-flap-group${isOpen ? " flap-group--open" : ""}`}
        >
          <div className="envelope-flap-top">
            <h3 className="env-names">Brayan &amp; Natalia</h3>
          </div>

          <img
            className="envelope-seal"
            src="/images/stamp.png"
            alt="sello de lacre"
          />
        </div>

        <div className={`envelope-body${isOpen ? " envelope-body--open" : ""}`}>
          <div className="envelope-body-inner">
            <p className="env-pre-names">Con gran alegría</p>
            <p className="env-hint-line1">Te tenemos una noticia…</p>
          </div>
          <div
            className={`envelope-hint${isOpen ? " envelope-hint--hidden" : ""}`}
          >
            <p className="env-hint-line2">¡PULSA AQUÍ Y DESLIZA!</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EnvelopeIntro;
