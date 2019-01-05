import React, { Component } from "react";
import EpicInput from "../common/epic-input";
import { Col, CustomInput, FormGroup } from "reactstrap";
import BadgeTip from "../common/badgetip";

class HeroMemoryImprint extends Component {
  state = {
    memoryImprint: this.props.memoryImprint,
    memoryImprintFormation: this.props.memoryImprintFormation
  };

  componentDidUpdate(prevProps) {
    const memoryImprint = [...this.props.memoryImprint];

    if (
      this.props.memoryImprint !== prevProps.memoryImprint &&
      this.props.memoryImprintFormation !== prevProps.memoryImprintFormation
    ) {
      if (this.props.memoryImprintFormation) {
        const memoryImprintFormation = { ...this.props.memoryImprintFormation };
        this.setState({ memoryImprint, memoryImprintFormation });
      } else {
        const memoryImprintFormation = {
          ...this.props.defaultMemoryImprintFormation
        };
        this.setState({ memoryImprint, memoryImprintFormation });
      }
    }
  }

  onBlur = () => {
    this.props.onChange("memoryImprint", this.state.memoryImprint);
  };

  onFormationBlur = () => {
    this.props.onChange(
      "memoryImprintFormation",
      this.state.memoryImprintFormation
    );
  };

  handleChange = (name, value, i) => {
    const memoryImprint = [...this.state.memoryImprint];
    const memoryImprintFormation = { ...this.state.memoryImprintFormation };

    if (name === "type") {
      memoryImprint.map(imprint => (imprint.status.type = value));
    } else if (
      name === "north" ||
      name === "south" ||
      name === "east" ||
      name === "west"
    ) {
      memoryImprintFormation[name] = value;
    } else {
      memoryImprint[i].status.increase = value;
    }
    this.setState({ memoryImprint, memoryImprintFormation });
  };
  render() {
    const { memoryImprint, memoryImprintFormation } = this.state;
    const { defaultMemoryImprintFormation, stats } = this.props;
    return (
      <React.Fragment>
        <EpicInput
          size="12"
          type="select"
          name="type"
          id="memoryImprint"
          value={memoryImprint[0].status.type}
          options={stats}
          onChange={this.handleChange}
          onBlur={this.onBlur}
        />

        <Col md="12">
          <label>
            memoryImprintFormation
            <BadgeTip
              value="The highlighted squares next to a hero's memory imprint"
              id="memoryImprintFormation"
            />
          </label>
          <FormGroup row>
            {Object.keys(defaultMemoryImprintFormation).map((formation, i) => (
              <Col key={i}>
                <CustomInput
                  id={"memoryImprintFormation-" + i}
                  type="checkbox"
                  name={Object.keys(defaultMemoryImprintFormation)[i]}
                  label={Object.keys(defaultMemoryImprintFormation)[i]}
                  checked={
                    memoryImprintFormation[
                      Object.keys(defaultMemoryImprintFormation)[i]
                    ]
                  }
                  onChange={e =>
                    this.handleChange(
                      e.currentTarget.name,
                      e.currentTarget.checked
                    )
                  }
                  onBlur={this.onFormationBlur}
                />
              </Col>
            ))}
          </FormGroup>
        </Col>
        <Col md="12">
          <FormGroup row>
            {memoryImprint.map((imprint, i) => (
              <EpicInput
                key={i}
                size="3"
                id={"memoryImprintValue-" + i}
                tooltip="Percents are converted to decimal. Example: 5% -> 0.05"
                name={"Rank " + imprint.rank}
                value={imprint.status.increase}
                index={i}
                onChange={this.handleChange}
                hasPercent={true}
                onBlur={this.onBlur}
              />
            ))}
          </FormGroup>
        </Col>
      </React.Fragment>
    );
  }
}

export default HeroMemoryImprint;
