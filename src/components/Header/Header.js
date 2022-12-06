import "./Header.css";
import image from "../../images/screen-mockups.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-content__title">
          {" "}
          Build The Community Your Fans Will Love
        </h1>
        <p className="header-content__text">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.{" "}
        </p>
        <button className="btn btn-cta"> Get Started For Free</button>
      </div>
      <div className="header-image">
        <img src={image} alt="Screen mockups image" />
      </div>
    </header>
  );
};
export default Header;
