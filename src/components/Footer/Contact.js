import "./Contact.css";
import Logo from "../UI/Logo";
const Contact = () => {
  return (
    <div className="contact-container">
      <Logo className="contact-logo" />
      <div className="contact-content">
        <p className="contact-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
          quam, hendrerit lacinia vestibulum a, ultrices quis sem.{" "}
        </p>
        <p className="contact-info">
          <ion-icon name="call"></ion-icon>
          <a href="tel:+1-543-123-4567">Phone: +1-543-123-4567</a>
        </p>
        <p className="contact-info">
          <ion-icon name="mail"></ion-icon>
          <a href="mailto:example@huddle.com">example@huddle.com</a>
        </p>
      </div>
    </div>
  );
};
export default Contact;
