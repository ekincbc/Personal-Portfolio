import React from "react";

const PortfolioItem = () => {
  return (
    <>
      <div
        className="portfolio__item portfolio__item--highlight"
        data-aos="fade-up"
      >
        <img
          src={require("../../img/WhoCares.png")}
          alt="project"
          className="portfolio__img"
        />
        <div className="portfolio__desc">
          <h3>Project WhoCares</h3>
          <p>
            A website to connect people of goodwill with people who are
            struggling.
          </p>
          <p className="portfolio__stack">
            Tech Stack: Laravel, ReactJS, CSS, Webpack, MySQL
          </p>
          <a
            href="https://whocares.codeboot.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Explore
          </a>
        </div>
      </div>

      <div
        className="portfolio__item portfolio__item--highlight"
        data-aos="fade-up"
      >
        <img
          src={require("../../img/piggame.png")}
          alt="project"
          className="portfolio__img"
        />
        <div className="portfolio__desc">
          <h3>Vanilla Javascript browser game</h3>
          <p>
            Dice roll game, alternating turns between two players, great for 404
            or 500 pages!
          </p>
          <p className="portfolio__stack">Tech Stack: HTML, CSS, Javascript</p>
          <a
            href="https://ekincbc.github.io/piggame-js/"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Explore
          </a>
        </div>
      </div>

      <div
        className="portfolio__item portfolio__item--highlight"
        data-aos="fade-up"
      >
        <img
          src={require("../../img/bankist.png")}
          alt="project"
          className="portfolio__img"
        />
        <div className="portfolio__desc">
          <h3>Bank App Project</h3>
          <p>
            Vanilla Javascript, exloring private and public classes for ES2022.
          </p>
          <p className="portfolio__stack">
            Tech Stack: HTML, CSS, Javascript, ES21
          </p>
          <a
            href="https://ekincbc.github.io/Project-Bankist-App/"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Explore
          </a>
        </div>
      </div>

      <div
        className="portfolio__item portfolio__item--highlight"
        data-aos="fade-up"
      >
        <img
          src={require("../../img/mapty.png")}
          alt="project"
          className="portfolio__img"
        />
        <div className="portfolio__desc">
          <h3>Mapty - Map your Workout</h3>
          <p>
            Using Leaflet API and vanilla JS to log your workouts, cycling or
            running to the local storage.
          </p>
          <p className="portfolio__stack">
            Tech Stack: HTML, CSS, Javascript, API consumer, OOP, ES21, ES22
          </p>
          <a
            href="https://ekincbc.github.io/mapty-app-js/"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Explore
          </a>
        </div>
      </div>

      <div
        className="portfolio__item portfolio__item--highlight"
        data-aos="fade-up"
      >
        <img
          src={require("../../img/portfolio.png")}
          alt="project"
          className="portfolio__img"
        />
        <div className="portfolio__desc">
          <h3>Porfolio</h3>
          <p>My own portfolio website developed by using ReactJS</p>
          <p className="portfolio__stack">
            Tech Stack: ReactJS, CSS, SCSS, EmailJS
          </p>
          <a
            href="https://github.com/ekincbc/personal-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Explore
          </a>
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
