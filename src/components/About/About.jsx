import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="heading" data-aos="fade-up">
        About me
      </h2>
      <img
        src={require("../../img/ekin.jpg")}
        alt="aneta-webbie"
        className="about__img"
        data-aos="fade-right"
      />
      <div className="about__desc" data-aos="fade-left">
        <p>
          <strong>My name is Ekin Cebeci.</strong> I am a full-stack web
          developer and enjoy learning new trends.{" "}
          <strong>
            I am developing user interfaces in JavaScript and React and backend
            of my projects in PHP and Laravel.
          </strong>
        </p>
        <p>
          I am open to learning new technologies and enjoy working with people{" "}
          <span className="about__desc--underline">
            who are as passionate about all web-related as me
          </span>
          .
        </p>
        <p>Currently, I am based in Prague, Czech Republic.</p>
        <p>
          I like cats, cooking, cycling, gaming, and skiing. If I do not
          develop, you can also meet me cycling or walking randomly in Prague
          streets and getting fascinating from the architecture.
        </p>
        <h4 className="about__cta">
          Get in touch and let's do something great together.
        </h4>
        <a href="#contact" className="button">
          Contact me
        </a>
      </div>
    </section>
  );
};

export default About;
