import { useEffect, useState } from "react";
import NumberTime from "./NumberTime";
import date from "../mocks/date.json";

export const TimeRealize = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []);

  function calculateTimeLeft() {
    const difference = new Date(date[0].date) - new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div className="container_time_realize flex_column box">
      <div className="title_time">
        <h2>¡Te esperamos!</h2>
      </div>
      {/* <div data-aos="fade-down-left"> */}
        <div className="container_circle_time flex_column">
          <div className="container_card_time flex_row">
            <NumberTime value={timeLeft.days} text={date[1].days} />
            <hr aria-orientation="vertical" className="hr_vertical_line" />
            <NumberTime value={timeLeft.hours} text={date[1].hours} />
            <hr aria-orientation="vertical" className="hr_vertical_line" />
            <NumberTime value={timeLeft.minutes} text={date[1].minutes} />
            <hr aria-orientation="vertical" className="hr_vertical_line" />
            <NumberTime value={timeLeft.seconds} text={date[1].seconds} />
          </div>
          <div className="oliva_contador_redondo_timerealize">
            <img src="/images/oliva_contador_redondo.png" />
          </div>
          <div className="img_onda_desc_timerealize">
            <img src="/img_onda_desc.svg" />
          </div>
          {/* <img
          className="img_anillos_timerealize"
          src="/images/anillo-de-bodas-verde.png"
        /> */}
        </div>
      {/* </div> */}
    </div>
  );
};
