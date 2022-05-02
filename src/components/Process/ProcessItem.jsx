import React from "react";

const ProcessItem = () => {
  return (
    <>
      <div className="process__item">
        <div className="process__circle"></div>
        <h4 className="process__title" data-aos="fade-up">
          Discover
        </h4>
        <p data-aos="fade-up">
          Tell me about your project and we brainstorm together the features to
          create a plan for your product to launch.
        </p>
      </div>

      <div className="process__item">
        <div className="process__circle"></div>
        <h4 className="process__title" data-aos="fade-up">
          Design
        </h4>
        <p data-aos="fade-up">
          We design the wireframe and agree together how to create the best
          experience for your users to present your brand.
        </p>
      </div>

      <div className="process__item">
        <div className="process__circle"></div>
        <h4 className="process__title" data-aos="fade-up">
          Deploy
        </h4>
        <p data-aos="fade-up">
          We protoype and develop your product. We work together intensily to
          incorporate your feedback.
        </p>
      </div>

      <div className="process__item">
        <div className="process__circle"></div>
        <h4 className="process__title" data-aos="fade-up">
          Be Ready
        </h4>
        <p data-aos="fade-up">
          We deploy your product and now your website is ready to get the
          traction. Get out there and grow your audience.
        </p>
      </div>
    </>
  );
};

export default ProcessItem;
