import "./Footer.css";
import Newsletter from "./Newsletter";
import Contact from "./Contact";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contents">
        <Newsletter />
        <Contact />
      </div>
    </div>
  );
};
export default Footer;
