import React from "react";
import "./Navigation.scss";
import NavigationLink from "./NavigationLink.jsx";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        { text: "Home", url: "#root" },
        { text: "Skills", url: "#skills" },
        { text: "Portfolio", url: "#portfolio" },
        { text: "About me", url: "#about" },
        { text: "Contact", url: "#contact" },
      ],
      menu: false,
      activeIndex: null,
    };
  }
  handleMenuOpen = () => {
    this.setState({ menu: true });
  };

  handleMenuClose = () => {
    this.setState({ menu: false });
  };

  handleClick = (index) => {
    this.setState({ activeIndex: index });
  };

  render() {
    return (
      <nav className="nav">
        <img
          src={require("../../img/menu.png")}
          alt="menu-icon"
          className="nav__menu"
          onClick={this.handleMenuOpen}
        />
        <img
          src={require("../../img/menu-close.png")}
          alt="menu-close-icon"
          className={
            this.state.menu ? "nav__close nav__close--active" : "nav__close"
          }
          onClick={this.handleMenuClose}
        />
        <ul
          className={
            this.state.menu
              ? "nav__container nav__container--active"
              : "nav__container"
          }
        >
          {this.state.links.map((link, index) => (
            <NavigationLink
              key={index}
              text={link.text}
              url={link.url}
              index={index}
              isActive={this.state.activeIndex === index}
              onClick={this.handleClick}
            />
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
