import "./FeatureCard.css";
const FeatureCard = (props) => {
  return (
    <div className="feature-card">
      <div className="feature-card__imgbox">
        <img src={props.image} alt={props.altMsg} />
      </div>
      <div className="feature-card__contentbox">
        <p className="feature-card__title">{props.title}</p>
        <p className="feature-card__content">{props.content}</p>
      </div>
    </div>
  );
};
export default FeatureCard;
