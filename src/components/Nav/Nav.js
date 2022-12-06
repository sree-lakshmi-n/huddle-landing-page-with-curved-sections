import "./Nav.css";
import logo from "../../images/logo.svg";
const Nav = () => {
  return (
    <nav className="top-nav">
      <div className="logo">
        <img src={logo} alt="Company logo" className="logo__img" />
      </div>
      <button type="button" className="btn btn-cta__top">
        Try it free
      </button>
    </nav>
  );
};
export default Nav;
