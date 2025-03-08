import React from "react";

const SectionDetail = () => {
  return (
    <div className="container_section_detail flex_column box">
      <h2>Detalles</h2>
      <div className="flex_row">
        <div className="suit_container flex_column">
          <img className="img_suit_man" src="/img_suit_man.svg" alt="" />
        </div>
        <div className="flex_column">
          <div className="title_dress_code">
            <p>DRESS CODE</p>
            <p>Formal</p>
          </div>
          <div className="hr_heart flex_column">
            <hr aria-orientation="vertical" className="hr_line_detail_heart" />
            <img src="/heart.svg" alt="" width={30} />
          </div>
        </div>
        <div className="suit_container flex_column">
          <img className="img_suit_girl" src="/img_suit_girl.svg" alt="" />
        </div>
      </div>
      <div className="flex_column">
        <p style={{ width: "80%", maxWidth: "600px", textAlign: "center" }}>
          Hemos reservado para nosotros los colores <b>Blanco</b> y <b>Verde</b> en
          esta ocasión.
        </p>
      </div>
      <div className="flex_column">
        <p style={{ width: "100%", textAlign: "center" }}>
          Papá y mamá ¡disfrutemos de esta noche!
          <br />
          <b>niños dulces sueños.</b>
        </p>
      </div>
    </div>
  );
};

export default SectionDetail;
