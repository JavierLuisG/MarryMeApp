import React from "react";
import config from "../mocks/config.json";

const Gifts = () => {
  return (
    <div className="container_section_gifts flex_column box">
      <div className="section_gifts">
        <div data-aos="zoom-in-up">
          {/* <div className="container_flor_ramas_gifts">
            <div className="img_hortensia_gifts">
              <img src="/images/flores/hortensia_final.png" loading="lazy" alt="" />
            </div>
            <div className="img_rama_hortensia_gifts">
              <img src="/images/hojas/oliva_rama_uno_par.webp" loading="lazy" alt="" />
            </div>
            <div className="img_rama_hortensia_2_gifts">
              <img src="/images/hojas/oliva_rama_uno_par.webp" loading="lazy" alt="" />
            </div>
          </div> */}
          <div className="container_gifts_card flex_column">
            <img className="gifts_icon" src="/mano_regalo.svg" alt="" />
            <h3 className="gifts_title">{config.gifts.title}</h3>
            <div className="gifts_content flex_row">
              <div>
                <p>
                  {config.gifts.message}
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
