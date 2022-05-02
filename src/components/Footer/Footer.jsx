import React from "react";
import "./Footer.scss";
import SocialLinks from "../Social/SocialLinks.jsx";

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="heading" data-aos="fade-up">
        <div className="footer__line"></div>Nice to meet you!
        <div className="footer__line"></div>
      </h3>
      <div className="social__container">
        <SocialLinks />
      </div>
      <p className="footer__copy">Copyright &copy; Ekin Cebeci 2022</p>
    </footer>
  );
};

export default Footer;
