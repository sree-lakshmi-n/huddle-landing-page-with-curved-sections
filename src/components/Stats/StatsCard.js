import "./StatsCard.css";
const StatsCard = (props) => {
  return (
    <div className="stats-card">
      <div className="stats-card__iconbox">
        <img src={props.statsData.icon} alt={props.statsData.altMsg} />
      </div>
      <p className="stats-card__data">{props.statsData.data}</p>
      <p className="stats-card__label">{props.statsData.label}</p>
    </div>
  );
};
export default StatsCard;
