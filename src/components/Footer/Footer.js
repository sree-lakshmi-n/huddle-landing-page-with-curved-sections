import "./Footer.css";
import Newsletter from "./Newsletter";
import Contact from "./Contact";
const Footer = () => {
  const appList = ["facebook", "instagram", "twitter"];
  return (
    <div className="footer">
      <div className="footer-contents">
        <Newsletter />
        <Contact appList={appList} />
      </div>
    </div>
  );
};
export default Footer;
