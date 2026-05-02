import React from "react";

const Gifts = () => {
  return (
    <div className="container_section_gifts flex_column box">
      <div className="section_gifts">
        <div data-aos="zoom-in-up">
          <div className="container_flor_ramas_gifts">
            <div className="img_hortensia_gifts">
              <img src="/images/hortensia_final.png" />
            </div>
            <div className="img_rama_hortensia_gifts">
              <img src="/images/oliva_rama_uno_par.webp" />
            </div>
            <div className="img_rama_hortensia_2_gifts">
              <img src="/images/oliva_rama_uno_par.webp" />
            </div>
          </div>
          <div className="container_gifts_card flex_column">
            <img className="gifts_icon" src="/money-gift.svg" alt="" />
            <div className="gifts_content flex_row">
              <div>
                <p>
                  Tu compañía es nuestro mejor regalo. Si deseas tener un
                  detalle especial, habrá lluvia de sobres.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
