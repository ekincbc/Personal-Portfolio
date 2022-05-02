import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';
import Navigation from './Navigation/Navigation.jsx';
import Header from './Header/Header.jsx';
import Process from './Process/Process.jsx';
import Skills from './Skills/Skills.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';
import About from './About/About.jsx';
import Social from './Social/Social.jsx';
import Contact from './Contact/Contact.jsx';
import Footer from './Footer/Footer.jsx';
import Switch from './Switch/Switch.jsx';
import './dark-mode.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: false 
    };
  };

  componentDidMount() {
    AOS.init();
  };

  handleSwitch = () => {
    if (this.state.mode === true) {
      this.setState({ mode: false });
    } else {
      this.setState({ mode: true });
    }
  };

  render() {
    return (
      <div className={this.state.mode ? 'app app--dark' : 'app'}>
        <Navigation />
        <Header />
        <Process />
        <Skills />
        <Portfolio />
        <About />
        <Social />
        <Contact />
        <Footer />
        <Switch handleSwitch={this.handleSwitch} mode={this.state.mode} />
      </div>
    );
  }
}

export default App;
