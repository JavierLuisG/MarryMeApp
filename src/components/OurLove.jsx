import OwlCarousel from "react-owl-carousel";

const OurLove = () => {
  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    smartSpeed: 3000,
    margin: 10,
    responsive: {
      0: { items: 1 },
      1000: { items: 2 },
    },
  };

  return (
    <div className="container_section_ourlove flex_column box">
      <div className="rama_detail">
        <div data-aos="fade-right">
          <img src="/images/oliva_rama_dos_par.webp" />
        </div>
      </div>
      <img
        className="img_curvas_doble_derecha_detail"
        src="/img_curvas_doble_derecha.svg"
      />
      <div className="img_onda_delgada_detail1">
        <img src="/img_onda_delgada.svg" />
      </div>
      <div className="img_onda_delgada_detail2">
        <img src="/img_onda_delgada.svg" />
      </div>
      <div className="flex_column">
        <img className="foto_icon" src="/camera.svg" alt="" />
      </div>
      <div className="container_slider">
        <div className="slider">
          <OwlCarousel className="owl-theme" {...options}>
            <div className="item item_img">
              <img src="/images/IMG_2710.jpg" />
            </div>
            <div className="item item_img">
              <img src="/images/IMG_2696.jpg" />
            </div>
            <div className="item item_img">
              <img src="/images/IMG_2860.jpg" />
            </div>
            <div className="item item_img">
              <img src="/images/IMG_2625.jpg" />
            </div>
            <div className="item item_img">
              <img src="/images/IMG_2469.jpg" />
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
