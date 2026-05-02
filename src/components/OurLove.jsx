import OwlCarousel from "react-owl-carousel";
import config from "../mocks/config.json";

const OurLove = () => {
  const options = {
    loop: true,
    nav: false,
    dots: true,
    margin: 10,
    responsive: {
      0: { items: 1 },
      1000: { items: 2 },
    },
  };

  return (
    <div className="container_section_ourlove flex_column box">
      <div className="flex_column">
        <img className="foto_icon" src="/camera.svg" alt="" />
      </div>
      <div className="container_slider">
        <div className="slider">
          <OwlCarousel className="owl-theme" {...options}>
            <div className="item item_img">
              <img src="/images/1.jpg" />
            </div>
            <div className="item item_img">
              <img src="/images/2.jpg" />
            </div>
            <div className="item item_img">
              <img src="/images/3.jpg" />
            </div>
            <div className="item item_img">
              <img src="/images/4.jpg" />
            </div>
            <div className="item item_img">
              <img src="/images/5.jpg" />
            </div>
          </OwlCarousel>
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
