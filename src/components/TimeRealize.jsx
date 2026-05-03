import { useEffect, useState } from "react";
import NumberTime from "./NumberTime";
import config from "../mocks/config.json";

function calculateTimeLeft() {
  const difference = new Date(config.wedding.date) - new Date();
  if (difference <= 0) return null;
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export const TimeRealize = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (timeLeft === null) return;
    const intervalId = setInterval(() => {
      const t = calculateTimeLeft();
      setTimeLeft(t);
      if (t === null) clearInterval(intervalId);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container_time_realize flex_column box">
      <div className="title_time">
        <h2>{config.texts.countdown.title}</h2>
      </div>
      <div className="container_circle_time flex_column">
        <div className="container_card_time flex_column">
          <div className="numbers_row flex_row">
            {timeLeft !== null ? (
              <>
                <NumberTime value={timeLeft.days} text={config.wedding.countdown.days} />
                <hr aria-orientation="vertical" className="hr_vertical_line" />
                <NumberTime value={timeLeft.hours} text={config.wedding.countdown.hours} />
                <hr aria-orientation="vertical" className="hr_vertical_line" />
                <NumberTime value={timeLeft.minutes} text={config.wedding.countdown.minutes} />
                <hr aria-orientation="vertical" className="hr_vertical_line" />
                <NumberTime value={timeLeft.seconds} text={config.wedding.countdown.seconds} />
              </>
            ) : (
              <h2>{config.texts.countdown.ended}</h2>
            )}
          </div>
          <img src="/heart.svg" alt="" className="heart_countdown" />
        </div>
        <div className="oliva_contador_redondo_timerealize">
          <img src="/images/img_circuloContador.png" loading="lazy" alt="" />
          <img src="/images/flores_contador.png" loading="lazy" alt="" className="flores_contador_overlay" />
        </div>
        <div className="img_onda_desc_timerealize">
          <img src="/img_onda_desc.svg" loading="lazy" alt="" />
        </div>
      </div>
    </div>
  );
};
