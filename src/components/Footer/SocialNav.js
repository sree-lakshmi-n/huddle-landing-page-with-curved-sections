import "./SocialNav.css";
const SocialNav = (props) => {
  return (
    <div className="social-icon">
      <ion-icon name={`logo-${props.appName}`}></ion-icon>
    </div>
  );
};
export default SocialNav;
