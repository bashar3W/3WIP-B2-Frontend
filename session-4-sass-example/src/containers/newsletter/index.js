import React from "react";

const NewsLetter = (props) => {
  return (
    <section className="newsletter">
      <div className="bbb-container">
        <div className="newsletter__container">
          <h3 className="newsletter__title">{props?.heading}</h3>
          <input
            type="email"
            className="newsletter__email-input"
            placeholder="Email here..."
          />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
