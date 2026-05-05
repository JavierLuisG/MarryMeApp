import CardPlaces from "./CardPlaces";
import config from "../mocks/config.json";

const Places = () => {
  return (
    <div className="container_places flex_row box">
      <div className="container_flor_ramas_places">
        <div data-aos="fade-right">
          <div className="img_hortensia_places">
            <img src="/images/flores/hortensia_final.png" loading="lazy" alt="" />
          </div>
          <div className="img_rama_hortensia_places">
            <img src="/images/hojas/oliva_rama_uno_par.webp" loading="lazy" alt="" />
          </div>
          <div className="img_rama_hortensia_2_places">
            <img src="/images/hojas/oliva_rama_uno_par.webp" loading="lazy" alt="" />
          </div>
          <div className="img_ondas_delgadas">
            <img src="/img_lineas_tres.svg" loading="lazy" alt="" />
          </div> 
        </div>
      </div>
      {config.places.map((info, index) => (
        <CardPlaces key={index} info={info} />
      ))}
    </div>
  );
};

export default Places;
