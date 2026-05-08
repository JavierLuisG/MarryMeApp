import CardPlaces from "./CardPlaces";
import config from "../mocks/config.json";

const Places = ({ showReception = false }) => {
  const places = showReception
    ? config.places
    : config.places.filter((p) => p.title === "Ceremonia");

  return (
    <div className="container_places flex_row box">
      {showReception && (
        <div className="container_flor_ramas_places">
          <div data-aos="fade-right">
            <div className="img_ondas_delgadas">
              <img src="/img_lineas_tres.svg" loading="lazy" alt="" />
            </div>
          </div>
        </div>
      )}
      {places.map((info, index) => (
        <CardPlaces key={index} info={info} />
      ))}
    </div>
  );
};

export default Places;
