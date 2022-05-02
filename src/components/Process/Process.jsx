import React from "react";
import "./Process.scss";
import ProcessItem from "./ProcessItem.jsx";

const Process = () => {
  return (
    <section className="process">
      <p className="process__quote" data-aos="fade-up">
        Let's work together to make <strong>your product stand out</strong>. I
        create beautiful and functional websites.
        <br />I work with my clients step by step{" "}
        <strong>
          from the idea stage until the fully functioning web application
        </strong>
        .
      </p>
      <div className="process__container">
        <ProcessItem />
      </div>
    </section>
  );
};

export default Process;
