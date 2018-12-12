import React, { Component } from "react";
import EpicInput from "../common/epic-input";
import { Col, Label, FormGroup } from "reactstrap";

class HeroMemoryImprint extends Component {
  handleChange = (name, value, i) => {
    const memoryImprint = [...this.props.memoryImprint];
    const type = this.props.memoryImprint[0].status.type;
    if (name === "type") {
      memoryImprint.map(imprint => (imprint.status.type = value));
      console.info("CHANGING: ", memoryImprint);
    } else {
      memoryImprint[i].status.increase = value;
    }
    this.props.onChange("memoryImprint", memoryImprint);
  };
  render() {
    const { memoryImprint } = this.props;
    return (
      <React.Fragment>
        <Col md="12">
          <Label>memoryImprint</Label>
        </Col>
        <EpicInput
          size="12"
          name="type"
          value={memoryImprint[0].status.type}
          onChange={this.handleChange}
        />
        <Col md="12">
          <FormGroup row>
            {memoryImprint.map((imprint, i) => (
              <EpicInput
                key={i}
                size="3"
                name={"Rank " + imprint.rank}
                value={imprint.status.increase}
                index={i}
                onChange={this.handleChange}
              />
            ))}
          </FormGroup>
        </Col>
      </React.Fragment>
    );
  }
}

export default HeroMemoryImprint;
