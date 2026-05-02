import { useParams } from "react-router-dom";
import config from "../mocks/config.json";

const Head = () => {
  const params = useParams();
  return (
    <div className="container_head flex_row box">
      <div className="recuadro flex_column">
      <div data-aos="fade-down-right">
          <div className="date_hr">
            <hr
              aria-orientation="horizontal"
              className="hr_line line_position"
            />
            <span className="date">{config.wedding.displayDate}</span>
          </div>
          <h1 className="names_couple flex_row">
            <span>
              {config.couple.husband.name} <br />&<br />
              {config.couple.wife.name}
            </span>
          </h1>
          <hr aria-orientation="horizontal" className="hr_line line_bottom" />
          <p className="text_head text_secondary_p">
            {config.texts.head.invitation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Head;
