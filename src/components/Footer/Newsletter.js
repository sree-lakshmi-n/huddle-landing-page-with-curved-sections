import "./Newsletter.css";
import React, { useState } from "react";
const Newsletter = () => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const [enteredInput, setEnteredInput] = useState("");
  const [classes, setClasses] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (emailRegex.test(enteredInput)) {
      setEnteredInput("");
      setClasses("");
    } else {
      setClasses("error");
    }
  };
  const emailValidation = (event) => {
    setEnteredInput(event.target.value);
  };
  return (
    <div className="newsletter-section">
      <p className="newsletter__title">Newsletter</p>
      <p className="newsletter__content">
        To recieve tips on how to grow your community, sign up to our weekly
        newsletter. We’ll never send you spam or pass on your email address
      </p>
      <form className={`newsletter__form ${classes}`} onSubmit={submitHandler}>
        {" "}
        <input
          type="text"
          className="newsletter__input"
          value={enteredInput}
          onChange={emailValidation}
        ></input>
        <button type="submit" className="btn btn-cta newsletter__btn">
          Subscribe
        </button>
      </form>
    </div>
  );
};
export default Newsletter;
