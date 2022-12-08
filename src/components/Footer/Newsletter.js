import "./Newsletter.css";
const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <p className="newsletter__title">Newsletter</p>
      <p className="newsletter__content">
        To recieve tips on how to grow your community, sign up to our weekly
        newsletter. We’ll never send you spam or pass on your email address
      </p>
      <form className="newsletter__form">
        {" "}
        <input type="email" className="newsletter__input"></input>
        <button type="button" className="btn btn-cta newsletter__btn">
          Subscribe
        </button>
      </form>
    </div>
  );
};
export default Newsletter;
