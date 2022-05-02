import React from "react";

const SkillsItem = () => {
  return (
    <>
      <div className="skills__item" data-aos="fade-right">
        <div className="skills__label">HTML</div>
        <div className="skills__progress-bar">
          <div className="skills__progress skills__progress--80"></div>
          <div className="skills__percentage">80%</div>
        </div>
      </div>

      <div className="skills__item" data-aos="fade-right">
        <div className="skills__label">CSS, Sass</div>
        <div className="skills__progress-bar">
          <div className="skills__progress skills__progress--80"></div>
          <div className="skills__percentage">80%</div>
        </div>
      </div>

      <div className="skills__item" data-aos="fade-right">
        <div className="skills__label">JavaScript</div>
        <div className="skills__progress-bar">
          <div className="skills__progress skills__progress--80"></div>
          <div className="skills__percentage">80%</div>
        </div>
      </div>

      <div className="skills__item" data-aos="fade-right">
        <div className="skills__label">React</div>
        <div className="skills__progress-bar">
          <div className="skills__progress skills__progress--70"></div>
          <div className="skills__percentage">70%</div>
        </div>
      </div>

      <div className="skills__item" data-aos="fade-right">
        <div className="skills__label">PHP</div>
        <div className="skills__progress-bar">
          <div className="skills__progress skills__progress--60"></div>
          <div className="skills__percentage">60%</div>
        </div>
      </div>

      <div className="skills__item" data-aos="fade-right">
        <div className="skills__label">Laravel</div>
        <div className="skills__progress-bar">
          <div className="skills__progress skills__progress--70"></div>
          <div className="skills__percentage">70%</div>
        </div>
      </div>

      <div className="skills__item" data-aos="fade-right">
        <div className="skills__label">UX</div>
        <div className="skills__progress-bar">
          <div className="skills__progress skills__progress--60"></div>
          <div className="skills__percentage">60%</div>
        </div>
      </div>
    </>
  );
};

export default SkillsItem;
