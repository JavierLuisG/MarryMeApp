import config from "../mocks/config.json";

const ConfirmAttendance = () => {
  const waMessage = config.texts.confirmAttendance.whatsappMessage;
  
  return (
    <div className="container_confirm flex_column box">
      <section>
        <h2>{config.texts.confirmAttendance.title}</h2>
        <span>{config.texts.confirmAttendance.subtitle}</span>
      </section>
      <section>
        <div className="container_btns flex_row">
          <a
            href={`https://wa.me/${config.couple.husband.phone}?text=${encodeURIComponent(
              waMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="container_btn_confirm flex_row"
          >
            <img src="/whatsapp.svg" alt="" />
            <div className="text_btn_confirm">{config.couple.husband.name}</div>
          </a>
          <a
            href={`https://wa.me/${config.couple.wife.phone}?text=${encodeURIComponent(
              waMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="container_btn_confirm flex_row"
          >
            <img src="/whatsapp.svg" alt="" />
            <div className="text_btn_confirm">{config.couple.wife.name}</div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ConfirmAttendance;
