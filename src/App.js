import React, { Component } from "react";

//Components
import Hero from "./components/hero/hero";
import NavBar from "./components/common/navbar";
import { Container } from "reactstrap";

class App extends Component {
  state = {
    links: [
      {
        id: 0,
        icon: "user",
        title: "Heroes",
        url: "#heroes",
        active: true
      },
      {
        id: 1,
        icon: "address-book",
        title: "Artifacts",
        url: "#artifacts",
        active: false
      },
      {
        id: 2,
        icon: "bolt",
        title: "Status",
        url: "#buffdebuff",
        active: false
      },
      { id: 3, icon: "paw", title: "Monsters", url: "#monsters", active: false }
    ],
    isDark: this.defaultTheme()
  };

  handleTheme = () => {
    this.setState({
      isDark: !this.state.isDark
    });
    localStorage.setItem("isDark", this.state.isDark);
    console.info("Default: ", this.state.isDark);
  };

  defaultTheme() {
    const token = localStorage.getItem("isDark");
    if (token !== undefined) {
      if (token === "true") {
        return false;
      }
      return true;
    }
    return true;
  }

  render() {
    return (
      <React.Fragment>
        <div className={this.state.isDark ? "wrapper dark" : "wrapper"}>
          <NavBar
            links={this.state.links}
            isDark={this.state.isDark}
            toggleTheme={this.handleTheme}
          />
          <Container className="main-container">
            <Hero isDark={this.state.isDark} />
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
