import React from "react";
import "./Social.scss";
import SocialLinks from "./SocialLinks.jsx";

const Social = () => {
  return (
    <section className="social">
      <h3 className="heading" data-aos="fade-up">
        Find me here
      </h3>
      <div className="social__container">
        <SocialLinks />
      </div>
    </section>
  );
};

export default Social;
