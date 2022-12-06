import "./Nav.css";
import logo from "../../images/logo.svg";
const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Company logo" />
      </div>
      <button type="button" className="btn btn-cta">
        Try it free
      </button>
    </nav>
  );
};
export default Nav;
