import logo from "../../images/logo.svg";
import "./Logo.css";
const Logo = (props) => {
  const classes = props.className || "";
  return (
    <div className={`logo ${classes}`}>
      <img src={logo} alt="Company logo" className="logo__img" />
    </div>
  );
};
export default Logo;
