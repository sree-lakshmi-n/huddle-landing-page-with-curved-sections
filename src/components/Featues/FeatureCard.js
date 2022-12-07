import "./FeatureCard.css";
const FeatureCard = (props) => {
  return (
    <div className="feature-card">
      <div className="feature-card__imgbox">
        <img src={props.features.image} alt={props.features.altMsg} />
      </div>
      <div className="feature-card__contentbox">
        <p className="feature-card__title">{props.features.title}</p>
        <p className="feature-card__content">{props.features.content}</p>
      </div>
    </div>
  );
};
export default FeatureCard;
