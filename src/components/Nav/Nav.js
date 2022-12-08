import "./Nav.css";
import Logo from "../UI/Logo";

const Nav = () => {
  return (
    <nav className="top-nav">
      <Logo />
      <button type="button" className="btn btn-cta__top">
        Try it free
      </button>
    </nav>
  );
};
export default Nav;
