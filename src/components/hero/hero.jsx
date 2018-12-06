import React, { Component } from "react";

import HeroInput from "./hero-input";

import { Row, Col } from "reactstrap";

class Hero extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Heroes</h1>
        <Row>
          <Col>
            <HeroInput />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Hero;
