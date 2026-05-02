import OwlCarousel from "react-owl-carousel";

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
            "Más valen dos que uno solo, pues obtienen mayor ganancia de su
            esfuerzo. Si uno cae, lo levantará su compañero; pero ¡ay del solo
            que cae!, que no tiene quien lo levante. [...] La cuerda de tres
            hilos no es fácil de romper."
            <br />
            <span className="lectura"> Ecle 4, 9-12.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurLove;
