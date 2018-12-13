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
    ]
  };

  render() {
    return (
      <React.Fragment>
        <NavBar links={this.state.links} />
        <div className="wrapper">
          <Container className="main-container">
            <Hero />
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
