import { Link } from "react-router-dom";
import infoPlaces from "../mocks/info.json";
import { useState } from "react";

const CardPlaces = ({ info }) => {
  const [destino, setDestino] = useState("");
  const ceremonia = "4.671275695145204, -74.06657677193387";
  const recepcion = "4.715041171152234, -74.05303419309324";
  
  const handleClick = () => {
    const selectedDestination =
      info.title === infoPlaces[0].title ? ceremonia : recepcion;
    setDestino(selectedDestination);
  };

  return (
    <div className="container_card_places flex_column">
      <div className="cinta_container flex_row">
        <div className="img_cinta1">
          <img src="/img_cinta1.svg" />
        </div>
        <h3 className="info_title">{info.title}</h3>
        <div className="img_cinta2">
          <img src="/img_cinta2.svg" />
        </div>
      </div>
      <div className="content_info_places flex_column">
        <img className="img_places" src={info.image} alt="argollas" />
        <div className="info_places flex_column">
          <div className="section_info_places">
            <p className="info_places_title">{info.date.title}</p>
            <p>{info.date.info}</p>
            <p>{info.hour.info}</p>
          </div>
          <div className="section_info_places">
            <p className="info_places_title">{info.place.title}</p>
            <p>{info.place.info}</p>
          </div>
          <div className="section_info_places">
            <p className="info_places_title">{info.address.title}</p>
            <p>{info.address.info}</p>
          </div>
          <Link
            to={`https://www.google.com/maps/dir/?api=1&destination=${destino}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
          >
            <button className="btn_card_places flex_row">
              <div className="text_map_card">Ver mapa</div>
            </button>
          </Link>
          {/* <div className="section_info_places">
            <p>Si llevas tu vehículo </p>
          </div> */}
          {/* <Link
            to={`https://www.google.com/maps/dir/?api=1&destination=${info.parkinglot.info}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
          >
            <button className="btn_card_places flex_row">
              <div className="text_map_card">Parqueadero</div>
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CardPlaces;
