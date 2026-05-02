const CardPlaces = ({ info }) => {
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${info.coordinates}`;

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
        <img className="img_places" src={info.image} loading="lazy" alt="" />
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
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn_card_places flex_row">
              <div className="text_map_card">Ver mapa</div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPlaces;
