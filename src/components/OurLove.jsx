import config from "../mocks/config.json";

const OurLove = () => {
  return (
    <div className="container_section_ourlove flex_column box">
      <div className="flex_column">
        <img className="foto_icon" src="/camera.svg" alt="" />
      </div>
      <div className="container_slider">
        <div className="slider">
          {config.texts.ourLove.photos.map((src, index) => (
            <div key={index} className="item item_img">
              <img src={src} loading="lazy" alt={`foto ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="container_txt_biblica">
          <p>
            {config.texts.ourLove.quote}
            <br />
            <span className="lectura"> {config.texts.ourLove.quoteReference}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurLove;
