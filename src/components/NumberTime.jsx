const NumberTime = ({ value, text }) => {
  return (
    <div className="card_date flex_column">
      <div className="number_date">{value}</div>
      <div className="text_date">{text}</div>
    </div>
  );
};

export default NumberTime;
